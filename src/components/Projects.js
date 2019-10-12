import React, { Component } from 'react'
import projectList from './ProjectList'

export class Projects extends Component {    
    render() {
    return (
    <section className='prolst'>
    
        <h2>Projects</h2>
        {projectList.map((item) => {
        return (
        <div key={item.name}>
            
            <h3>{item.name}</h3>
            <h4>{item.description}</h4>
            <img src={require(`${item.imageLink}`)} alt={item.name} className='project-image'/>
            <h4>Links : <a href={item.liveSite} target="_blank" rel="noopener noreferrer">Live Site</a> | <a href={item.codeURL} target="_blank" rel="noopener noreferrer">Code</a></h4>
            <h4>{item.stack}</h4>
            
        </div> 
        )}
      )}
    
    </section>
    );
  }
}

export default Projects
