import clsx from 'clsx';
import styles from './Header.module.scss';

function Header({ mainHeading, subHeading }) {
  return (
    <div
      className={clsx(styles.Header)}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className={styles.content}>
        <h1 className={styles.mainHeading}>
          <span>{mainHeading.main}</span> {mainHeading.strong}
        </h1>
        <h3 className={styles.subHeading}>{subHeading}</h3>
      </div>
    </div>
  );
}

export default Header;
