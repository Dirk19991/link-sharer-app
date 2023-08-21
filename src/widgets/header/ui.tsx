import { Logo } from 'entities/logo';
import styles from './styles.module.scss';
import { PreviewButton } from 'entities/buttons/previewButton';
import { LinksButton } from 'entities/buttons/links';
import { ProfileDetailsButton } from 'entities/buttons/profileDetails';
import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { BackToEditor } from 'entities/buttons/backToEditor';
import { ShareLink } from 'features/shareLink';
import cn from 'classnames';
// import { useMediaQuery } from 'shared/hooks/useMediaQuery';

export const Header = () => {
  const [detailsActive, setDetailsActive] = useState(false);
  const [linksActive, setLinksActive] = useState(true);
  // const desktop = useMediaQuery('(min-width: 768px)');

  const detailsHandler = () => {
    setDetailsActive(true);
    setLinksActive(false);
  };
  const linksHandler = () => {
    setLinksActive(true);
    setDetailsActive(false);
  };

  const { pathname } = useLocation();
  const { id } = useParams();
  console.log(id);

  // другой хедер для страниц превью и ссылки на профиль
  if (pathname === '/preview' || id) {
    return (
      <nav className={cn(styles.wrapper, styles.previewWrapper)}>
        {pathname === '/preview' && (
          <div
            className={cn(styles.headerContent, styles.previewHeaderContent)}
          >
            <BackToEditor />
            <ShareLink />
          </div>
        )}
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
