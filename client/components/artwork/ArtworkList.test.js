import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import ArtworkList from './ArtworkList';
import { normalizedArtworks } from '../../stubs';


describe('Component - ArtworkList', () => {
  const total = Object.keys(normalizedArtworks).length; // always showing all categories

  const createElement = (groupBy, onExpand, onShowMore, onShowLess, onShowAll) => (
    shallow(<ArtworkList
      artworks={normalizedArtworks[groupBy]}
      groupBy={groupBy}
      offset={total}
      total={total}
      onExpand={onExpand}
      onShowMore={onShowMore}
      onShowLess={onShowLess}
      onShowAll={onShowAll}/>)
  );

  it('should be rendered by movieId', () => {
    const onExpand = sinon.spy();
    const onShowMore = sinon.spy();
    const onShowLess = sinon.spy();
    const onShowAll = sinon.spy();
    const element = createElement('movieId', onExpand, onShowMore, onShowLess, onShowAll);
    expect(element.find('ArtworkListItem').length).toBe(4);
    expect(element.find('Subheader').length).toBe(2);

    element.find('RaisedButton').at(0).simulate('click');
    expect(onShowMore.called).toBe(true);
    element.find('RaisedButton').at(1).simulate('click');
    expect(onShowLess.called).toBe(true);
    element.find('RaisedButton').at(2).simulate('click');
    expect(onShowAll.called).toBe(true);
  });

  it('should be rendered by languageCode', () => {
    const onExpand = sinon.spy();
    const onShowMore = sinon.spy();
    const onShowLess = sinon.spy();
    const onShowAll = sinon.spy();
    const element = createElement('languageCode', onExpand, onShowMore, onShowLess, onShowAll);
    expect(element.find('ArtworkListItem').length).toBe(2);
    expect(element.find('Subheader').length).toBe(2);
  });
});
