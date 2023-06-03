import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LinkButton from '~/components/GlobalComponents/LinkButton';
import styles from './ContactForm.module.scss';

function ContactForm() {
  const toastOption = {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  };

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
    const validateGmail = (email) => {
      const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      return gmailRegex.test(email);
    };
    if (
      !userInfo.email ||
      !userInfo.message ||
      !userInfo.subject ||
      !userInfo.username
    ) {
      toast.error('Please fill all fields', toastOption);
      return;
    } else if (!validateGmail(userInfo.email)) {
      toast.error('Please enter a valid email', toastOption);
      return;
    }

    setUserInfo({
      username: '',
      email: '',
      subject: '',
      message: '',
    });
    toast.success('Successful! ', toastOption);
  };

  return (
    <form className={styles.ContactForm}>
      <ToastContainer />
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className={styles.groupInput}>
            <input
              required
              onChange={handleOnChange}
              type="text"
              placeholder="YOUR NAME"
              name="username"
              value={userInfo.username}
            />
          </div>
        </div>

        <div className="col-lg-6 col-12">
          <div className={styles.groupInput}>
            <input
              required
              onChange={handleOnChange}
              type="text"
              placeholder="YOUR EMAIL"
              name="email"
              value={userInfo.email}
            />
          </div>
        </div>

        <div className="col-12">
          <div className={styles.groupInput}>
            <input
              required
              onChange={handleOnChange}
              type="text"
              placeholder="YOUR SUBJECT"
              name="subject"
              value={userInfo.subject}
            />
          </div>
        </div>

        <div className="col-12">
          <div className={styles.groupInput}>
            <textarea
              required
              onChange={handleOnChange}
              placeholder="YOUR MESSAGE"
              name="message"
              value={userInfo.message}
            />
          </div>
        </div>
      </div>

      <button className={styles.submitBtn} onClick={handleSubmit}>
        <LinkButton
          icon={<i className="fa-solid fa-paper-plane"></i>}
          text={'send message'}
        />
      </button>
      {/* Same as */}
      <ToastContainer />
    </form>
  );
}

export default ContactForm;
