import styles from './styles.module.scss';

export const LinksHeader = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Customize your links</h2>
      <div className={styles.subheader}>
        Add/edit/remove links below and then share all your profiles with the
        world!
      </div>
    </div>
  );
};
