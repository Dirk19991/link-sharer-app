import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

export const BackToEditor = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(-1)} className={styles.button}>
      Back to editor
    </div>
  );
};
