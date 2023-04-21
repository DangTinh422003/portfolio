import styles from './Information.module.scss';
import Experience from './components/Experience';
import Personal from './components/Persomal';

function Information() {
  return (
    <div className={styles.Information}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Personal />
          </div>

          <div className="col-6">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
