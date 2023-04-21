import styles from './Thumbnail.module.scss';
import ThumbnailImage from '~/static/img/thumbnail.png';

function Thumbnail() {
  return (
    <div className={styles.Thumbnail}>
      <div className={styles.colorBlock}></div>
      <div className={styles.Thumbnail__wrap}>
        <img
          src={ThumbnailImage}
          alt="ThumbnailImage"
          className={styles.ThumbnailImage}
        />
      </div>
    </div>
  );
}

export default Thumbnail;
