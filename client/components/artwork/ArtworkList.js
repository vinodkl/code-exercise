import React, { PropTypes } from 'react';
import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import ArtworkListItem from './ArtworkListItem';

/**
 * Stateless Component responsible for rendering the a list of Artworks by Categories.
 * This categories are movieId and languageCode.
 * PAGE_SIZE controls how many sections will be shown per offset.
 */

const PAGE_SIZE = 1;
const styles = {
  container: {
    display: 'flex',
    marginTop: '60px',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto'
  },
  header: {
    color: 'black'
  },
  button: {
    margin: 12
  }
};

/**
* Decoupled method responsible for generating the list of Artworks per section.
* @param groupedArtworks, groupBy, size, onExpand
* @return list of ArtworkListItem separated by Subheader (sections).
**/
function generateList(groupedArtworks, groupBy, size, onExpand) {
  const itemList = [];
  Object.keys(groupedArtworks).slice(0, size).forEach((key) => {
    const artworks = groupedArtworks[key];
    itemList.push(
      <Subheader style={styles.header} key={`subheader-${key}`} inset>
        <h2>{key}</h2>
      </Subheader>
    );
    artworks.map((artwork, index) =>
      itemList.push(
        <ArtworkListItem
          key={`listitem-${key}-${index}`}
          groupBy={groupBy}
          artwork={artwork}
          onExpand={onExpand}/>)
    );
  });
  return itemList;
}

/**
* Method responsible for making the Artwork List responsive.
* @param {browser} containing window sizes
* @return Number of Columns.
**/
function calculateNumCols(browser) {
  let numCols = 4;
  if (!browser) {
    return numCols;
  } else if (browser.is.extraSmall) {
    numCols = 1;
  } else if (browser.is.small) {
    numCols = 2;
  } else if (browser.is.medium) {
    numCols = 3;
  }
  return numCols;
}

const ArtworkList = (
  { artworks, groupBy, offset, total, browser, onExpand, onShowMore, onShowLess, onShowAll }) => {
  const size = PAGE_SIZE * offset;
  return (
    <div>
      <div style={styles.container}>
        <GridList
          cols={calculateNumCols(browser)}
          cellHeight={180}
          style={styles.gridList}
        >
          {generateList(artworks, groupBy, size, onExpand)}
        </GridList>
      </div>
      <RaisedButton
        label="Show More"
        primary
        disabled={size === total}
        style={styles.button}
        onClick={onShowMore}
      />
      <span>{`${size} of ${total}`} Categories</span>
      <RaisedButton
        label="Show Less"
        disabled={size === PAGE_SIZE}
        style={styles.button}
        onClick={onShowLess}
      />
      <RaisedButton
        label="Show All"
        disabled={size === total}
        style={styles.button}
        onClick={onShowAll}
      />
    </div>
  );
};

ArtworkList.propTypes = {
  artworks: PropTypes.object.isRequired,
  groupBy: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  browser: PropTypes.object,
  onExpand: PropTypes.func.isRequired,
  onShowLess: PropTypes.func.isRequired,
  onShowMore: PropTypes.func.isRequired,
  onShowAll: PropTypes.func.isRequired
};

export default ArtworkList;
