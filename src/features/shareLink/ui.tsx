import { useAppSelector } from 'app/store';
import styles from './styles.module.scss';
import { checkValidation } from 'shared/helpers/checkValidation';
import cn from 'classnames';
import { selectPersonalDetailsValues } from 'features/addPersonalDetails/model/selectors';
import { selectMappedLinks } from 'features/addLink/model/selectors';
import { LinksState, Platform } from 'features/addLink/model/types';
import {
  PersonalDetailsFields,
  PersonalDetailsState,
} from 'features/addPersonalDetails/model/types';
import { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

export const ShareLink = () => {
  const [loading, setLoading] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const linksState = useAppSelector(state => state.addLink);
  const personalDetailsState = useAppSelector(
    state => state.addPersonalDetails,
  );
  const allLinksObjects = useAppSelector(selectMappedLinks);
  const allPersonalDetailsObjects = useAppSelector(selectPersonalDetailsValues);

  console.log(linksState, personalDetailsState);

  const allIsValidated = checkValidation(
    allLinksObjects.concat(allPersonalDetailsObjects),
  );

  const shareLinkHandler: React.MouseEventHandler = async () => {
    if (!allIsValidated) return;

    function getPlatform(linksState: LinksState, platform: Platform) {
      const currentPlatform = linksState.links.filter(
        elem => elem.platform === platform,
      );
      if (currentPlatform.length === 0) return null;

      return currentPlatform[0].link.value;
    }

    function getPersonalDetail(
      personalDetailsState: PersonalDetailsState,
      detail: PersonalDetailsFields,
    ) {
      return personalDetailsState[detail].value;
    }

    try {
      setLoading('loading');
      const newPerson = {
        github: getPlatform(linksState, 'Github'),
        facebook: getPlatform(linksState, 'Facebook'),
        linkedin: getPlatform(linksState, 'Linkedin'),
        twitter: getPlatform(linksState, 'Twitter'),
        youtube: getPlatform(linksState, 'Youtube'),
        codewars: getPlatform(linksState, 'Codewars'),
        stackoverflow: getPlatform(linksState, 'Stackoverflow'),
        name: getPersonalDetail(personalDetailsState, 'name'),
        surname: getPersonalDetail(personalDetailsState, 'surname'),
        email: getPersonalDetail(personalDetailsState, 'email'),
      };

      const res = await fetch('http://localhost:5050/profiles', {
        method: 'POST',
        body: JSON.stringify(newPerson),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setLoading('success');
      res.json().then(data => console.log(data));
      return res;
    } catch (error) {
      console.log(error);
      setLoading('error');
    }
  };

  return (
    <div
      onClick={shareLinkHandler}
      className={cn(styles.button, !allIsValidated && styles.notAllowed)}
    >
      {loading !== 'loading' && <div>Share link</div>}

      {loading === 'loading' && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="30"
          visible={true}
        />
      )}
    </div>
  );
};
