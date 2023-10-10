import {SLICE_NAME} from '@common';
import {IAppState} from '@redux-action-type/index';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialAppState: IAppState = {
  internetState: true,
  profile: {},
  token: undefined,
  loadingApp: false,
  showDialog: false,
};

const appSlice = createSlice({
  name: SLICE_NAME.APP,
  initialState: initialAppState,
  reducers: {
    setInternetState: (state, {payload}: PayloadAction<boolean>) => {
      state.internetState = payload;
    },
    setToken: (state, {payload}: PayloadAction<string>) => {
      state.token = payload;
    },
    setAppProfile: (state, {payload}: PayloadAction<unknown>) => {
      state.profile = payload;
    },
    startLoadApp: state => {
      state.loadingApp = true;
    },
    endLoadApp: state => {
      state.loadingApp = false;
    },
    startProcess: state => {
      state.showDialog = true;
    },
    endProcess: state => {
      state.showDialog = false;
    },
    logout: state => {
      state.token = undefined;
      state.profile = {};
    },
  },
});

export const {reducer: appReducer, actions: appActions} = appSlice;
