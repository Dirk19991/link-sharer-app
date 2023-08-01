import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PersonalDetailsFields, PersonalDetailsState } from './types';

const initialState: PersonalDetailsState = {
  name: {
    value: '',
    validated: 'idle',
  },
  surname: {
    value: '',
    validated: 'idle',
  },
  email: {
    value: '',
    validated: 'idle',
  },
};

export const addPersonalDetailsSlice = createSlice({
  name: 'addPicture',
  initialState,
  reducers: {
    addName: (state, action: PayloadAction<string>) => {
      state.name.value = action.payload;
    },
    addSurname: (state, action: PayloadAction<string>) => {
      state.surname.value = action.payload;
    },

    addEmail: (state, action: PayloadAction<string>) => {
      state.email.value = action.payload;
    },
    validateField: (state, action: PayloadAction<PersonalDetailsFields>) => {
      state[action.payload].validated = 'true';
    },
    invalidateField: (state, action: PayloadAction<PersonalDetailsFields>) => {
      state[action.payload].validated = 'false';
    },
  },
});

// Action creators are generated for each case reducer function
export const { addName, addSurname, addEmail, validateField, invalidateField } =
  addPersonalDetailsSlice.actions;

export default addPersonalDetailsSlice.reducer;
