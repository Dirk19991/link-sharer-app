import { LinksHeader } from 'entities/linksHeader';
import styles from './styles.module.scss';
import { AddLink } from 'features/addLink';
import { GetStarted } from 'entities/buttons/getStarted';
import { useMediaQuery } from 'shared/hooks/useMediaQuery';
import cn from 'classnames';

export const Links = () => {
  const desktop = useMediaQuery('(min-width: 768px)');
  return (
    <div className={cn(styles.wrapper, !desktop && styles.mobile)}>
      <LinksHeader />
      <AddLink />
      <GetStarted />
    </div>
  );
};
