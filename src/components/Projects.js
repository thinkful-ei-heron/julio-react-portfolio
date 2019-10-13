import React, { Component } from 'react'
import projectList from './ProjectList'

const picStyles = {
    width : "50vw",
}
let projectStyles = {
  backgroundColor:'grey',
  padding:'5vh 10vw',
  textAlign: 'center',
}
let itemStyles = {
  backgroundColor:'lightgrey',
  padding:'5vh 5vw',
  lineHeight: '2',
  border:'2px solid black',
  borderRadius: '15px',
  margin: '20px 0',
}



export class Projects extends Component {    
    render() {
    return (
    <section className='prolst' style={projectStyles}>
        <h2>Projects</h2>

        {projectList.map((item) => {
        
        return (
        <div key={item.name} style={itemStyles}>
            
            <h3>{item.name}</h3>
            <h4>{item.description}</h4>
            <img src={require(`${item.imageLink}`)} alt={item.name} style ={picStyles} className='project-image'/>
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
