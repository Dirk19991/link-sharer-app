import { LinksProps } from './model';
import styles from './styles.module.scss';
import cn from 'classnames';

export const LinksButton = ({ active, onClick }: LinksProps) => {
  return (
    <a onClick={onClick} className={cn(styles.button, active && styles.active)}>
      <img src="./links.svg" alt="links" />
      <p>Links</p>
    </a>
  );
};
