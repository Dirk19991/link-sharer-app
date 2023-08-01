import { useAppSelector } from 'app/store';
import styles from './styles.module.scss';

export const Circle = () => {
  const file = useAppSelector(state => state.addPicture.file);

  return (
    <div
      style={{ backgroundImage: `url(${file})`, backgroundSize: 'cover' }}
      className={styles.circle}
    ></div>
  );
};
