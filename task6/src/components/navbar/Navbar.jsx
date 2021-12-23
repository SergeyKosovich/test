import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink
          to='/'
          className={(navData) =>
            navData.isActive ? classes.active : classes.simple
          }
        >
          main
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to='/employees'
          className={(navData) => (navData.isActive ? classes.active : '')}
        >
          employees
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
