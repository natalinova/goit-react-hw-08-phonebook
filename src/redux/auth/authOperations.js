import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Toastify from 'toastify-js';
import '../../styled/toastify.css';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async (registerData, {rejectWithValue} )=> {
    try {
      console.log(registerData)
      const { data } = await axios.post('/users/signup', registerData);
      console.log(data)
      token.set(data.token);
      console.log(token)
    return data;
    } catch (error) {
      Toastify({
                text: ` ${error.message} error - this user is already registered`,
                gravity: "bottom",
                position: 'center',
                stopOnFocus: true,
            }).showToast();
    return rejectWithValue(error)
  }
});


const logIn = createAsyncThunk('auth/login', async (loginData, {rejectWithValue}) => {
  try {
    const { data } = await axios.post('/users/login', loginData);
    token.set(data.token);
    return data;
  } catch (error) {
    Toastify({
                text: `${error.message} error`,
                gravity: "bottom",
                position: 'center',
                stopOnFocus: true,
            }).showToast();
   return rejectWithValue(error.message);
  }
});


const logOut = createAsyncThunk('auth/logout', async (_, {rejectWithValue}) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return rejectWithValue(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('токена нема - нема що оновлювати');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return error;
    }
  },
);

const authOperations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default authOperations;