import { createSlice } from '@reduxjs/toolkit';
import authOperations from '../../redux/auth/authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  replace:false

};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending](state) {
     state.replace=false 
    }, 
    [authOperations.register.fulfilled](state, action) {
      console.log(action)
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      // state.replace = true
    },
    [authOperations.register.rejected](state, action) {
      state.error = action.payload
    },
    
    [authOperations.logIn.pending](state) {
      state.replace = false
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected](state, action) {
      state.error = action.payload
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.replace = true;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.replace = false
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const authSliceReducer = authSlice.reducer;