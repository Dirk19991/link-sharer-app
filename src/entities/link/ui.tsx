import { LinkProps } from './model/types';
import styles from './styles.module.scss';
import Select from 'react-select';
import { useAppDispatch, useAppSelector } from 'app/store';
import { colourStyles, options } from './model/select';
import {
  changeLink,
  changePlatform,
  invalidateLink,
  validateLink,
} from 'features/addLink/model/slice';
import { checkLink } from './model/validation';

export const Link = ({ index, remove }: LinkProps) => {
  const dispatch = useAppDispatch();
  const currentLinkValue = useAppSelector(
    state => state.addLink.links[index].link.value,
  );
  const currentLinkValid = useAppSelector(
    state => state.addLink.links[index].link.validated,
  );
  const currentPlatform = useAppSelector(
    state => state.addLink.links[index].platform,
  );

  const validateHandler: React.FocusEventHandler<HTMLInputElement> = e => {
    if (!e.target.value) {
      return;
    }
    if (checkLink(currentPlatform, e.target.value)) {
      dispatch(validateLink(currentPlatform));
    } else {
      dispatch(invalidateLink(currentPlatform));
    }
  };

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
          autoComplete="off"
          value={currentLinkValue ? currentLinkValue : ''}
          onBlur={validateHandler}
          onChange={e => {
            dispatch(changeLink({ index: index, link: e.target.value }));
          }}
          className={styles.input}
          type="text"
          name="name"
        />
        {currentLinkValid === 'false' && (
          <div className={styles.errorMessage}>
            Please add valid link to {currentPlatform}
          </div>
        )}
      </div>
    </div>
  );
};
