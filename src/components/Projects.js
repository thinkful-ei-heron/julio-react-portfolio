import React, { Component } from 'react'
import projectList from './ProjectList'

export class Projects extends Component {    
    render() {
    return (
      
    <ul>
        {projectList.map((item) => {
        return (
        <section className='prolst' key={item.name}>
            <li>
            <h2>{item.name}</h2>
            <h3>{item.description}</h3>
            <img src={require(`${item.imageLink}`)} alt={item.name} className='project-image'/>
            <h3>Links : <a href={item.liveSite} target="_blank" rel="noopener noreferrer">Live Site</a> | <a href={item.codeURL} target="_blank" rel="noopener noreferrer">Code</a></h3>
            <h3>{item.stack}</h3>
            </li>
        </section> 
        )}
      )}
      </ul>
    );
  }
}

export default Projects
