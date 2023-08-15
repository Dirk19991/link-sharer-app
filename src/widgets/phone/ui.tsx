import { Circle } from 'entities/buttons/circle';
import styles from './styles.module.scss';
import { PhoneProfiles } from 'entities/buttons/phoneProfiles';
import { PhonePersonalDetails } from 'entities/phonePersonalDetails';
import { PhoneProps } from './model/types';
import { useAppSelector } from 'app/store';

export const Phone = ({ variant }: PhoneProps) => {
  const status = useAppSelector(state => state.getId.status);

  if (variant === 'profile') {
    return (
      <div className={styles.profileWrapper}>
        <div className={styles.profilePhone}>
          <img src="./phone.svg" alt="phone" />
          <Circle />
          <PhonePersonalDetails />
          <PhoneProfiles />
        </div>
      </div>
    );
  }
  if (variant === 'preview') {
    return (
      <div className={styles.previewWrapper}>
        <div className={styles.previewPhone}>
          <Circle variant={variant} />
          <PhonePersonalDetails variant={variant} />
          <PhoneProfiles variant={variant} />
        </div>
      </div>
    );
  }
  if (variant === 'database') {
    return status === 'loading' ? (
      <div>Loading...</div>
    ) : (
      <div className={styles.previewWrapper}>
        <div className={styles.previewPhone}>
          <Circle variant={variant} />
          <PhonePersonalDetails variant={variant} />
          <PhoneProfiles variant={variant} />
        </div>
      </div>
    );
  }
};
