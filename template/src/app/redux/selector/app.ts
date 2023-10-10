import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '@store/all-reducer';

export const getAppStateSelector = createSelector(
  (state: RootState) => state.app,
  app => ({
    showDialog: app.showDialog,
  }),
);
