import { useState } from 'react';
import styles from './styles.module.scss';

export const UploadPictureButton = () => {
  const [file, setFile] = useState('');

  console.log(file);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.files);
    if (e.target.files) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <>
      <button
        style={{ backgroundImage: `url(${file})`, backgroundSize: 'cover' }}
        className={styles.wrapper}
      >
        <input
          accept="image/*"
          className={styles.input}
          type="file"
          onChange={handleChange}
        />
        <div>
          <img src="./uploadPicture.svg" alt="uploadPicture" />
        </div>
        <div>+ Upload Image</div>
      </button>
    </>
  );
};
