import Header from '~/components/GlobalComponents/Header';
import styles from './Portfolio.module.scss';
import clsx from 'clsx';
import ControlGroup from './ControlGroup';
import ProjectsList from './ProjectsList';

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
          <ProjectsList></ProjectsList>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
