import { useAppDispatch, useAppSelector } from 'app/store';
import styles from './styles.module.scss';
import {
  addEmail,
  addName,
  addSurname,
  invalidateField,
  validateField,
} from './model/slice';
import { checkLink } from './model/validation';
import { PersonalDetailsFields } from './model/types';

export const AddName = () => {
  const { name, surname, email } = useAppSelector(
    state => state.addPersonalDetails,
  );
  const dispatch = useAppDispatch();

  const validationHandler = (field: PersonalDetailsFields, value: string) => {
    checkLink(field, value) === 'true'
      ? dispatch(validateField(field))
      : dispatch(invalidateField(field));
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="name">
        First name
        <input
          autoComplete="off"
          onBlur={e => validationHandler('name', e.target.value)}
          onChange={e => dispatch(addName(e.target.value))}
          value={name.value}
          className={styles.input}
          id="name"
          type="text"
          data-cy="firstName"
        />
        {name.validated === 'false' && (
          <div className={styles.errorWrapper}>
            <div className={styles.hidden}>First name</div>
            <div className={styles.errorMessage} data-cy="firstNameError">
              Please add valid name
            </div>
          </div>
        )}
      </label>
      <label className={styles.label} htmlFor="surname">
        Last name
        <input
          autoComplete="off"
          onBlur={e => validationHandler('surname', e.target.value)}
          onChange={e => dispatch(addSurname(e.target.value))}
          value={surname.value}
          className={styles.input}
          id="surname"
          type="text"
          data-cy="lastName"
        />
        {surname.validated === 'false' && (
          <div className={styles.errorWrapper}>
            <div className={styles.hidden}>Last name</div>
            <div className={styles.errorMessage} data-cy="lastNameError">
              Please add valid surname
            </div>
          </div>
        )}
      </label>
      <label className={styles.label} htmlFor="email">
        Email
        <input
          autoComplete="off"
          onBlur={e => validationHandler('email', e.target.value)}
          onChange={e => dispatch(addEmail(e.target.value))}
          value={email.value}
          className={styles.input}
          id="email"
          type="text"
          data-cy="email"
        />
        {email.validated === 'false' && (
          <div className={styles.errorWrapper}>
            <div className={styles.hidden}>Email</div>
            <div className={styles.errorMessage} data-cy="emailError">
              Please add valid email
            </div>
          </div>
        )}
      </label>
    </div>
  );
};
