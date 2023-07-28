import { LinkProps } from './model/types';
import styles from './styles.module.scss';
import Select from 'react-select';
import { useAppDispatch, useAppSelector } from 'app/store';
import { colourStyles, options } from './model/select';
import { changeLink, changePlatform } from 'features/addLink/model/slice';

export const Link = ({ index, remove }: LinkProps) => {
  const dispatch = useAppDispatch();
  const currentLink = useAppSelector(state => state.addLink.links[index].link);
  const currentPlatform = useAppSelector(
    state => state.addLink.links[index].platform,
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.flex}>
        <div className={styles.linkNumber}>Link #{index + 1}</div>
        <div className={styles.remove} onClick={() => dispatch(remove(index))}>
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
          dispatch(changePlatform({ index: index, platform: e && e.value }));
        }}
        value={options.find(value => value.value === currentPlatform)}
      />
      <div className={styles.label}>Link</div>
      <div className={styles.inputWrapper}>
        <div className={styles.linkIcon}>
          <img src="./link.svg" alt="link" />
        </div>
        <input
          value={currentLink ? currentLink : ''}
          onChange={e => {
            dispatch(changeLink({ index: index, link: e.target.value }));
          }}
          className={styles.input}
          type="text"
          name="name"
        />
      </div>
    </div>
  );
};
