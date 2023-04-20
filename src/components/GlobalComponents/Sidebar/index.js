import NavItem from './NavItem';
import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.nav}>
        <NavItem
          name={'home'}
          icon={<i className="fa-solid fa-house"></i>}
          path={'/'}
        />
        <NavItem
          name={'portfolio'}
          icon={<i className="fa-solid fa-briefcase"></i>}
          path={'/portfolio'}
        />
        <NavItem
          name={'about'}
          icon={<i className="fa-solid fa-user"></i>}
          path={'/about'}
        />
        <NavItem
          name={'contact'}
          icon={<i className="fa-solid fa-envelope"></i>}
          path={'/contact'}
        />
      </nav>
    </div>
  );
}

export default Sidebar;
