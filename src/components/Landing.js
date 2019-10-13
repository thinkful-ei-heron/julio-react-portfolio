import React, { Component } from 'react'
import LandingVideo from './LandingVideo'


const sectionStyle = {
    top: "0",
    width: "100vw",
    height: "100vh",
    position: "relative",
};
const textStyle = {
    color: "white",
    display: "flex",
    'flexDirection':'column',
    'alignItems':'center',
    'textAlign':"center",
    'verticalAlign':"center",
    'justifyContent':'center',
    'padding':'40vh 0'
}
export class Landing extends Component {
    render() {
        return (
        
        <section className='landing' style={sectionStyle}>
            <header style={textStyle} role="banner" id="header">
                <h1>Hello World!</h1>
                <p className="tldr">My name is Julio. I'm an entry level software engineer.</p>
            </header>
            <LandingVideo />
        </section>
        
        )
    }
}

export default Landing
