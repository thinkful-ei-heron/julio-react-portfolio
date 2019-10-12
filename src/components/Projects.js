import React, { Component } from 'react'
import projectList from './ProjectList'

export class Projects extends Component {    
    render() {
    return (
      projectList.map((item) => 
        <section>
            <h2>{item.name}</h2>
            <h3>{item.description}</h3>
            <h3><a href={item.liveSite} target="_blank" rel="noopener noreferrer">Live Site</a> | <a href={item.codeURL} target="_blank" rel="noopener noreferrer">Code</a></h3>
            <h3>{item.stack}</h3>
        </section>
      )     
    )
  }
}

export default Projects
