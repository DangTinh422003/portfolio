import styles from './Experience.module.scss';

function Experience() {
  return (
    <div className={styles.Experience}>
      <div className={styles.ExperienceList}>
        <div className="row g-0">
          <div className="col-6">
            <div className={styles.item}>
              <div className={styles.year}>
                1 <span>+</span>
              </div>
              <div className={styles.desc}>
                <span>YEARS OF</span> EXPERIENCE
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className={styles.item}>
              <div className={styles.year}>
                3 <span>+</span>
              </div>
              <div className={styles.desc}>
                <span>COMPLETED</span> PROJECTS
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className={styles.item}>
              <div className={styles.year}>
                1 <span>+</span>
              </div>
              <div className={styles.desc}>
                <span>HAPPY</span> CUSTOMER
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className={styles.item}>
              <div className={styles.year}>
                1 <span>+</span>
              </div>
              <div className={styles.desc}>
                <span>AWARD</span> WON
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
