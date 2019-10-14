import React, { Component } from 'react'
import './index.css'
const FlaviconStyles = {
    color: 'white',
    textAlign: 'center',
    fontSize: '12px',
}
const linkStyle = {
    color: 'white',
}
export class Flavicon extends Component {
    render() {
        return (
            <section id='flavicon' style={FlaviconStyles}>
                <h5>Icons made by : <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener noreferrer" title="Freepik" style={linkStyle}>Freepik</a> (Nav Home) & <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26" style={linkStyle}>Icongeek26</a> (Nav Web & Nav Card) from <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer" title="Flaticon" style={linkStyle}>www.flaticon.com</a></h5>
            </section>
        )
    }
}
export default Flavicon
