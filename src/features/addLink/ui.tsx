import { AddLinkButton } from 'entities/buttons/addLinkButton';
import styles from './styles.module.scss';
import { useAppSelector } from 'app/store';
import { add, remove } from './model/slice';
import { Link } from 'entities/link';

export const AddLink = () => {
  const links = useAppSelector(state => state.addLink.links);
  console.log(links);
  return (
    <div className={styles.wrapper}>
      <AddLinkButton add={add} />
      {links.map((elem, index) => {
        return (
          <div key={elem.id}>
            <Link index={index} remove={remove} />
          </div>
        );
      })}
    </div>
  );
};
