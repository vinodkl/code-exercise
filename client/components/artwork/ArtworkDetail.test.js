import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import ArtworkDetail from './ArtworkDetail';
import { artwork } from '../../stubs';

describe('Component - ArtworkDetail', () => {
  it('should be rendered', () => {
    const element = shallow(<ArtworkDetail artwork={artwork} />);
    expect(element.find('Card').length).toBe(1);
    expect(element.find('img').length).toBe(1);
    expect(element.find('img').node.props.src).toBe(artwork.fullSizeImageUrl);

    const gridList = element.find('GridList');
    expect(gridList.length).toBe(1);
    expect(gridList.find('ListItem').length).toBe(4);

    const ListItems = gridList.find('ListItem');
    expect(ListItems.at(0).props().secondaryText).toBe(artwork.movieId);
    expect(ListItems.at(1).props().secondaryText).toBe(artwork.movieName);
    expect(ListItems.at(2).props().secondaryText).toBe(artwork.imageType);
    expect(ListItems.at(3).props().secondaryText).toBe(artwork.languageCode);
  });
});
