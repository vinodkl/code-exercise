import React, { PropTypes } from 'react';
import { Card, CardMedia } from 'material-ui/Card';
import { ListItem } from 'material-ui/List';
import { GridList } from 'material-ui/GridList';

/**
 * Stateless Component responsible for rendering details of an Artwork.
 */

const styles = {
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto'
  },
  list: {
    cursor: 'default'
  }
};

/**
* Method responsible for making the Artwork Detail responsive.
* @param {browser} containing window sizes
* @return Number of Columns.
**/
function calculateNumCols(browser) {
  let numCols = 2;
  if (!browser) {
    return numCols;
  } else if (browser.is.extraSmall) {
    numCols = 1;
  }
  return numCols;
}

const ArtworkDetail = ({ artwork, browser }) => (
  <Card>
    <CardMedia>
      <img src={artwork.fullSizeImageUrl}/>
    </CardMedia>
    <GridList
      cols={calculateNumCols(browser)}
      cellHeight={80}
      style={styles.gridList}>
      <ListItem style={styles.list} primaryText="Movie Id:" secondaryText={artwork.movieId} />
      <ListItem style={styles.list} primaryText="Movie Name:" secondaryText={artwork.movieName} />
      <ListItem style={styles.list} primaryText="Image Type:" secondaryText={artwork.imageType} />
      <ListItem style={styles.list} primaryText="Language Code:" secondaryText={artwork.languageCode} />
    </GridList>
  </Card>
);

ArtworkDetail.propTypes = {
  artwork: PropTypes.object.isRequired,
  browser: PropTypes.object
};

export default ArtworkDetail;
