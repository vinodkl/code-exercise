import expect from 'expect';
import * as types from './actionTypes';
import * as appActions from './appActions';

// Test a sync action
describe('App Actions', () => {
  describe('changeGroupBy', () => {
    it('should create a CHANGE_GROUPING action', () => {
      const expectedAction = {
        type: types.CHANGE_GROUPING,
        groupBy: 'movieId'
      };

      const action = appActions.changeGroupBy('movieId');

      expect(action).toEqual(expectedAction);
    });
  });

  describe('showMoreItems', () => {
    it('should create a SHOW_MORE_ITEMS action', () => {
      const expectedAction = {
        type: types.SHOW_MORE_ITEMS
      };

      const action = appActions.showMoreItems();

      expect(action).toEqual(expectedAction);
    });
  });

  describe('showLessItems', () => {
    it('should create a SHOW_LESS_ITEMS action', () => {
      const expectedAction = {
        type: types.SHOW_LESS_ITEMS
      };

      const action = appActions.showLessItems();

      expect(action).toEqual(expectedAction);
    });
  });

  describe('showAllItems', () => {
    it('should create a SHOW_ALL_ITEMS action', () => {
      const expectedAction = {
        type: types.SHOW_ALL_ITEMS,
        offset: 5
      };

      const action = appActions.showAllItems(5);

      expect(action).toEqual(expectedAction);
    });
  });
});
