import { GetId } from 'features/getId';
import styles from './styles.module.scss';
import { Phone } from 'widgets/phone';

export const IdPage = () => {
  return (
    <div className={styles.wrapper}>
      <GetId />
      <Phone variant="database" />
    </div>
  );
};
