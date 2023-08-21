import { LinksProps } from './model';
import styles from './styles.module.scss';
import cn from 'classnames';

export const LinksButton = ({ active, onClick }: LinksProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(styles.button, active && styles.active)}
    >
      <img src="/links.svg" alt="links" />
      <p className={styles.buttonText}>Links</p>
    </div>
  );
};
