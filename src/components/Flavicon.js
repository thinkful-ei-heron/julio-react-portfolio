import React, { Component } from 'react';
import './components.css';
export class Flavicon extends Component {
  render() {
    return (
      <section id='flavicon' className='sectionStyles flavicon'>
        <h5>
          Icons made by :{' '}
          <a
            href='https://www.flaticon.com/authors/freepik'
            target='_blank'
            rel='noopener noreferrer'
            title='Freepik'
          >
            Freepik
          </a>{' '}
          (Nav Home) &{' '}
          <a
            href='https://www.flaticon.com/authors/icongeek26'
            title='Icongeek26'
          >
            Icongeek26
          </a>{' '}
          (Nav Web & Nav Card) from{' '}
          <a
            href='https://www.flaticon.com/'
            target='_blank'
            rel='noopener noreferrer'
            title='Flaticon'
          >
            www.flaticon.com
          </a>
        </h5>
      </section>
    );
  }
}
export default Flavicon;
