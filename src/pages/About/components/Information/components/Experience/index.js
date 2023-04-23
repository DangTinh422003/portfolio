import styles from './Experience.module.scss';

function Experience() {
  return (
    <div
      className={styles.Experience}
      data-aos="fade-up-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
    >
      <div className={styles.ExperienceList}>
        <div className="row">
          <div className="col-6" style={{ paddingRight: '20px' }}>
            <div className={styles.item}>
              <div className={styles.year}>
                1 <span>+</span>
              </div>
              <div className={styles.desc}>
                <span>YEARS OF</span> EXPERIENCE
              </div>
            </div>
          </div>

          <div className="col-6" style={{ paddingRight: '20px' }}>
            <div className={styles.item}>
              <div className={styles.year}>
                3 <span>+</span>
              </div>
              <div className={styles.desc}>
                <span>COMPLETED</span> PROJECTS
              </div>
            </div>
          </div>

          <div className="col-6" style={{ paddingRight: '20px' }}>
            <div className={styles.item}>
              <div className={styles.year}>
                1 <span>+</span>
              </div>
              <div className={styles.desc}>
                <span>HAPPY</span> CUSTOMER
              </div>
            </div>
          </div>

          <div className="col-6" style={{ paddingRight: '20px' }}>
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
