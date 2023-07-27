import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';

export interface AddLinkButtonProps {
  add: ActionCreatorWithoutPayload<'addLink/add'>;
  activeLinksQuantity: 0 | 1 | 2 | 3 | 4 | 5;
}
