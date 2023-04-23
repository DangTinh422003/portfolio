import Header from '~/components/GlobalComponents/Header';
import styles from './Contact.module.scss';
import clsx from 'clsx';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';

function Contact() {
  return (
    <div className={clsx(styles.Contact, 'routingAnimation')}>
      <div className="container">
        <Header
          mainHeading={{ main: 'get in', strong: 'touch' }}
          subHeading={'contact'}
        />

        <div className={styles.Content}>
          <div className="row">
            <div className="col-4">
              <ContactInfo />
            </div>
            <div className="col-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
