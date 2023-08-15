import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IdResponse, IdState, Status } from './types';

const initialState: IdState = {
  profile: null,
  status: 'idle',
};

export const getIdSlice = createSlice({
  name: 'getId',
  initialState,
  reducers: {
    updateId: (state, action: PayloadAction<IdResponse>) => {
      state.profile = action.payload;
    },
    updateStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateId, updateStatus } = getIdSlice.actions;

export default getIdSlice.reducer;
