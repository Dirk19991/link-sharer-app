import { useAppSelector } from 'app/store';
import styles from './styles.module.scss';
import { checkValidation } from 'shared/helpers/checkValidation';
import { selectPersonalDetailsValues } from 'features/addPersonalDetails/model/selectors';
import { selectMappedLinks } from 'features/addLink/model/selectors';
import { Link } from 'react-router-dom';

export const Warning = () => {
  const allLinks = useAppSelector(selectMappedLinks);
  const allPersonalDetails = useAppSelector(selectPersonalDetailsValues);
  const allIsValidated = checkValidation(allLinks.concat(allPersonalDetails));

  const id = useAppSelector(state => state.shareLink.id);

  if (id) {
    return (
      <div className={styles.linkReady}>
        <span>
          Great! Your personal page is on{' '}
          <Link
            to={`http://${window.location.host}/profile/${id}`}
            className={styles.link}
          >{`${window.location.host}/profile/${id}`}</Link>
        </span>
      </div>
    );
  }

  if (!allIsValidated) {
    return (
      <div className={styles.error} data-cy="validationError">
        Some values are incorrect or empty, please check your links and personal
        information
      </div>
    );
  }
  if (allIsValidated) {
    return (
      <div className={styles.success} data-cy="shareLink">
        Click on "Share link" button to generate your personal page
      </div>
    );
  }
};
