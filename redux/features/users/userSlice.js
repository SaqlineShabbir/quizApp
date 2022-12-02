import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUsers, login, postUser } from './usersApi';

const initialState = {
  users: [],
  loggedInUser: undefined,
  isError: false,
  isLoading: false,
  error: '',
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const users = await getUsers();
  return users;
});
export const createUser = createAsyncThunk('user/createUsers', async (data) => {
  const user = await postUser(data);
  return user;
});

export const loginUser = createAsyncThunk('user/login', async (data) => {
  const loggedInUser = await login(data);

  return loggedInUser;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      console.log(action.payload);

      state.loggedInUser = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.loggedInUser = undefined;
      localStorage.removeItem('loggedInUser');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error?.message;
      state.users = [];
    });
    builder.addCase(createUser.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.users.push(action.payload);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error?.message;
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.loggedInUser = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error?.message;
    });
  },
});
export const { userLoggedIn, userLoggedOut } = userSlice.actions;
export default userSlice.reducer;
