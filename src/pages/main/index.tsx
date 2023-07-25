import { Phone } from 'widgets/phone';
import styles from './styles.module.scss';

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <Phone />
    </div>
  );
};

export default MainPage;
