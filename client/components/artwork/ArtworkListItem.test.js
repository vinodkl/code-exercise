import React from 'react';
import sinon from 'sinon';
import expect from 'expect';
import { shallow } from 'enzyme';
import ArtworkListItem from './ArtworkListItem';

import { artwork } from '../../stubs';

describe('Component - ArtworkListItem', () => {
  it('should be rendered', () => {
    const onExpand = () => {};
    const element = shallow(<ArtworkListItem groupBy="movieId" artwork={artwork} onExpand={onExpand}/>);
    expect(element.find('GridTile').length).toBe(1);
    expect(element.find('GridTile').props().subtitle).toBe(`Language: ${artwork.languageCode}`);
    expect(element.find('img').length).toBe(1);
    expect(element.find('img').props().src).toBe(artwork.thumbnailUrl);
  });

  it('should call function when image is clicked', () => {
    const onExpand = sinon.spy();
    const element = shallow(<ArtworkListItem artwork={artwork} groupBy="movieId" onExpand={onExpand}/>);
    element.find('img').simulate('click');
    expect(onExpand.called).toBe(true);
  });

  it('should call function when expand icon is clicked', () => {
    const onExpand = sinon.spy();
    const element = shallow(<ArtworkListItem artwork={artwork} groupBy="movieId" onExpand={onExpand}/>);
    element.props().actionIcon.props.onClick();
    expect(onExpand.called).toBe(true);
  });
});
