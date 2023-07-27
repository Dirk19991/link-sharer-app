import { useAppDispatch } from 'app/store';
import { AddLinkButtonProps } from './model/types';
import styles from './styles.module.scss';

export const AddLinkButton = ({
  add,
  activeLinksQuantity,
}: AddLinkButtonProps) => {
  const dispatch = useAppDispatch();
  console.log(activeLinksQuantity);
  return (
    <button onClick={() => dispatch(add())} className={styles.button}>
      + Add new link
    </button>
  );
};
