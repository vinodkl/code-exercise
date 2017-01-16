import expect from 'expect';
import * as types from '../actions/actionTypes';
import appReducer from './appReducer';
import initialState from './initialState';

describe('App Reducer', () => {
  const previousState = {
    groupBy: initialState.app.groupBy,
    offset: initialState.app.offset
  };

  it('should return the initial state', () => {
    expect(appReducer(undefined, {})).toEqual(initialState.app);
  });

  it('should handle CHANGE_GROUPING', () => {
    const nextState = {
      groupBy: 'languageCode',
      offset: initialState.app.offset
    };

    const action = {
      type: types.CHANGE_GROUPING,
      groupBy: 'languageCode'
    };

    expect(appReducer(previousState, action)).toEqual(nextState);
  });

  it('should handle SHOW_MORE_ITEMS', () => {
    const nextState = {
      groupBy: 'movieId',
      offset: 2
    };
    const action = {
      type: types.SHOW_MORE_ITEMS
    };

    expect(appReducer(previousState, action)).toEqual(nextState);
  });

  it('should handle SHOW_LESS_ITEMS', () => {
    const nextState = {
      groupBy: 'movieId',
      offset: 0
    };
    const action = {
      type: types.SHOW_LESS_ITEMS
    };

    expect(appReducer(previousState, action)).toEqual(nextState);
  });

  it('should handle SHOW_ALL_ITEMS', () => {
    const nextState = {
      groupBy: 'movieId',
      offset: 5
    };
    const action = {
      type: types.SHOW_ALL_ITEMS,
      offset: 5
    };

    expect(appReducer(previousState, action)).toEqual(nextState);
  });
});
