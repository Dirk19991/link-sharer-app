import { useState } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from 'app/store';
import { updateFile } from 'features/addPicture/model/slice';

export const UploadPictureButton = () => {
  const [hovered, setHovered] = useState(false);

  const file = useAppSelector(state => state.addPicture.file);
  const dispatch = useAppDispatch();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.files);
    if (e.target.files) {
      console.log(e.target.files[0]);
      dispatch(updateFile(URL.createObjectURL(e.target.files[0])));
    }
  }

  return (
    <>
      <button
        style={{
          backgroundImage: hovered
            ? `linear-gradient(rgb(0 0 0/50%) 0 0), url(${file})`
            : `url(${file})`,
          backgroundSize: 'cover',
        }}
        className={cn(styles.wrapper, hovered && styles.hovered)}
      >
        <label
          onMouseLeave={() => setHovered(false)}
          onMouseEnter={() => setHovered(true)}
          className={styles.label}
          htmlFor="file-upload"
        ></label>
        <input
          id="file-upload"
          accept="image/*"
          type="file"
          onChange={handleChange}
        />
        {file && hovered ? (
          <div className={styles.hiddenButtonText}>
            <div>
              <img
                className={styles.whiteIcon}
                src="./uploadPicture.svg"
                alt="uploadPicture"
              />
            </div>
            <div>+ Upload Image</div>
          </div>
        ) : (
          <div className={cn(styles.buttonText, file && styles.hidden)}>
            <div>
              <img src="/uploadPicture.svg" alt="uploadPicture" />
            </div>
            <div>+ Upload Image</div>
          </div>
        )}
      </button>
    </>
  );
};
