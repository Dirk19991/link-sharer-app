import { useAppDispatch, useAppSelector } from 'app/store';
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
import { storage } from '../../../firebase';
import {
  StorageReference,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage';
import { v4 } from 'uuid';
import { addShareLinkId } from './model/slice';

const uploadImageFromBlob = async (blob: string) => {
  const response = await fetch(blob);
  const result = await response.blob();
  const metadata = {
    type: 'image/jpeg',
  };
  const file = new File([result], 'avatar.jpg', metadata);
  const imageRef = ref(storage, `images/${file.name + v4()}`);
  await uploadBytes(imageRef, file);
  return imageRef;
};

const getLinkFromFile = async (imageRef: StorageReference) => {
  const link = await getDownloadURL(imageRef);
  return link;
};

export const ShareLink = () => {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const dispatch = useAppDispatch();
  const linksState = useAppSelector(state => state.addLink);
  const personalDetailsState = useAppSelector(
    state => state.addPersonalDetails,
  );
  const picture = useAppSelector(state => state.addPicture.file);

  const allLinksObjects = useAppSelector(selectMappedLinks);
  const allPersonalDetailsObjects = useAppSelector(selectPersonalDetailsValues);

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
      setStatus('loading');
      const info = await uploadImageFromBlob(picture);
      const link = await getLinkFromFile(info);

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
        image: link,
      };

      console.log(newPerson);
      const res = await fetch('http://localhost:5050/profiles', {
        method: 'POST',
        body: JSON.stringify(newPerson),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setStatus('success');
      res.json().then(data => dispatch(addShareLinkId(data.id)));
      return res;
    } catch (error) {
      console.log(error);
      setStatus('error');
    }
  };

  return (
    <div
      onClick={shareLinkHandler}
      className={cn(styles.button, !allIsValidated && styles.notAllowed)}
    >
      {status !== 'loading' && <div>Share link</div>}

      {status === 'loading' && (
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
