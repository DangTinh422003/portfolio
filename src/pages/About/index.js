import Header from '~/components/GlobalComponents/Header';
import Information from './components/Information';
import Resume from './components/Resume';
import Skills from './components/Skills';
import clsx from 'clsx';
import styles from './About.module.scss';

function About() {
  return (
    <div className={clsx(styles.About, 'routingAnimation')}>
      <div className="container">
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
    </div>
  );
}

export default About;
