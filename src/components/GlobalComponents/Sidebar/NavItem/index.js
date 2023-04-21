import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.scss';

function NavItem({ name, icon, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        let className = '';
        isActive && (className = styles.active);
        return `${className} ${styles.navLink}`;
      }}
    >
      <div className={styles.navItem}>
        <span className={styles.navLinkText}>{name}</span>
        <div className={styles.navLinkIcon}>{icon}</div>
      </div>
    </NavLink>
  );
}

export default NavItem;
