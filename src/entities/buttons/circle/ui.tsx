import { useAppSelector } from 'app/store';
import styles from './styles.module.scss';
import { CircleProps } from './model/types';
import cn from 'classnames';

export const Circle = ({ variant }: CircleProps) => {
  const file = useAppSelector(state => state.addPicture.file);
  const currentId = useAppSelector(state => state.getId.profile);

  return (
    <div
      style={{
        backgroundImage:
          variant === 'database' ? `url(${currentId?.image})` : `url(${file})`,
        backgroundSize: 'cover',
      }}
      className={cn(
        styles.circle,
        (variant === 'preview' || variant === 'database') &&
          styles.previewCircle,
      )}
    ></div>
  );
};
