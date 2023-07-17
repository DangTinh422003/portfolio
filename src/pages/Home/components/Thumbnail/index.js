import clsx from 'clsx';
import styles from './Thumbnail.module.scss';
import ThumbnailImage from '~/static/img/thumbnail.png';
import Img from '~/components/GlobalComponents/Img';

function Thumbnail() {
  return (
    <div className={styles.Thumbnail}>
      <div className={styles.Thumbnail__wrap}>
        <Img
          src={ThumbnailImage}
          alt="ThumbnailImage"
          className={clsx(styles.ThumbnailImage)}
          transparent={true}
        />
      </div>
    </div>
  );
}

export default Thumbnail;
