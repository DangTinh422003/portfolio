import clsx from 'clsx';
import styles from './Resume.module.scss';

function Resume() {
  return (
    <div className={styles.Resume}>
      <h2 className={styles.heading}>EDUCATION & EXPERIENCE</h2>
      <div className={styles.content}>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className={clsx(styles.resumeItem)} data-aos="fade-right">
              <div className={styles.icon}>
                <i className="fa-solid fa-book-open"></i>
              </div>
              <div className={styles.timeLine}>2019 - 2021</div>
              <h3 className={styles.title}>
                HOA HOI <span>HIGH SCHOOL</span>
              </h3>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati rerum maiores velit ducimus minima earum corrupti
                necessitatibus, nulla dolor? vero.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className={clsx(styles.resumeItem)} data-aos="fade-left">
              <div className={styles.icon}>
                <i className="fa-solid fa-building-columns"></i>
              </div>
              <div className={styles.timeLine}>2021</div>
              <h3 className={styles.title}>
                TON DUC THANG <span>UNIVERSITY</span>
              </h3>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati rerum maiores velit ducimus minima earum corrupti
                necessitatibus, nulla dolor? vero.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className={clsx(styles.resumeItem)} data-aos="fade-right">
              <div className={styles.icon}>
                <i className="fa-solid fa-code"></i>
              </div>
              <div className={styles.timeLine}>2021</div>
              <h3 className={styles.title}>
                Mentor <span>Icon Club</span>
              </h3>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati rerum maiores velit ducimus minima earum corrupti
                necessitatibus, nulla dolor? vero.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className={clsx(styles.resumeItem)} data-aos="fade-left">
              <div className={styles.icon}>
                <i className="fa-solid fa-code"></i>
              </div>
              <div className={styles.timeLine}>November - 2021</div>
              <h3 className={styles.title}>
                Landing Page <span>The First Website</span>
              </h3>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati rerum maiores velit ducimus minima earum corrupti
                necessitatibus, nulla dolor? vero.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className={clsx(styles.resumeItem)} data-aos="fade-right">
              <div className={styles.icon}>
                <i className="fa-solid fa-user"></i>
              </div>
              <div className={styles.timeLine}>2022</div>
              <h3 className={styles.title}>
                Important Member <span>IT club</span>
              </h3>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati rerum maiores velit ducimus minima earum corrupti
                necessitatibus, nulla dolor? vero.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className={clsx(styles.resumeItem)} data-aos="fade-left">
              <div className={styles.icon}>
                <i className="fa-solid fa-laptop"></i>
              </div>
              <div className={styles.timeLine}>NOW</div>
              <h3 className={styles.title}>
                FrontEnd Dev <span>Intern</span>
              </h3>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati rerum maiores velit ducimus minima earum corrupti
                necessitatibus, nulla dolor? vero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
