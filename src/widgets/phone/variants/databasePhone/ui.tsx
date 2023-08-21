import { useAppSelector } from 'app/store';
import styles from './styles.module.scss';
import { Circle } from 'entities/buttons/circle';
import { PhoneProfiles } from 'entities/buttons/phoneProfiles';
import { PhonePersonalDetails } from 'entities/phonePersonalDetails';
import { DatabasePhoneProps } from './model/types';

export const DatabasePhone = ({ variant }: DatabasePhoneProps) => {
  const status = useAppSelector(state => state.getId.status);
  return status === 'loading' ? (
    <div className={styles.loading}>Loading...</div>
  ) : (
    <div className={styles.previewWrapper}>
      <div className={styles.previewPhone}>
        <Circle variant={variant} />
        <PhonePersonalDetails variant={variant} />
        <PhoneProfiles variant={variant} />
      </div>
    </div>
  );
};
