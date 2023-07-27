import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LinksState, Platform } from './types';

const initialState: LinksState = {
  links: [
    {
      active: true,
      platform: null,
      link: null,
      id: 1,
    },
    {
      active: false,
      platform: null,
      link: null,
      id: 2,
    },
    {
      active: false,
      platform: null,
      link: null,
      id: 3,
    },
    {
      active: false,
      platform: null,
      link: null,
      id: 4,
    },
    {
      active: false,
      platform: null,
      link: null,
      id: 5,
    },
  ],
  activeLinks: 1,
};

export const addLinkSlice = createSlice({
  name: 'addLink',
  initialState,
  reducers: {
    add: state => {
      if (state.activeLinks === 5) return;
      const biggestInactiveID = state.links
        .filter(link => link.active === false)
        .sort((a, b) => b.id - a.id)[0];
      biggestInactiveID.active = true;
      state.activeLinks++;
    },
    remove: (state, action: PayloadAction<number>) => {
      state.links.map(elem => {
        if (elem.id === action.payload) {
          elem.active = false;
          elem.platform = null;
          elem.link = null;
          state.activeLinks--;
          return elem;
        } else {
          return elem;
        }
      });
    },
    changePlatform: (
      state,
      action: PayloadAction<{ id: number; platform: Platform }>,
    ) => {
      state.links.map(elem => {
        if (elem.id === action.payload.id) {
          elem.platform = action.payload.platform;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, changePlatform } = addLinkSlice.actions;

export default addLinkSlice.reducer;
