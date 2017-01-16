import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Header from './Header';


describe('Component - Header', () => {
  it('should be rendered', () => {
    const element = shallow(<Header title="Netflix Artworks" />);
    expect(element.find('AppBar').length).toBe(1);
    expect(element.prop('title')).toEqual('Netflix Artworks');
  });
});
