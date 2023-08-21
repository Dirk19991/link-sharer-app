import { GetId } from 'features/getId';
import styles from './styles.module.scss';
import { Phone } from 'widgets/phone';
import { useAppSelector } from 'app/store';

export const IdPage = () => {
  const status = useAppSelector(state => state.getId.status);

  if (status === 'error') {
    return <div className={styles.error}>The ID doesn't exist</div>;
  }
  return (
    <div className={styles.wrapper}>
      <GetId />
      <Phone variant="database" />
    </div>
  );
};
