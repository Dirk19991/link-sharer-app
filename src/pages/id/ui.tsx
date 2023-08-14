import { GetId } from 'features/getId';
import styles from './styles.module.scss';
import { useLocation } from 'react-router-dom';
import { Phone } from 'widgets/phone';

export const IdPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className={styles.wrapper}>
      <GetId />
      <Phone variant="database" />
    </div>
  );
};
