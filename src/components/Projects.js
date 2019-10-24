import React, { Component } from 'react';
import projectList from './ProjectList';
import './components.css';
export class Projects extends Component {
  render() {
    return (
      <section id='prolst' className='sectionStyles'>
        <h2>Projects</h2>
        <div className='projectStyles'>
          {projectList.map((item) => {
            return (
              <div key={item.name} className='projectItemStyles'>
                <h3>{item.name}</h3>
                <img
                  src={require(`${item.imageLink}`)}
                  alt={item.name}
                  className='picStyles'
                />
                <hr />
                <p>{item.description}</p>
                {item.stack}
                <hr />
                <h4>Links</h4>
                <a
                  href={item.liveSite}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={require('./images/livesite.jpg')}
                    alt='Live Site'
                    className='projectsIcons'
                  />
                </a>
                <a
                  href={item.codeURL}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='site project'
                >
                  <img
                    src={require('./images/code.svg')}
                    alt='Code Site'
                    className='projectsIcons'
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
export default Projects;
