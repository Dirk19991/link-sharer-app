import { LinkProps } from './model/types';
import styles from './styles.module.scss';
import Select from 'react-select';
import { useAppDispatch } from 'app/store';
import { colourStyles, options } from './model/select';
import { changePlatform } from 'features/addLink/model/slice';

export const Link = ({ id, index, remove }: LinkProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.flex}>
        <div className={styles.linkNumber}>Link #{index + 1}</div>
        <div className={styles.remove} onClick={() => dispatch(remove(id))}>
          Remove
        </div>
      </div>
      <div className={styles.label}>Platform</div>
      <Select
        isMulti={false}
        className={styles.select}
        options={options}
        styles={colourStyles}
        placeholder={'Select platform'}
        onChange={e => {
          dispatch(changePlatform({ id: id, platform: e && e.value }));
        }}
      />
      <div className={styles.label}>Link</div>
      <div className={styles.inputWrapper}>
        <div className={styles.linkIcon}>
          <img src="./link.svg" alt="link" />
        </div>
        <input className={styles.input} type="text" name="name" />
      </div>
    </div>
  );
};
