import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';

import * as artworkActions from '../../actions/artworkActions';
import * as appActions from '../../actions/appActions';
import Header from '../common/Header';
import ArtworkList from './ArtworkList';
import ArtworkGrouping from './ArtworkGrouping';
import ArtworkDetail from './ArtworkDetail';


/**
 * Main Artwork Component
 * Container Component provides the data and behavior to presentational components.
 */

const styles = {
  container: {
    maxWidth: '80%',
    margin: '0 auto'
  },
  actionsContainerStyle: {
    border: 'none'
  },
  dialogRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0
  },
  dialogContent: {
    position: 'relative',
    width: '80vw',
    transform: '',
    padding: 0
  },
  dialogBody: {
    paddingBottom: 0
  }
};

class ArtworksPage extends Component {

  state = {
    selectedArtwork: undefined
  }

  onExpand = (selectedArtwork) => {
    this.context.router.push(`/artwork/${selectedArtwork.languageCode}/${selectedArtwork.movieId}`);
  }

  onClose = () => {
    this.context.router.push('/');
  }

  onShowMore = () => {
    this.props.actions.showMoreItems();
  }

  onShowLess = () => {
    this.props.actions.showLessItems();
  }

  onShowAll = () => {
    this.props.actions.showAllItems(this.props.total);
  }

  onDropDownChange = (event, index, value) => {
    this.props.actions.changeGroupBy(value);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.artwork) {
      this.setState({ selectedArtwork: { ...nextProps.artwork } });
    } else {
      this.setState({ selectedArtwork: undefined });
    }
  }

  render() {
    const { artworks, groupBy, offset, total, browser } = this.props;
    return (
      <div>
        <Header title="Artworks" rightElement={
          <ArtworkGrouping groupBy={groupBy} onDropDownChange={this.onDropDownChange}/>
        }/>
        <div style={styles.container}>
          <ArtworkList
            artworks={artworks}
            groupBy={groupBy}
            offset={offset}
            total={total}
            browser={browser}
            onExpand={this.onExpand}
            onShowMore={this.onShowMore}
            onShowLess={this.onShowLess}
            onShowAll={this.onShowAll}/>
          {this.state.selectedArtwork &&
            <Dialog
              actions={
                <FlatButton
                  label="Close"
                  primary
                  onClick={this.onClose}
                />}
              actionsContainerStyle={styles.actionsContainerStyle}
              contentStyle={ styles.dialogContent }
              bodyStyle={ styles.dialogBody }
              style={ styles.dialogRoot }
              repositionOnUpdate={ false }
              modal={false}
              open={this.state.selectedArtwork !== undefined}
              onRequestClose={this.onClose}
              autoScrollBodyContent
              autoDetectWindowHeight={false}
            >
              <ArtworkDetail artwork={this.state.selectedArtwork} browser={browser}/>
            </Dialog>}
        </div>
      </div>
    );
  }
}

ArtworksPage.propTypes = {
  actions: PropTypes.object.isRequired,
  artworks: PropTypes.object.isRequired,
  groupBy: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired
};

ArtworksPage.contextTypes = {
  router: PropTypes.object
};

/**
* Method responsible for finding specific Artwork to show its details.
* if not found, redirects to root url and returns null
* @param artworks, groupBy, languageCode, movieId
* @return {artwork} or null if not found.
**/
function getArtworkByLanguageCodeMovieId(artworks, groupBy, languageCode, movieId, router) {
  let artwork;
  if (groupBy === 'languageCode' && artworks[languageCode]) {
    artwork = artworks[languageCode].filter(a =>
      a.movieId === movieId
    );
  } else if (groupBy === 'movieId' && artworks[movieId]) {
    artwork = artworks[movieId].filter(a =>
      a.languageCode === languageCode
    );
  }

  if (artwork && artwork.length) {
    return artwork[0];
  }

  // no Artwork found, redirecting to root
  router.push('/');
  return null;
}

function mapStateToProps(state, ownProps) {
  const languageCode = ownProps.params.languageCode;
  const movieId = ownProps.params.movieId;
  const groupBy = state.app.groupBy;
  const artworks = state.artworks[groupBy];
  const total = artworks ? Object.keys(artworks).length : 0;
  let artwork = null;

  if (languageCode && artworks) {
    artwork = getArtworkByLanguageCodeMovieId(
      artworks, groupBy, languageCode, parseInt(movieId, 10), ownProps.router
    );
  }

  return {
    groupBy,
    total,
    artwork,
    artworks: artworks || {},
    offset: state.app.offset,
    browser: state.browser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...artworkActions, ...appActions }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtworksPage);
