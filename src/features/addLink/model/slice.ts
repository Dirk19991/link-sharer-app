import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LinksState } from './types';

const initialState: LinksState = {
  links: [
    {
      active: true,
      platform: 'Github',
      link: '',
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
      for (let i = 0; i < state.links.length; i++) {
        if (state.links[i].active === true) continue;
        if (state.links[i].active === false) {
          state.links[i].active = true;
          break;
        }
      }
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
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = addLinkSlice.actions;

export default addLinkSlice.reducer;
