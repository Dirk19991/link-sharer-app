import { useMediaQuery } from 'shared/hooks/useMediaQuery';
import styles from './styles.module.scss';

export const PreviewButton = () => {
  const mobile = useMediaQuery('(max-width: 768px)');
  console.log(mobile, 'previewButton');
  return (
    <div className={styles.button}>
      {mobile ? <img className={styles.image} src="/eye.svg"></img> : 'Preview'}
    </div>
  );
};
