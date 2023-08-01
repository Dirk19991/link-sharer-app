import { useAppSelector } from 'app/store';
import styles from './styles.module.scss';

export const PhonePersonalDetails = () => {
  const { name, surname, email } = useAppSelector(
    state => state.addPersonalDetails,
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>
        {name.validated !== 'false' && name.value}{' '}
        {surname.validated !== 'false' && surname.value}
      </div>
      <div>{email.validated !== 'false' && email.value}</div>
    </div>
  );
};
