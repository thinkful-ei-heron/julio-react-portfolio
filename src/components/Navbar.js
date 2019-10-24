import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const navStyles = {
  backgroundColor: 'rgba(190,190,190, 0.3)',
  position: 'fixed',
  padding: '.5% 0',
  top: '0',
  left: '0',
  right: '0',
  marginBottom: 'height',
  zIndex: '10',
  display: 'flex',
  justifyContent: 'center',
};
const iconStyles = {
  width: '5vw',
  maxWidth: '37px',
  minWidth: '35px',
};
const listStyles = {
  display: 'inline-block',
  padding: '2.5px 8vw',
};
export class Navbar extends Component {
  render() {
    return (
      <section className='top-nav-bar'>
        <nav style={navStyles}>
          <ul className='nav-bar-items'>
            <li style={listStyles}>
              <NavLink to={'/projects'}>
                <img
                  src={require('./images/web-programming.svg')}
                  alt='Projects'
                  className='nav-icon'
                  style={iconStyles}
                />
              </NavLink>
            </li>
            <li style={listStyles}>
              <NavLink to={'/'}>
                <img
                  src={require('./images/home.svg')}
                  alt='Home'
                  className='nav-icon'
                  style={iconStyles}
                />
              </NavLink>
            </li>
            <li style={listStyles}>
              <NavLink to={'/contact'}>
                <img
                  src={require('./images/identification.svg')}
                  alt='Contact'
                  className='nav-icon'
                  style={iconStyles}
                />
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}
export default Navbar;
