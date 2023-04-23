import styles from './Skills.module.scss';
import {
  axios,
  bootstrap,
  css,
  git,
  html,
  java,
  js,
  nodejs,
  react,
  redux,
  sass,
} from '~/static/img/skill';

function Skills() {
  return (
    <div className={styles.Skills}>
      <h2 className={styles.Heading}>My Skills</h2>
      <div className={styles.Content}>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-6">
            <div
              className={styles.skillItem}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={styles.wrapLogo}>
                <img src={html} alt="" className={styles.logo} />
              </div>
              <p className={styles.skillName}>HTML</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div
              className={styles.skillItem}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={styles.wrapLogo}>
                <img src={css} alt="" className={styles.logo} />
              </div>
              <p className={styles.skillName}>CSS</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div
              className={styles.skillItem}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={styles.wrapLogo}>
                <img src={sass} alt="" className={styles.logo} />
              </div>
              <p className={styles.skillName}>SASS</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div
              className={styles.skillItem}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={styles.wrapLogo}>
                <img src={js} alt="" className={styles.logo} />
              </div>
              <p className={styles.skillName}>JAVASCRIPT</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div
              className={styles.skillItem}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={styles.wrapLogo}>
                <img src={java} alt="" className={styles.logo} />
              </div>
              <p className={styles.skillName}>JAVA OOP</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div
              className={styles.skillItem}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={styles.wrapLogo}>
                <img src={bootstrap} alt="" className={styles.logo} />
              </div>
              <p className={styles.skillName}>bootstrap</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div
              className={styles.skillItem}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={styles.wrapLogo}>
                <img src={nodejs} alt="" className={styles.logo} />
              </div>
              <p className={styles.skillName}>nodejs</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div
              className={styles.skillItem}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={styles.wrapLogo}>
                <img src={axios} alt="" className={styles.logo} />
              </div>
              <p className={styles.skillName}>axios</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div
              className={styles.skillItem}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={styles.wrapLogo}>
                <img src={react} alt="" className={styles.logo} />
              </div>
              <p className={styles.skillName}>react</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div
              className={styles.skillItem}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={styles.wrapLogo}>
                <img src={git} alt="" className={styles.logo} />
              </div>
              <p className={styles.skillName}>git</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div
              className={styles.skillItem}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={styles.wrapLogo}>
                <img src={redux} alt="" className={styles.logo} />
              </div>
              <p className={styles.skillName}>redux</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
