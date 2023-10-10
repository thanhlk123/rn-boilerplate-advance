import {combineReducers} from '@reduxjs/toolkit';

import {todoReducer} from '@redux-slice';
import {appReducer} from '@redux-slice';

export const allReducer = combineReducers({
  todo: todoReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof allReducer>;
