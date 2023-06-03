import Slider from '../Slider';
import styles from './ContentLeft.module.scss';

function ContentLeft({ data }) {
  return (
    <div className={styles.ContentLeft}>
      <h3 className={styles.heading}>{data.name}</h3>
      <div className={styles.mainThumbnail}>{data && <Slider images={data.images} />}</div>
    </div>
  );
}

export default ContentLeft;
