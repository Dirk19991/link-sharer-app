import { AddLinkButton } from 'entities/buttons/addLinkButton';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from 'app/store';
import { add, remove } from './model/slice';
import { Link } from 'entities/link';

export const AddLink = () => {
  const links = useAppSelector(state => state.addLink.links);
  const activeLinks = links.filter(elem => elem.active === true);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.wrapper}>
      <AddLinkButton />
      <button onClick={() => dispatch(add())}></button>
      {activeLinks.map((elem, index) => {
        if (elem.active) {
          return (
            <div key={elem.id}>
              <Link index={index} remove={remove} id={elem.id} />
            </div>
          );
        }
      })}
    </div>
  );
};
