import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PictureState } from './types';

const initialState: PictureState = {
  file: '',
};

export const addPictureSlice = createSlice({
  name: 'addPicture',
  initialState,
  reducers: {
    updateFile: (state, action: PayloadAction<string>) => {
      state.file = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateFile } = addPictureSlice.actions;

export default addPictureSlice.reducer;
