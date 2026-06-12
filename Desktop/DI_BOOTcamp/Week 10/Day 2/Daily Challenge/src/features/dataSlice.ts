import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  data: unknown[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchStarted(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess(state, action: PayloadAction<unknown[]>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchStarted, fetchSuccess, fetchFailed } = dataSlice.actions;
export default dataSlice.reducer;
