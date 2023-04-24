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

        <div className={clsx(styles.Content, 'slideTop')}>
          <div className="row">
            <div className="col-lg-4 col-12">
              <ContactInfo />
            </div>
            <div className="col-lg-8 col-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
