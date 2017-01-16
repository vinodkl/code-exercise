import * as types from './actionTypes';

/**
 * @param groupBy
 * @return redux action responsible for updating artwork groupBy state.
 **/
export function changeGroupBy(groupBy) {
  return { type: types.CHANGE_GROUPING, groupBy };
}

/**
 * @param groupBy
 * @return redux action responsible for increasing artwork offset state.
 **/
export function showMoreItems() {
  return { type: types.SHOW_MORE_ITEMS };
}

/**
 * @param groupBy
 * @return redux action responsible for decreasing artwork offset state.
 **/
export function showLessItems() {
  return { type: types.SHOW_LESS_ITEMS };
}

/**
 * @param groupBy
 * @return redux action responsible for updating artwork offset state.
 **/
export function showAllItems(offset) {
  return { type: types.SHOW_ALL_ITEMS, offset };
}
