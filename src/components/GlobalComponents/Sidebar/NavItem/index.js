import { Link } from 'react-router-dom';
import styles from './NavItem.module.scss';

function NavItem(props) {
  const { name, icon, path } = props;

  return (
    <Link className="navLink" to={path}>
      <div className={styles.navItem}>
        <span className={styles.navLinkText}>{name}</span>
        <div className={styles.navLinkIcon}>{icon}</div>
      </div>
    </Link>
  );
}

export default NavItem;
