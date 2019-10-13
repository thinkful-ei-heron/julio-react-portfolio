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
    'padding':'40vh 0',
    fontSize:'40px',
    
}
export class Landing extends Component {
    render() {
        return (
        
        <section id='landing' style={sectionStyle}>
            <header style={textStyle} role="banner" id="header">
                <h1>Hello World!</h1>
                <h2>{"<Julio Hernandez/>"}</h2>
                <h2>Portfolio</h2>
            </header>
            <LandingVideo />
        </section>
        
        )
    }
}

export default Landing
