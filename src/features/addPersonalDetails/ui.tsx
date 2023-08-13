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

  async function onClick() {
    const newPerson = { github: 'ivan', facebook: 'lojkh', d: 'test' };
    console.log(JSON.stringify(newPerson));
    const res = await fetch('http://localhost:5050/profiles', {
      method: 'POST',
      body: JSON.stringify(newPerson),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res;
  }

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
          onBlur={e => validationHandler('surname', e.target.value)}
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
          onBlur={e => validationHandler('email', e.target.value)}
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
      <button onClick={onClick}> </button>
    </div>
  );
};
