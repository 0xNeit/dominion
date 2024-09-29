import { combineReducers, configureStore } from "@reduxjs/toolkit";
import alertReducer from './alert/reducer'
import guiReducer from './gui/reducer'
import { FLUSH, PAUSE, PERSIST, PersistConfig, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import localForage from 'localforage'

export const INDEXED_DB_REDUX_TABLE_NAME = 'redux'

const appReducers = {
  alertReducer,
  guiReducer
}

export const allReducers = combineReducers(appReducers)

export type AppState = ReturnType<typeof allReducers>

const persistConfig: PersistConfig<AppState> = {
  key: 'root',
  storage: localForage.createInstance({
    name: INDEXED_DB_REDUX_TABLE_NAME,
    driver: localForage.LOCALSTORAGE,
  }),
}

const persistedReducer = persistReducer(persistConfig, allReducers)

function createStore() {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      }),
  })
  const persistorStore = persistStore(store)
  return { store, persistorStore }
}

export const { store, persistorStore } = createStore()

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;