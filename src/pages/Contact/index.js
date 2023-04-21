import Header from '~/components/GlobalComponents/Header';
import styles from './Contact.module.scss';

function Contact() {
  return (
    <div className={styles.Contact}>
      <Header
        mainHeading={{ main: 'get in', strong: 'touch' }}
        subHeading={'contact'}
      />
    </div>
  );
}

export default Contact;
