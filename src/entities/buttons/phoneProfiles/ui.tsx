import { useAppSelector } from 'app/store';
import styles from './styles.module.scss';
import { PhoneProfileButton } from './phoneProfileButton';
import { PhoneProfilesProps } from './model/types';
import cn from 'classnames';

export const PhoneProfiles = ({ variant }: PhoneProfilesProps) => {
  const links = useAppSelector(state => state.addLink.links);
  const activeLinks = links.filter(elem => elem.platform !== null);

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
