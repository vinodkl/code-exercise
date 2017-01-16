import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
 * Reducer responsible for managing Application state.
 */

export default function appReducer(state = initialState.app, action) {
  switch (action.type) {
    case types.CHANGE_GROUPING:
      return { ...state, groupBy: action.groupBy, offset: 1 };

    case types.SHOW_MORE_ITEMS:
      return { ...state, offset: state.offset + 1 };

    case types.SHOW_LESS_ITEMS:
      return { ...state, offset: state.offset - 1 };

    case types.SHOW_ALL_ITEMS:
      return { ...state, offset: action.offset };

    default:
      return state;
  }
}
