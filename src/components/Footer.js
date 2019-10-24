import React, { Component } from 'react';
let footerStyles = {
  color: 'white',
  bottom: '0',
  left: '0',
  right: '0',
  textAlign: 'center',
  backgroundColor: 'black',
  padding: '5px 0',
};
export class Footer extends Component {
  render() {
    return (
      <div>
        <footer style={footerStyles}>Julio C. Hernandez</footer>
      </div>
    );
  }
}
export default Footer;
