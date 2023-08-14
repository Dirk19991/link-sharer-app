import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IdResponse, IdState } from './types';

const initialState: IdState = {
  profile: null,
};

export const getIdSlice = createSlice({
  name: 'getId',
  initialState,
  reducers: {
    updateId: (state, action: PayloadAction<IdResponse>) => {
      state.profile = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateId } = getIdSlice.actions;

export default getIdSlice.reducer;
