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
