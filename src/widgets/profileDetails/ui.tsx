import { ProfileHeader } from 'entities/profileHeader';
import styles from './styles.module.scss';
import { AddPicture } from 'features/addPicture';

export const ProfileDetails = () => {
  return (
    <div className={styles.wrapper}>
      <ProfileHeader />
      <AddPicture />
    </div>
  );
};
