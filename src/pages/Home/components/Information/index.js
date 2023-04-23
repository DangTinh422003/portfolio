import LinkButton from '~/components/GlobalComponents/LinkButton';
import styles from './Information.module.scss';
import clsx from 'clsx';

function Information() {
  return (
    <div className={clsx(styles.Information)}>
      <div className="container">
        <div className={styles.Content}>
          <h1 className={styles.Heading}>
            <span>I'm Cao Dang Tinh</span> Web Developer !
          </h1>
          <p className={styles.desc}>
            Hello everyone! My name is Tinh, and I am a second-year student at
            Ton Duc Thang University. During the summer of my first year in
            2021, I stumbled upon the F8 Fullstack community founded by Mr. Son,
            where I completed courses on HTML, CSS, and ReactJS, and worked on
            some personal projects. Despite facing many challenges, I am truly
            grateful to Mr. Son and the community for their support and
            encouragement, which kept me from giving up.
          </p>
          <div className={styles.control}>
            <LinkButton
              icon={<i className="fa-solid fa-arrow-right"></i>}
              path={'/portfolio'}
              text={'portfolio'}
            />

            <LinkButton
              icon={<i className="fa-solid fa-arrow-right"></i>}
              path={'/about'}
              text={'about'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
