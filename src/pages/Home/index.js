import styles from './Home.module.scss';
import Information from './components/Information';
import Thumbnail from './components/Thumbnail';

function Home() {
  return (
    <div className={styles.Home}>
      <div className="container">
        <div className={styles.content}>
          <div className="row">
            <div className="col-lg col-12">
              <Thumbnail />
            </div>
            <div className="col-lg-7 col-12">
              <Information />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
