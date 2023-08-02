import { useAppSelector } from 'app/store';
import { checkValidation } from './model/checkValidation';
import styles from './styles.module.scss';

export const Warning = () => {
  const allLinks = useAppSelector(state =>
    state.addLink.links.map(elem => elem.link),
  );
  const allPersonalDetails = useAppSelector(state =>
    Object.values(state.addPersonalDetails),
  );

  const allIsValidated = checkValidation(allLinks.concat(allPersonalDetails));

  if (!allIsValidated) {
    return (
      <div className={styles.wrapper}>
        Some values are incorrect, please check yout links and personal
        information
      </div>
    );
  }
};
