import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    fetchUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUserStart, fetchUserSuccess, fetchUserFailure } = userSlice.actions;

export const fetchUserData = () => async (dispatch) => {
  dispatch(fetchUserStart());

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const userData = await response.json();
    dispatch(fetchUserSuccess(userData));
  } catch (error) {
    dispatch(fetchUserFailure(error.message || 'Unable to fetch user data.'));
  }
};

export default userSlice.reducer;
