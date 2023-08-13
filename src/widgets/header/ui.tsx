import { Logo } from 'entities/logo';
import styles from './styles.module.scss';
import { PreviewButton } from 'entities/buttons/previewButton';
import { LinksButton } from 'entities/buttons/links';
import { ProfileDetailsButton } from 'entities/buttons/profileDetails';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BackToEditor } from 'entities/buttons/backToEditor';
import { ShareLink } from 'features/shareLink';
import cn from 'classnames';

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

  const { pathname } = useLocation();

  if (pathname === '/preview') {
    return (
      <nav className={cn(styles.wrapper, styles.previewWrapper)}>
        <div className={cn(styles.headerContent, styles.previewHeaderContent)}>
          <BackToEditor />
          <ShareLink />
        </div>
      </nav>
    );
  }

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
        <Link to={'/preview'}>
          <PreviewButton />
        </Link>
      </div>
    </nav>
  );
};
