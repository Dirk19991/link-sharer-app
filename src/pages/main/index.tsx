import { Phone } from 'widgets/phone';
import styles from './styles.module.scss';
import { Links } from 'widgets/links';

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <Phone variant="profile" />
      <Links />
    </div>
  );
};

export default MainPage;
