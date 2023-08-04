import { useAppSelector } from 'app/store';
import styles from './styles.module.scss';
import { checkValidation } from 'shared/helpers/checkValidation';
import { selectPersonalDetailsValues } from 'features/addPersonalDetails/model/selectors';
import { selectMappedLinks } from 'features/addLink/model/selectors';

export const Warning = () => {
  const allLinks = useAppSelector(selectMappedLinks);
  const allPersonalDetails = useAppSelector(selectPersonalDetailsValues);

  const allIsValidated = checkValidation(allLinks.concat(allPersonalDetails));

  if (!allIsValidated) {
    return (
      <div className={styles.error}>
        Some values are incorrect or empty, please check your links and personal
        information
      </div>
    );
  }
  if (allIsValidated) {
    return (
      <div className={styles.success}>
        Click on "Share link" button to generate your personal page
      </div>
    );
  }
};
