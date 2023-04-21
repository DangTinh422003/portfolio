import Header from '~/components/GlobalComponents/Header';
import styles from './About.module.scss';
import Information from './components/Information';
import Skills from './components/Skills';
import Resume from './components/Resume';

function About() {
  return (
    <div className={styles.About}>
      <Header
        mainHeading={{ main: 'about', strong: 'me' }}
        subHeading={'resume'}
      />
      <Information></Information>
      <div className={styles.separator}></div>
      <Skills></Skills>
      <div className={styles.separator}></div>
      <Resume></Resume>
    </div>
  );
}

export default About;
