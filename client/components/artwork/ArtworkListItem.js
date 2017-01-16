import React, { PropTypes } from 'react';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Expand from 'material-ui/svg-icons/navigation/fullscreen';

/**
 * Stateless Component responsible for rendering an Artwork List Item.
 * with small amount of information
 */

const styles = {
  img: {
    cursor: 'pointer',
    width: '100%'
  }
};

const getSubtitle = (artwork, groupBy) => {
  const label = groupBy === 'movieId' ? 'Language: ' : 'ID: ';
  const value = groupBy === 'movieId' ? artwork.languageCode : artwork.movieId;
  return `${label}${value}`;
};

const ArtworkListItem = ({ groupBy, artwork, onExpand }) => (
  <GridTile
    title={artwork.movieName}
    subtitle={getSubtitle(artwork, groupBy)}
    actionIcon={<IconButton onClick={() => { onExpand(artwork); }}><Expand color="white" /></IconButton>}
  >
    <img style={styles.img} onClick={() => { onExpand(artwork); }} src={artwork.thumbnailUrl} />
  </GridTile>
);

ArtworkListItem.propTypes = {
  groupBy: PropTypes.string.isRequired,
  artwork: PropTypes.object.isRequired,
  onExpand: PropTypes.func.isRequired
};

export default ArtworkListItem;
