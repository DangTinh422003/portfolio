import Img from '~/components/GlobalComponents/Img';
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
  typescript,
} from '~/static/img/skill';

function Skills() {
  return (
    <div className={styles.Skills}>
      <h2 className={styles.Heading}>My Skills</h2>
      <div className={styles.Content}>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-6">
            <div className={styles.skillItem} data-aos="fade-up" data-aos-duration="1000">
              <Img src={html} alt="" className={styles.wrapLogo} transparent={true}/>
              <p className={styles.skillName}>HTML</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className={styles.skillItem} data-aos="fade-up" data-aos-duration="1000">
              <Img src={css} alt="" className={styles.wrapLogo} transparent={true}/>
              <p className={styles.skillName}>CSS</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className={styles.skillItem} data-aos="fade-up" data-aos-duration="1000">
              <Img src={sass} alt="" className={styles.wrapLogo} transparent={true}/>
              <p className={styles.skillName}>SASS</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className={styles.skillItem} data-aos="fade-up" data-aos-duration="1000">
              <Img src={js} alt="" className={styles.wrapLogo} transparent={true}/>
              <p className={styles.skillName}>JAVASCRIPT</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className={styles.skillItem} data-aos="fade-up" data-aos-duration="1000">
              <Img src={java} alt="" className={styles.wrapLogo} transparent={true}/>
              <p className={styles.skillName}>JAVA OOP</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className={styles.skillItem} data-aos="fade-up" data-aos-duration="1000">
              <Img src={bootstrap} alt="" className={styles.wrapLogo} transparent={true}/>
              <p className={styles.skillName}>bootstrap</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className={styles.skillItem} data-aos="fade-up" data-aos-duration="1000">
              <Img src={nodejs} alt="" className={styles.wrapLogo} transparent={true}/>
              <p className={styles.skillName}>nodejs</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className={styles.skillItem} data-aos="fade-up" data-aos-duration="1000">
              <Img src={axios} alt="" className={styles.wrapLogo} transparent={true}/>
              <p className={styles.skillName}>axios</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className={styles.skillItem} data-aos="fade-up" data-aos-duration="1000">
              <Img src={react} alt="" className={styles.wrapLogo} transparent={true}/>
              <p className={styles.skillName}>react</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className={styles.skillItem} data-aos="fade-up" data-aos-duration="1000">
              <Img src={typescript} alt="" className={styles.wrapLogo} transparent={true}/>
              <p className={styles.skillName}>typescript</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className={styles.skillItem} data-aos="fade-up" data-aos-duration="1000">
              <Img src={git} alt="" className={styles.wrapLogo} transparent={true}/>
              <p className={styles.skillName}>git</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className={styles.skillItem} data-aos="fade-up" data-aos-duration="1000">
              <Img src={redux} alt="" className={styles.wrapLogo} transparent={true}/>
              <p className={styles.skillName}>redux</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
