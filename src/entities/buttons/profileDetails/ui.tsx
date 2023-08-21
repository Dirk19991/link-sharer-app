import { ProfileDetailsProps } from './model';
import styles from './styles.module.scss';
import cn from 'classnames';

export const ProfileDetailsButton = ({
  active,
  onClick,
}: ProfileDetailsProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(styles.button, active && styles.active)}
    >
      <img src="/profile.svg" alt="profile" />
      <p>Profile Details</p>
    </div>
  );
};
