import { Warning } from 'entities/warning';
import { Phone } from 'widgets/phone';
import styles from './styles.module.scss';
import { useAppDispatch } from 'app/store';
import { useEffect } from 'react';
import { removeShareLinkId } from 'features/shareLink/model/slice';

export const PreviewPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(removeShareLinkId());
    };
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Phone variant="preview" />
      <Warning />
    </div>
  );
};
