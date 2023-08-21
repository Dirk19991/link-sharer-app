import { useAppDispatch } from 'app/store';
import { AddLinkButtonProps } from './model/types';
import styles from './styles.module.scss';

export const AddLinkButton = ({ add }: AddLinkButtonProps) => {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => dispatch(add())}
      className={styles.button}
      data-cy="addNewLink"
    >
      + Add new link
    </button>
  );
};
