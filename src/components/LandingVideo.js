import React, { Component } from 'react'

class LandingVideo extends Component {
    render () {
        return (
            <video id="background-video" loop autoPlay>
                <source src={require('./video/spacevid.mp4')} type="video/mp4" width="x" height="y"/>
                Your browser does not support the video tag.
            </video>
        
        )
    }
};

export default LandingVideo;