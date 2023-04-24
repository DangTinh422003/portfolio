import LinkButton from '~/components/GlobalComponents/LinkButton';
import styles from './ContactForm.module.scss';
import { useState } from 'react';

function ContactForm() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleOnChange = (e) => {
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <form className={styles.ContactForm}>
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className={styles.groupInput}>
            <input
              onChange={handleOnChange}
              type="text"
              placeholder="your name"
              name="username"
              value={userInfo.username}
              required
            />
          </div>
        </div>

        <div className="col-lg-6 col-12">
          <div className={styles.groupInput}>
            <input
              onChange={handleOnChange}
              type="text"
              placeholder="your email"
              name="email"
              value={userInfo.email}
              required
            />
          </div>
        </div>

        <div className="col-12">
          <div className={styles.groupInput}>
            <input
              onChange={handleOnChange}
              type="text"
              placeholder="your subject"
              name="subject"
              value={userInfo.subject}
              required
            />
          </div>
        </div>

        <div className="col-12">
          <div className={styles.groupInput}>
            <textarea
              onChange={handleOnChange}
              placeholder="your message"
              name="message"
              value={userInfo.message}
              required
            />
          </div>
        </div>
      </div>

      <button className={styles.submitBtn} onClick={handleSubmit}>
        <LinkButton
          icon={<i className="fa-sharp fa-solid fa-mailbox"></i>}
          text={'send message'}
        />
      </button>
    </form>
  );
}

export default ContactForm;
