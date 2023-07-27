import { LinksHeader } from 'entities/linksHeader';
import styles from './styles.module.scss';

import { AddLink } from 'features/addLink';

export const Links = () => {
  return (
    <div className={styles.wrapper}>
      <LinksHeader />
      <AddLink />
    </div>
  );
};
