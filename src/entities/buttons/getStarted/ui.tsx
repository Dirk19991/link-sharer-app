import { useAppSelector } from 'app/store';
import styles from './styles.module.scss';

export const GetStarted = () => {
  const links = useAppSelector(state => state.addLink.links);
  return links.length > 0 ? (
    <></>
  ) : (
    <div className={styles.wrapper}>
      <div>
        <img src="/getStarted.svg" alt="getStarted" />
      </div>
      <h2 className={styles.header}>Let's get you started</h2>
      <p className={styles.text}>
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We're here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
};
