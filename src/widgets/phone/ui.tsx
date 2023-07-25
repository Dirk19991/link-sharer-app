import styles from './styles.module.scss';

export const Phone = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.phone}>
        <img src="./phone.svg" alt="phone" />
      </div>
    </div>
  );
};
