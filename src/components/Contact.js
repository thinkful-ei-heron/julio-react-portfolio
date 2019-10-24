import React, { Component } from 'react';
import './components.css';
import Bio from './Bio';

export class Contact extends Component {
  render() {
    return (
      <div>
        <Bio />
        <section id='contact' className='sectionStyles'>
          <h2>Contact Me</h2>
          <div className='itemStyles'>
            <a href='tel:3315559841'>
              <img
                src={require('./images/phone1.jpg')}
                alt='phoneIcon'
                className='phone iconStyles'
              />
            </a>
            <a href='https://github.com/hernandez-crypto'>
              <img
                src={require('./images/github1.svg')}
                alt='gitHubIcon'
                className='iconStyles'
              />
            </a>
            <a href='https://www.linkedin.com/in/julio-hernandez-03853b163/'>
              <img
                src={require('./images/linkedin1.svg')}
                alt='linkedInIcon'
                className='iconStyles'
              />
            </a>
            <a href='mailto:hernandezjulio58@ymail.com'>
              <img
                src={require('./images/email1.svg')}
                alt='emailIcon'
                className='iconStyles'
              />
            </a>
          </div>
        </section>
      </div>
    );
  }
}
export default Contact;
