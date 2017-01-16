import React, { PropTypes } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

/**
 * Stateless Component responsible for rendering Drop Down Menu
 * for changing Artworks grouping
 */

const dropDownItems = [
  { value: 'movieId', text: 'Movie ID' },
  { value: 'languageCode', text: 'Language Code' }
];

const ArtworkGrouping = ({ groupBy, onDropDownChange }) => (
  <DropDownMenu value={groupBy} onChange={ onDropDownChange }>
    {
      dropDownItems.map((item, index) =>
        <MenuItem key={`item-${index}`} value={item.value} primaryText={item.text} />
      )
    }
  </DropDownMenu>
);

ArtworkGrouping.propTypes = {
  groupBy: PropTypes.string.isRequired,
  onDropDownChange: PropTypes.func.isRequired
};

export default ArtworkGrouping;
