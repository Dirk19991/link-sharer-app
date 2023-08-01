export interface PersonalDetailsState {
  name: {
    value: string;
    validated: 'idle' | 'true' | 'false';
  };
  surname: {
    value: string;
    validated: 'idle' | 'true' | 'false';
  };
  email: {
    value: string;
    validated: 'idle' | 'true' | 'false';
  };
}

export type PersonalDetailsFields = keyof PersonalDetailsState;
