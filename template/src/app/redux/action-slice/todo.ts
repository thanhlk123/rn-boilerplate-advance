import {PayloadAction, createAction, createSlice} from '@reduxjs/toolkit';

import {SLICE_NAME} from '@common';
import {ITodo} from '@redux-action-type/todo';
import * as Action from '@redux-action-type/index';

const initialState: ITodo[] = [];

const updateChecklist = createAction(
  Action.UPDATE_CHECKLIST_ACTION,
  (body: any, onSucceeded: () => void, onFailure: (msg: string) => void) => ({
    payload: {
      body,
      onSucceeded,
      onFailure,
    },
  }),
);

const todoSlice = createSlice({
  name: SLICE_NAME.TODO,
  initialState,
  reducers: {
    addChecklist: (state: ITodo[], {payload}: PayloadAction<ITodo>) => {
      state = state.concat(payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(
      updateChecklist,
      (state: ITodo[], {payload}: PayloadAction<{body: ITodo}>) => {
        state = state.concat(payload.body);
      },
    );
  },
});

export const {reducer: todoReducer} = todoSlice;
export const todoActions = {
  ...todoSlice.actions,
  updateChecklist,
};
