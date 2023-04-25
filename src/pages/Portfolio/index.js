import Header from '~/components/GlobalComponents/Header';
import styles from './Portfolio.module.scss';
import clsx from 'clsx';
import ControlGroup from './ControlGroup';
import Projects from './Projects';

function Portfolio() {
  return (
    <div className={clsx(styles.Portfolio, 'routingAnimation')}>
      <Header
        mainHeading={{ strong: 'portfolio', main: 'my' }}
        subHeading={'works'}
      />

      <div className="content">
        <div className="container">
          <ControlGroup></ControlGroup>
          <Projects></Projects>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
