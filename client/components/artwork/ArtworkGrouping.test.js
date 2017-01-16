import React from 'react';
import sinon from 'sinon';
import expect from 'expect';
import { shallow } from 'enzyme';
import ArtworkGrouping from './ArtworkGrouping';

describe('Component - ArtworkGrouping', () => {
  it('should be rendered', () => {
    const onDropDownChange = sinon.spy();
    const element = shallow(<ArtworkGrouping groupBy="movieId" onDropDownChange={onDropDownChange}/>);
    expect((element.find('DropDownMenu').props().value)).toBe('movieId');
    expect(element.find('MenuItem').length).toBe(2);
  });
});
