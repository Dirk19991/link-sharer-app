import { Logo } from 'entities/logo';
import styles from './styles.module.scss';
import { PreviewButton } from 'entities/buttons/preview';
import { LinksButton } from 'entities/buttons/links';
import { ProfileDetailsButton } from 'entities/buttons/profileDetails';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [detailsActive, setDetailsActive] = useState(false);
  const [linksActive, setLinksActive] = useState(true);

  const detailsHandler = () => {
    setDetailsActive(true);
    setLinksActive(false);
  };
  const linksHandler = () => {
    setLinksActive(true);
    setDetailsActive(false);
  };

  return (
    <nav className={styles.wrapper}>
      <div className={styles.headerContent}>
        <Logo />
        <div className={styles.flex}>
          <Link to={'/'}>
            <LinksButton onClick={linksHandler} active={linksActive} />
          </Link>
          <Link to={'/profile'}>
            <ProfileDetailsButton
              onClick={detailsHandler}
              active={detailsActive}
            />
          </Link>
        </div>
        <PreviewButton />
      </div>
    </nav>
  );
};
