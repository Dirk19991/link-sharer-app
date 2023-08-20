import { useAppSelector } from 'app/store';
import styles from './styles.module.scss';
import { CircleProps } from './model/types';
import cn from 'classnames';
import { useProgressiveImage } from 'shared/hooks/useProgressiveImage';
import { RotatingLines } from 'react-loader-spinner';

export const Circle = ({ variant }: CircleProps) => {
  const file = useAppSelector(state => state.addPicture.file);
  const currentId = useAppSelector(state => state.getId.profile);
  const image = currentId?.image;
  const loaded = useProgressiveImage(image || '');

  if (variant === 'database' && !image) {
    return <div className={cn(styles.circle, styles.previewCircle)}></div>;
  }

  if (variant === 'database')
    return loaded ? (
      <div
        style={{
          backgroundImage: `url(${loaded})`,
          backgroundSize: 'cover',
        }}
        className={cn(styles.circle, styles.previewCircle)}
      ></div>
    ) : (
      <RotatingLines
        strokeColor="grey"
        strokeWidth="3"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    );

  return (
    <div
      style={{
        backgroundImage: `url(${file})`,
        backgroundSize: 'cover',
      }}
      className={cn(
        styles.circle,
        variant === 'preview' && styles.previewCircle,
      )}
    ></div>
  );
};
