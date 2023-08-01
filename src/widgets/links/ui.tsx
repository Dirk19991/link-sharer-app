import { LinksHeader } from 'entities/linksHeader';
import styles from './styles.module.scss';
import { AddLink } from 'features/addLink';
import { GetStarted } from 'entities/buttons/getStarted';

export const Links = () => {
  return (
    <div className={styles.wrapper}>
      <LinksHeader />
      <AddLink />
      <GetStarted />
    </div>
  );
};
