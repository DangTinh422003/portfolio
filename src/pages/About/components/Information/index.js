import styles from './Information.module.scss';
import Experience from './components/Experience';
import Personal from './components/Persomal';
function Information() {
  return (
    <div className={styles.Information}>
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <Personal />
          </div>

          <div className="col-lg-6 col-md-12">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
