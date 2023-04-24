import styles from './ContactInfo.module.scss';

function ContactInfo() {
  return (
    <div className={styles.ContactInfo}>
      <h3 className={styles.Heading}>DON'T BE SHY !</h3>

      <p className={styles.decs}>
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </p>

      <ul className={styles.infoList}>
        <li>
          <div className={styles.icon}>
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <span>ADDRESS</span>
          District 7, Ho Chi Minh City
        </li>

        <li>
          <div className={styles.icon}>
            <i className="fa-solid fa-envelope"></i>
          </div>
          <span>EMAIL</span>
          tinh03xx@gmail.com
        </li>

        <li>
          <div className={styles.icon}>
            <i class="fa-solid fa-phone"></i>
          </div>
          <span>PHONE</span>
          0862040xxx
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;
