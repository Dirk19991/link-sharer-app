import { useAppSelector } from 'app/store';
import styles from './styles.module.scss';

export const PhoneProfiles = () => {
  const links = useAppSelector(state => state.addLink.links);
  const activeLinks = useAppSelector(state => state.addLink.activeLinks);
  console.log(links, activeLinks);
  return (
    <div className={styles.wrapper}>
      {links.map(link => {
        if (link.active && link.platform !== null) {
          return <div>{link.platform}</div>;
        }
        if (link.active && link.platform === null) {
          return <div>Placeholder</div>;
        }
        if (!link.active) {
          return;
        }
      })}
    </div>
  );
};
