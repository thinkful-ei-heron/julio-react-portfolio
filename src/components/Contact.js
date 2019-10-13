import React, { Component } from 'react'

const sectionStyles = {
    backgroundColor:'grey',
    padding:'5vh 10vw',
    textAlign: 'center',
}
const iconStyles = {
    width:'10vw',
    padding:'0 2vw',
}
const itemStyles = {
    backgroundColor:'lightgrey',
    padding:'5vh 5vw',
    lineHeight: '2',
    border:'2px solid black',
    borderRadius: '15px',
    margin: '20px 0',
  }

export class Contact extends Component {
    render() {
        return (
        <section className='contact' style={sectionStyles}>
            <h2>Contact</h2>
            <div style={itemStyles}>
                <a href='https://github.com/hernandez-crypto'><img src={require('./images/gitHub.svg')} alt='gitHubIcon' className='icon' style={iconStyles}/></a>
                <a href='https://www.linkedin.com/in/julio-hernandez-03853b163/'><img src={require('./images/linkedIn.png')} alt='linkedInIcon' className='icon' style={iconStyles}/></a>
                <a href='mailto:hernandezjulio58@ymail.com'><img src={require('./images/email.png')} alt='emailIcon' className='icon' style={iconStyles}/></a>
                <a href='tel:3312459841'><img src={require('./images/phone.png')} alt='phoneIcon' className='icon phone' style={iconStyles}/></a>
            </div>
        </section>
        )
    }
}


export default Contact
