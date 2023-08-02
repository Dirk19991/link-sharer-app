import { ObjWithValidation } from './types';

export function checkValidation(objects: ObjWithValidation[]) {
  return objects.every(obj => obj.validated === 'true');
}
