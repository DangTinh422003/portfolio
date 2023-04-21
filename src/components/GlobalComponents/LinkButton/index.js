import { Link } from 'react-router-dom';
import styles from './LinkButton.module.scss';

function LinkButton({ icon, text, path }) {
  return (
    <Link to={path} className={styles.LinkButton}>
      <div className={styles.content}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.text}>{text}</span>
      </div>
    </Link>
  );
}

export default LinkButton;
