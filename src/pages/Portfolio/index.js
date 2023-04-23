import Header from '~/components/GlobalComponents/Header';
import styles from './Portfolio.module.scss';
import clsx from 'clsx';

function Portfolio() {
  return (
    <div className={clsx(styles.Portfolio, 'routingAnimation')}>
      <Header
        mainHeading={{ strong: 'portfolio', main: 'my' }}
        subHeading={'works'}
      />

      <div className="content">
        <div className="container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eos
          numquam non iure neque doloremque architecto ratione placeat nemo.
          Consequatur molestias explicabo commodi qui suscipit molestiae minus
          aperiam iure praesentium?
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
