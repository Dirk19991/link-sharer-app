import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './../../../app/store';
import { LinksState } from './types';

export const selectLinks = (state: RootState): LinksState => state.addLink;

export const selectMappedLinks = createSelector(
  [selectLinks],
  (selectLinks: LinksState) => {
    return selectLinks.links.map(elem => elem.link);
  },
);
