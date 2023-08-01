export const nameValidation = /^[a-z  A-Z а-я А-Я]*$/;
export const emailValidation =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const checkLink = (
  field: 'name' | 'surname' | 'email',
  value: string,
) => {
  switch (field) {
    case 'name':
      if (value === '') {
        return 'idle';
      }
      if (nameValidation.test(value)) {
        return true;
      }
      if (!nameValidation.test(value)) {
        return false;
      }
      break;
    case 'surname':
      if (value === '') {
        return 'idle';
      }
      if (nameValidation.test(value)) {
        return 'true';
      }
      if (!nameValidation.test(value)) {
        return 'false';
      }
      break;

    case 'email':
      if (value === '') {
        return 'idle';
      }
      if (emailValidation.test(value)) {
        return 'true';
      }
      if (!emailValidation.test(value)) {
        return 'false';
      }
      break;

    default:
      break;
  }
};
