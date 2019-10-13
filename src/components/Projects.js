import React, { Component } from 'react'
import projectList from './ProjectList'
import './index.css'
export class Projects extends Component {    
    render() {
    return (
    <section id='prolst' className='sectionStyles'>
        <h2>Projects</h2>

        {projectList.map((item) => {
        
        return (
        <div key={item.name} className='itemStyles'>
            
            <h3>{item.name}</h3>
            <img src={require(`${item.imageLink}`)} alt={item.name} className='picStyles'/>
            <h4>{item.description}</h4>
            <h4>Stack : {item.stack}</h4>
            <h4>Links : <a href={item.liveSite} target="_blank" rel="noopener noreferrer">Live Site</a> | <a href={item.codeURL} target="_blank" rel="noopener noreferrer" className='site project'>Code</a></h4>
            
        </div> 
        )}

      )}
    
    </section>
    );
  }
}

export default Projects
