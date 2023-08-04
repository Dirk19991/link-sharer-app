import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './../../../app/store';
import { PersonalDetailsState } from './types';

export const selectPersonalDetails = (state: RootState): PersonalDetailsState =>
  state.addPersonalDetails;

export const selectPersonalDetailsValues = createSelector(
  [selectPersonalDetails],
  (personalDetails: PersonalDetailsState) => {
    return Object.values(personalDetails);
  },
);
