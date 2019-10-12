import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <section className='top-nav-bar'>
                <nav>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Projects
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </nav>
            </section>
        )
    }
}

export default Navbar
