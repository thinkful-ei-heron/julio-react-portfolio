import React, { Component } from 'react'
//<img src={require(`${item.imageLink}`)} alt={item.name} className='project-image'/>
export class Contact extends Component {
    render() {
        return (
        <section className='contact'>
            <h2>Contact</h2>
            <a href='https://github.com/hernandez-crypto'><img src={require('./images/gitHub.svg')} alt='gitHubIcon' className='icon'/></a>
            <a href='https://www.linkedin.com/in/julio-hernandez-03853b163/'><img src={require('./images/linkedIn.png')} alt='linkedInIcon' className='icon'/></a>
            <a href='mailto:hernandezjulio58@ymail.com'><img src={require('./images/email.png')} alt='emailIcon' className='icon'/></a>
            <a href='tel:3312459841'><img src={require('./images/phone.png')} alt='phoneIcon' className='icon phone'/></a>
        </section>
        )
    }
}


export default Contact
