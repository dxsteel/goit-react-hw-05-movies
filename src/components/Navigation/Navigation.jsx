import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles['navigation--active'] : styles['navigation-link']
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles['navigation--active'] : styles['navigation-link']
        }
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
