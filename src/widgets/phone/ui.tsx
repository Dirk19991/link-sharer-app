import { Circle } from 'entities/buttons/circle';
import styles from './styles.module.scss';
import { PhoneProfiles } from 'entities/buttons/phoneProfiles';
import { PhonePersonalDetails } from 'entities/phonePersonalDetails';

export const Phone = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.phone}>
        <img src="./phone.svg" alt="phone" />
        <Circle />
        <PhonePersonalDetails />
        <PhoneProfiles />
      </div>
    </div>
  );
};
