import styles from './styles.module.scss';

export const ProfileHeader = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Profile Details</h2>
      <div className={styles.subheader}>
        Add your details to create a personal touch to your profile.
      </div>
    </div>
  );
};
