import styles from './Resume.module.scss';

function Resume() {
  return (
    <div className={styles.Resume}>
      <h2 className={styles.heading}>EDUCATION & EXPERIENCE</h2>
      <div className={styles.content}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className={styles.resumeItem}>
                <div className={styles.icon}>
                  <i class="fa-solid fa-book-open"></i>
                </div>
                <div className={styles.timeLine}>2019 - 2021</div>
                <h3 className={styles.title}>
                  HOA HOI <span>HIGH SCHOOL</span>
                </h3>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati rerum maiores velit ducimus minima earum corrupti
                  necessitatibus, nulla dolor? Totam numquam nulla beatae rem
                  consectetur ut ad esse provident vero.
                </p>
              </div>
            </div>

            <div className="col-6">
              <div className={styles.resumeItem}>
                <div className={styles.icon}>
                  <i class="fa-solid fa-building-columns"></i>
                </div>
                <div className={styles.timeLine}>2021</div>
                <h3 className={styles.title}>
                  TON DUC THANG <span>UNIVERSITY</span>
                </h3>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati rerum maiores velit ducimus minima earum corrupti
                  necessitatibus, nulla dolor? Totam numquam nulla beatae rem
                  consectetur ut ad esse provident vero.
                </p>
              </div>
            </div>

            <div className="col-6">
              <div className={styles.resumeItem}>
                <div className={styles.icon}>
                  <i class="fa-solid fa-code"></i>
                </div>
                <div className={styles.timeLine}>2021</div>
                <h3 className={styles.title}>
                  Mentor <span>Icon Club</span>
                </h3>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati rerum maiores velit ducimus minima earum corrupti
                  necessitatibus, nulla dolor? Totam numquam nulla beatae rem
                  consectetur ut ad esse provident vero.
                </p>
              </div>
            </div>

            <div className="col-6">
              <div className={styles.resumeItem}>
                <div className={styles.icon}>
                  <i class="fa-solid fa-code"></i>
                </div>
                <div className={styles.timeLine}>November - 2021</div>
                <h3 className={styles.title}>
                  Landing Page <span>The First Website</span>
                </h3>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati rerum maiores velit ducimus minima earum corrupti
                  necessitatibus, nulla dolor? Totam numquam nulla beatae rem
                  consectetur ut ad esse provident vero.
                </p>
              </div>
            </div>

            <div className="col-6">
              <div className={styles.resumeItem}>
                <div className={styles.icon}>
                  <i class="fa-solid fa-user"></i>
                </div>
                <div className={styles.timeLine}>2022</div>
                <h3 className={styles.title}>
                  Important Member <span>IT club</span>
                </h3>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati rerum maiores velit ducimus minima earum corrupti
                  necessitatibus, nulla dolor? Totam numquam nulla beatae rem
                  consectetur ut ad esse provident vero.
                </p>
              </div>
            </div>

            <div className="col-6">
              <div className={styles.resumeItem}>
                <div className={styles.icon}>
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className={styles.timeLine}>NOW</div>
                <h3 className={styles.title}>
                  FrontEnd Dev <span>Intern</span>
                </h3>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati rerum maiores velit ducimus minima earum corrupti
                  necessitatibus, nulla dolor? Totam numquam nulla beatae rem
                  consectetur ut ad esse provident vero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
