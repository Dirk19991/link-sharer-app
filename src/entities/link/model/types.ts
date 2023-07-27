import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export interface LinkProps {
  id: number;
  index: number;
  remove: ActionCreatorWithPayload<number, 'addLink/remove'>;
}
