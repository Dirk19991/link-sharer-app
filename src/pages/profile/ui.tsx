import { Phone } from 'widgets/phone';
import styles from './styles.module.scss';
import { ProfileDetails } from 'widgets/profileDetails';

export const ProfilePage = () => {
  return (
    <div className={styles.wrapper}>
      <Phone />
      <ProfileDetails />
    </div>
  );
};
