import { Circle } from 'entities/buttons/circle';
import { PhoneProfiles } from 'entities/buttons/phoneProfiles';
import { PhonePersonalDetails } from 'entities/phonePersonalDetails';
import styles from './styles.module.scss';
import { PreviewPhoneProps } from './model/types';

export const PreviewPhone = ({ variant }: PreviewPhoneProps) => {
  return (
    <div className={styles.previewWrapper}>
      <div className={styles.previewPhone}>
        <Circle variant={variant} />
        <PhonePersonalDetails variant={variant} />
        <PhoneProfiles variant={variant} />
      </div>
    </div>
  );
};
