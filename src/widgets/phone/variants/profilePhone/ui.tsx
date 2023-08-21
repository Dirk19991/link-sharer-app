import { Circle } from 'entities/buttons/circle';
import { PhoneProfiles } from 'entities/buttons/phoneProfiles';
import { PhonePersonalDetails } from 'entities/phonePersonalDetails';
import styles from './styles.module.scss';

export const ProfilePhone = () => {
  return (
    <div className={styles.profileWrapper}>
      <div className={styles.profilePhone}>
        <img src="/phone.svg" alt="phone" />
        <Circle />
        <PhonePersonalDetails />
        <PhoneProfiles />
      </div>
    </div>
  );
};
