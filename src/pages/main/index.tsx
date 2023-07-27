import { Phone } from 'widgets/phone';
import styles from './styles.module.scss';
import { Links } from 'widgets/links';

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <Phone />
      <Links />
    </div>
  );
};

export default MainPage;
