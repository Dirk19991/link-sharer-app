import { useAppSelector } from 'app/store';
import styles from './styles.module.scss';
import { PhoneProfileButton } from './phoneProfileButton';
import { PhoneProfilesProps } from './model/types';
import cn from 'classnames';
import { formatCurrentID } from './model/formatCurrentId';
import { Link } from 'features/addLink/model/types';

export const PhoneProfiles = ({ variant }: PhoneProfilesProps) => {
  const links = useAppSelector(state => state.addLink.links);
  const activeLinks = links.filter(elem => elem.platform !== null);
  const currentId = useAppSelector(state => state.getId.profile);

  const currentIdActiveLinks: Link[] | null =
    currentId && formatCurrentID(currentId);

  if (variant === 'database') {
    console.log('database', currentId, currentIdActiveLinks);
    return (
      <div className={cn(styles.wrapper, styles.previewWrapper)}>
        {currentIdActiveLinks?.map(link => (
          <PhoneProfileButton
            key={link.id}
            platform={link.platform}
            link={link.link.value}
          />
        ))}
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
      {' '}
      {variant === 'preview' &&
        activeLinks.map(link => (
          <PhoneProfileButton
            key={link.id}
            platform={link.platform}
            link={link.link.value}
          />
        ))}
      {variant !== 'preview' &&
        links.map(link => (
          <PhoneProfileButton
            key={link.id}
            platform={link.platform}
            link={link.link.value}
          />
        ))}
    </div>
  );
};
