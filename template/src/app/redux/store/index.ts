import {configureStore} from '@reduxjs/toolkit';
import {allReducer} from '@store/all-reducer';
import reduxDebugger from 'redux-flipper';
import {persistStore, persistReducer} from 'redux-persist';

import {listenerMiddleware} from '@common/redux/listener';
import {reduxPersistStorage} from '@utils/storage';

const devMode = __DEV__;

const middleware = [] as any[];

if (devMode) {
  middleware.push(reduxDebugger());
}

const persistConfig = {
  key: 'root',
  storage: reduxPersistStorage,
  whitelist: ['todo'],
};

const persistedReducer = persistReducer(persistConfig, allReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: devMode,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false})
      .prepend(listenerMiddleware.middleware)
      .concat(middleware),
});

export const persistore = persistStore(store);
