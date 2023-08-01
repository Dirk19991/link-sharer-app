import { useAppDispatch, useAppSelector } from 'app/store';
import styles from './styles.module.scss';
import {
  addEmail,
  addName,
  addSurname,
  validateEmail,
  validateName,
  validateSurname,
} from './model/slice';
import { emailValidation, nameValidation } from './model/validation';

export const AddName = () => {
  const { name, surname, email } = useAppSelector(
    state => state.addPersonalDetails,
  );
  const dispatch = useAppDispatch();

  const nameValidationHandler: React.FocusEventHandler<
    HTMLInputElement
  > = e => {
    if (e.target.value === '') {
      dispatch(validateName('idle'));
      return;
    }
    if (nameValidation.test(e.target.value)) {
      dispatch(validateName('true'));
      return;
    }
    if (!nameValidation.test(e.target.value)) {
      dispatch(validateName('false'));
      return;
    }
  };

  const surnameValidationHandler: React.FocusEventHandler<
    HTMLInputElement
  > = e => {
    if (e.target.value === '') {
      dispatch(validateSurname('idle'));
      return;
    }
    if (nameValidation.test(e.target.value)) {
      dispatch(validateSurname('true'));
      return;
    }
    if (!nameValidation.test(e.target.value)) {
      dispatch(validateSurname('false'));
      return;
    }
  };

  const emailValidationHandler: React.FocusEventHandler<
    HTMLInputElement
  > = e => {
    if (e.target.value === '') {
      dispatch(validateEmail('idle'));
      return;
    }
    if (emailValidation.test(e.target.value)) {
      dispatch(validateEmail('true'));
      return;
    }
    if (!emailValidation.test(e.target.value)) {
      dispatch(validateEmail('false'));
      return;
    }
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="name">
        First name
        <input
          autoComplete="off"
          onBlur={nameValidationHandler}
          onChange={e => dispatch(addName(e.target.value))}
          value={name.value}
          className={styles.input}
          id="name"
          type="text"
        />
        {name.validated === 'false' && (
          <div className={styles.errorWrapper}>
            <div className={styles.hidden}>First name</div>
            <div className={styles.errorMessage}>Please add valid name</div>
          </div>
        )}
      </label>
      <label className={styles.label} htmlFor="surname">
        Last name
        <input
          autoComplete="off"
          onBlur={surnameValidationHandler}
          onChange={e => dispatch(addSurname(e.target.value))}
          value={surname.value}
          className={styles.input}
          id="surname"
          type="text"
        />
        {surname.validated === 'false' && (
          <div className={styles.errorWrapper}>
            <div className={styles.hidden}>Last name</div>
            <div className={styles.errorMessage}>Please add valid surname</div>
          </div>
        )}
      </label>
      <label className={styles.label} htmlFor="email">
        Email
        <input
          autoComplete="off"
          onBlur={emailValidationHandler}
          onChange={e => dispatch(addEmail(e.target.value))}
          value={email.value}
          className={styles.input}
          id="email"
          type="text"
        />
        {email.validated === 'false' && (
          <div className={styles.errorWrapper}>
            <div className={styles.hidden}>Email</div>
            <div className={styles.errorMessage}>Please add valid email</div>
          </div>
        )}
      </label>
    </div>
  );
};
