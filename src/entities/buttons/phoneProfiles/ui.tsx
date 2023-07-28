import { useAppSelector } from 'app/store';
import styles from './styles.module.scss';

export const PhoneProfiles = () => {
  const links = useAppSelector(state => state.addLink.links);

  console.log(links);
  return (
    <div className={styles.wrapper}>
      {links.map(link => {
        if (link.platform !== null) {
          return <div>{link.platform}</div>;
        }
        if (link.platform === null) {
          return <div>Placeholder</div>;
        }
      })}
    </div>
  );
};
