import { useAppSelector } from 'app/store';
import styles from './styles.module.scss';
import { PhoneProfileButton } from './phoneProfileButton';

export const PhoneProfiles = () => {
  const links = useAppSelector(state => state.addLink.links);

  console.log(links);
  return (
    <div className={styles.wrapper}>
      {links.map(link => (
        <PhoneProfileButton
          key={link.id}
          platform={link.platform}
          link={link.link}
        />
      ))}
    </div>
  );
};
