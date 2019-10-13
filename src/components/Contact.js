import React, { Component } from 'react'

const sectionStyles = {
    backgroundColor:'#86C5D8',
    padding:'5vh 10vw',
    textAlign: 'center',
    border: '3px solid',
    borderRadius: '5px',
    margin:'0 auto',
    maxWidth: '1200px',
    marginBottom: '3vh',
}
const iconStyles = {
    width:'10vw',
    maxWidth: '250px',
    minWidth: '80px',
    padding:'0 2vw',
}
const itemStyles = {
    backgroundColor:'#F0F8FF',
    padding:'5vh 5vw',
    lineHeight: '2',
    border:'2px solid black',
    borderRadius: '3px',
    margin: '20px auto',
    maxWidth: '1000px',
  }

export class Contact extends Component {
    render() {
        return (
        <section id='contact' style={sectionStyles}>
            <h2>Contact</h2>
            <div style={itemStyles}>
            <a href='tel:3315559841'><img src={require('./images/phone.png')} alt='phoneIcon' className='icon phone' style={iconStyles}/></a>
                <a href='https://github.com/hernandez-crypto'><img src={require('./images/gitHub.svg')} alt='gitHubIcon' className='icon' style={iconStyles}/></a>
                <a href='https://www.linkedin.com/in/julio-hernandez-03853b163/'><img src={require('./images/linkedIn.png')} alt='linkedInIcon' className='icon' style={iconStyles}/></a>
                <a href='mailto:hernandezjulio58@ymail.com'><img src={require('./images/email.png')} alt='emailIcon' className='icon' style={iconStyles}/></a>
            </div>
        </section>
        )
    }
}


export default Contact
