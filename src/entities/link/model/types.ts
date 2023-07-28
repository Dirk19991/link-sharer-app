import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export interface LinkProps {
  index: number;
  remove: ActionCreatorWithPayload<number, 'addLink/remove'>;
}
