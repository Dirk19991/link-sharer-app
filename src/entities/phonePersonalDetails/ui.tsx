import { useAppSelector } from 'app/store';
import styles from './styles.module.scss';
import cn from 'classnames';
import { PhonePersonalDetailsProps } from './model/types';

export const PhonePersonalDetails = ({
  variant,
}: PhonePersonalDetailsProps) => {
  const { name, surname, email } = useAppSelector(
    state => state.addPersonalDetails,
  );
  const currentId = useAppSelector(state => state.getId.profile);

  if (variant === 'database') {
    return (
      <div className={cn(styles.wrapper, styles.previewWrapper)}>
        <div className={styles.name}>
          {currentId?.name}
          {currentId?.surname}
        </div>
        <div>{currentId?.email}</div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        styles.wrapper,
        variant === 'preview' && styles.previewWrapper,
      )}
    >
      <div className={styles.name}>
        {name.validated !== 'false' && name.value}{' '}
        {surname.validated !== 'false' && surname.value}
      </div>
      <div>{email.validated !== 'false' && email.value}</div>
    </div>
  );
};
