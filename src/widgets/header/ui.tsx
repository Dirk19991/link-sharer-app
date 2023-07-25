import { Logo } from 'entities/logo';
import styles from './styles.module.scss';
import { PreviewButton } from 'entities/buttons/preview';
import { LinksButton } from 'entities/buttons/links';
import { ProfileDetailsButton } from 'entities/buttons/profileDetails';
import { useState } from 'react';

export const Header = () => {
  const [detailsActive, setDetailsActive] = useState(false);
  const [linksActive, setLinksActive] = useState(false);

  const detailsHandler = () => {
    setDetailsActive(prev => !prev);
    setLinksActive(false);
  };
  const linksHandler = () => {
    setLinksActive(prev => !prev);
    setDetailsActive(false);
  };

  return (
    <nav className={styles.wrapper}>
      <div className={styles.headerContent}>
        <Logo />
        <div className={styles.flex}>
          <LinksButton onClick={linksHandler} active={linksActive} />
          <ProfileDetailsButton
            onClick={detailsHandler}
            active={detailsActive}
          />
        </div>
        <PreviewButton />
      </div>
    </nav>
  );
};
