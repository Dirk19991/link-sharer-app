import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PersonalDetailsState } from './types';

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
    validateName: (state, action: PayloadAction<'idle' | 'true' | 'false'>) => {
      state.name.validated = action.payload;
    },
    addSurname: (state, action: PayloadAction<string>) => {
      state.surname.value = action.payload;
    },
    validateSurname: (
      state,
      action: PayloadAction<'idle' | 'true' | 'false'>,
    ) => {
      state.surname.validated = action.payload;
    },
    addEmail: (state, action: PayloadAction<string>) => {
      state.email.value = action.payload;
    },
    validateEmail: (
      state,
      action: PayloadAction<'idle' | 'true' | 'false'>,
    ) => {
      state.email.validated = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addName,
  validateName,
  addSurname,
  validateSurname,
  addEmail,
  validateEmail,
} = addPersonalDetailsSlice.actions;

export default addPersonalDetailsSlice.reducer;
