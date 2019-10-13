import React, { Component } from 'react'
import './index.css'


export class Bio extends Component {
    render() {
        return (
            <section id='bio' className='sectionStyles'>
                <h2>About Me</h2>
                <div className='itemStyles'>
                    <h4>Hey there! I’m glad you’ve found my page. 
                        My name is Julio Cesar Hernandez, but you can call me Julius 
                        Caesar if you’d like. I’m an up and coming web dev/software 
                        engineer who’s learning the basics at Thinkful’s Engineering 
                        Immersion Program. In my free time, I exercise and play sports. 
                        I don’t necessarily watch them, but I love moving around; you 
                        can catch me running around the block at 6 in the morning on 
                        my Rocky Balboa sh…Recently, I moved across the country from 
                        Chicago to LA to pursue my ambitions. I’m one step closer to 
                        the tech hub and I also don’t have to drive through 2 feet of 
                        snow in a Honda. I’ve always been a person that loves to solve 
                        problems. In high school, I took the highest level math classes 
                        my school had to offer, which were Calc BC & Stats. I love growing 
                        and I’d love if you gave me the opportunity to grow with you!</h4>
                </div>
            </section>
        )
    }
}

export default Bio
