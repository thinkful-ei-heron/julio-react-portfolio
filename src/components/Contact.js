import React, { Component } from 'react'

let sectionStyles = {
    backgroundColor:'rgba(1,1,1,.85)',
    padding:'5vh 10vw',
    textAlign: 'center',
}
let iconStyles = {
    width:'10vw',
    padding:'0 2vw',
}

export class Contact extends Component {
    render() {
        return (
        <section className='contact' style={sectionStyles}>
            <h2>Contact</h2>
            <a href='https://github.com/hernandez-crypto'><img src={require('./images/gitHub.svg')} alt='gitHubIcon' className='icon' style={iconStyles}/></a>
            <a href='https://www.linkedin.com/in/julio-hernandez-03853b163/'><img src={require('./images/linkedIn.png')} alt='linkedInIcon' className='icon' style={iconStyles}/></a>
            <a href='mailto:hernandezjulio58@ymail.com'><img src={require('./images/email.png')} alt='emailIcon' className='icon' style={iconStyles}/></a>
            <a href='tel:3312459841'><img src={require('./images/phone.png')} alt='phoneIcon' className='icon phone' style={iconStyles}/></a>
        </section>
        )
    }
}


export default Contact
