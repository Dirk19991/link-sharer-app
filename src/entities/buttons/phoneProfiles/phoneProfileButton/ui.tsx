import { PhoneProfileButtonProps } from './model/types';
import styles from './styles.module.scss';
import cn from 'classnames';

export const PhoneProfileButton = ({
  platform,
  link,
}: PhoneProfileButtonProps) => {
  return platform === null ? (
    <div className={styles.wrapper}>
      <div className={styles.arrow}>
        <img src="/arrow.svg" alt="arrow" />
      </div>
    </div>
  ) : (
    <div className={cn(styles.wrapper, styles[`${platform.toLowerCase()}`])}>
      <a className={styles.link} href={link ? link : '/'}></a>
      <div className={styles.platformLogo}>
        <img src={`/websites/${platform.toLowerCase()}.svg`} alt="platform" />
      </div>
      <div className={styles.platformName}>{platform}</div>
      <div className={styles.arrow}>
        <img src="/arrow.svg" alt="arrow" />
      </div>
    </div>
  );
};
