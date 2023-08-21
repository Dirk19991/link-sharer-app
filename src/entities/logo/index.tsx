import styles from './styles.module.scss';

export const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className={styles.text}>devlinks</div>
    </div>
  );
};
