import React, { Component } from 'react';
const sectionStyle = {
  position: 'fixed',
  zIndex: '-100',
  bottom: '0',
  right: '0',
  minWidth: '100vw',
  minHeight: '100vh',
  objectFit: 'cover',
  backgroundSize: '100% 100%',
  WebkitFilter: 'grayscale(100%)',
  filter: 'invert(100%) saturate(5%) brightness(110%)',
};
class LandingVideo extends Component {
  render() {
    return (
      <video
        id='background-video'
        style={sectionStyle}
        width='100%'
        height='100%'
        loop
        autoPlay
      >
        <source src={require('./video/particles.mp4')} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    );
  }
}
export default LandingVideo;