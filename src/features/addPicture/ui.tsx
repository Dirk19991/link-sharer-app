import { UploadPictureButton } from 'entities/buttons/uploadPictureButton';
import styles from './styles.module.scss';

export const AddPicture = () => {
  return (
    <div className={styles.wrapper}>
      <div>Profile picture</div>
      <UploadPictureButton />
      <div className={styles.restriction}>
        Image must be below 1024x1024px. Use PNG or JPG format.
      </div>
    </div>
  );
};
