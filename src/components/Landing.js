import React, { Component } from 'react'
import LandingVideo from './LandingVideo'
import Flavicon from './Flavicon'


const sectionStyle = {
    top: "0",
    width: "100vw",
    height: "100vh",
    position: "relative",
};
const textStyle = {
    color: "black",
    display: "flex",
    'flexDirection':'column',
    'alignItems':'center',
    'textAlign':"center",
    'verticalAlign':"center",
    'justifyContent':'center',
    'padding':'30vh 0',
    fontSize:'40px',
    
}
export class Landing extends Component {
    render() {
        return (
        
        <section id='landing' style={sectionStyle}>
            <header style={textStyle} role="banner" id="header">
                <h2>Julio Hernandez</h2>
                <h2>Web Dev Portfolio</h2>
            </header>
            <LandingVideo />
            <Flavicon/>
        </section>
        
        )
    }
}
export default Landing