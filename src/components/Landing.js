import React, { Component } from 'react'
import LandingVideo from './LandingVideo'

export class Landing extends Component {
    render() {
        return (
        
        <section className='landing'>
            <LandingVideo />
            <header role="banner" id="header">
                <h1>Hello World!</h1>
                <p className="tldr">My name is Julio. I'm an entry level software engineer.</p>
            </header>
        </section>
        
        )
    }
}

export default Landing
