import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';  // Correct import for redux-thunk
import rootReducer from './reducers/rootReducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),  // Adding thunk to middleware
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
