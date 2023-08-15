import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ShareLinkState } from './types';

const initialState: ShareLinkState = {};

export const shareLinkSlice = createSlice({
  name: 'shareLink',
  initialState,
  reducers: {
    addShareLinkId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    removeShareLinkId: () => {
      return {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { addShareLinkId, removeShareLinkId } = shareLinkSlice.actions;

export default shareLinkSlice.reducer;
