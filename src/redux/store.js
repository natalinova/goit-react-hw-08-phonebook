import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { persistedReducer} from './contactsSlice';
// import { contactsReducer } from './contactsSlice';
import { combineReducers } from 'redux';
import {authSliceReducer} from './auth/authSlice'
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const rootReducer = combineReducers({
  contacts: persistedReducer,
  filter: filterSlice.reducer,
  auth: authSliceReducer
});
export const store = configureStore({
  reducer: rootReducer,
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: 
        {ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]},})
})
export const persistor = persistStore(store);