import React, { Component } from 'react';
const navStyles = {
  backgroundColor: 'rgba(1,1,1,.85)',
  position: 'fixed',
  padding: '.5% 0',
  top: '0',
  left: '0',
  right: '0',
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
              <a href='#prolst'>
                <img
                  src={require('./images/web-programming.svg')}
                  alt='Projects'
                  className='nav-icon'
                  style={iconStyles}
                />
              </a>
            </li>
            <li style={listStyles}>
              <a href='#landing'>
                <img
                  src={require('./images/home.svg')}
                  alt='Home'
                  className='nav-icon'
                  style={iconStyles}
                />
              </a>
            </li>
            <li style={listStyles}>
              <a href='#contact'>
                <img
                  src={require('./images/identification.svg')}
                  alt='Contact'
                  className='nav-icon'
                  style={iconStyles}
                />
              </a>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}
export default Navbar;
