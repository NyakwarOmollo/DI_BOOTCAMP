import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Story } from '../../../../types';

interface StoriesState {
  stories: Story[];
}

const initialState: StoriesState = {
  stories: [],
};

const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    setStories: (state, action: PayloadAction<Story[]>) => {
      state.stories = action.payload;
    },
    addStory: (state, action: PayloadAction<Story>) => {
      state.stories.unshift(action.payload);
    },
  },
});

export const { setStories, addStory } = storiesSlice.actions;
export default storiesSlice.reducer;
