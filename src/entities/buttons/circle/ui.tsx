import { useAppSelector } from 'app/store';
import styles from './styles.module.scss';
import { CircleProps } from './model/types';
import cn from 'classnames';

export const Circle = ({ variant }: CircleProps) => {
  const file = useAppSelector(state => state.addPicture.file);

  return (
    <div
      style={{ backgroundImage: `url(${file})`, backgroundSize: 'cover' }}
      className={cn(
        styles.circle,
        variant === 'preview' && styles.previewCircle,
      )}
    ></div>
  );
};
