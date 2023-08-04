import { Warning } from 'entities/warning';
import { Phone } from 'widgets/phone';
import styles from './styles.module.scss';

export const PreviewPage = () => {
  return (
    <div className={styles.wrapper}>
      <Phone variant="preview" />
      <Warning />
    </div>
  );
};
