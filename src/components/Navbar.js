import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <section className='top-nav-bar'>
                <nav>
                    <ul  className='nav-bar-items'>
                        <li>
                            <img src={require('./images/home.svg')} alt='Home' className='nav-icon'/>
                        </li>
                        <li>
                            <img src={require('./images/web-programming.svg')} alt='Projects' className='nav-icon'/>
                        </li>
                        <li>
                            <img src={require('./images/identification.svg')} alt='Contact' className='nav-icon'/>
                        </li>
                    </ul>
                </nav>
            </section>
        )
    }
}

export default Navbar
