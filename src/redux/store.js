import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { filterSlice } from './filterSlice';
import { persistedReducer} from './contactsSlice';
// import { contactsReducer } from './contactsSlice';
import { combineReducers } from 'redux';
import {authSliceReducer} from './auth/authSlice'
import {
  persistStore,
  persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const rootReducer = combineReducers({
  contacts: persistedReducer,
  filter: filterSlice.reducer,
  auth: persistReducer(authPersistConfig, authSliceReducer)
});
export const store = configureStore({
  reducer: rootReducer,
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: 
        {ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]},})
})
export const persistor = persistStore(store);