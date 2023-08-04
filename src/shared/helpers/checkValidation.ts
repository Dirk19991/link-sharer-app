export interface ObjWithValidation {
  validated: 'idle' | 'true' | 'false';
  value?: null | string;
}
export function checkValidation(objects: ObjWithValidation[]) {
  return objects.every(obj => obj.validated === 'true');
}
