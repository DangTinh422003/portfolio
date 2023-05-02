import styles from './DetailModal.module.scss';
import ContentLeft from './components/ContentLeft';
import ContentRight from './components/ContentRight';

function DetailModal({ data, onActiveModal }) {
  return (
    <div className={styles.DetailModal}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <ContentLeft data={data}></ContentLeft>
            </div>

            <div className="col-6">
              <ContentRight data={data}></ContentRight>
            </div>
          </div>

          <button className={styles.closeBtn} onClick={onActiveModal}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
