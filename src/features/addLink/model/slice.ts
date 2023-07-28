import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LinksState, Platform } from './types';

const initialState: LinksState = {
  links: [
    {
      platform: null,
      link: null,
      id: 1,
    },
  ],
};

export const addLinkSlice = createSlice({
  name: 'addLink',
  initialState,
  reducers: {
    add: state => {
      if (state.links.length === 5) return;
      state.links.push({
        platform: null,
        link: null,
        id:
          state.links.length > 0
            ? state.links[state.links.length - 1].id + 1
            : 1,
      });
    },
    remove: (state, action: PayloadAction<number>) => {
      state.links.splice(action.payload, 1);
    },
    changePlatform: (
      state,
      action: PayloadAction<{ index: number; platform: Platform }>,
    ) => {
      state.links[action.payload.index].platform = action.payload.platform;
    },
    changeLink: (
      state,
      action: PayloadAction<{ index: number; link: string | null }>,
    ) => {
      state.links[action.payload.index].link = action.payload.link;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, changePlatform, changeLink } = addLinkSlice.actions;

export default addLinkSlice.reducer;
