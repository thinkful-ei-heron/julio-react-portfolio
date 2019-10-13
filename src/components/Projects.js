import React, { Component } from 'react'
import projectList from './ProjectList'

const picStyles = {
    width : "50vw",
    maxWidth: '300px',
}
let projectStyles = {
  backgroundColor:'#86C5D8',
  padding:'5vh 10vw',
  textAlign: 'center',
  border: '3px solid',
  borderRadius: '5px',
  margin:'0 auto',
  maxWidth: '1200px',
  marginBottom: '3vh',
}
let itemStyles = {
  backgroundColor:'#F0F8FF',
  padding:'5vh 5vw',
  lineHeight: '2',
  border:'2px solid black',
  borderRadius: '3px',
  margin: '20px auto',
  maxWidth: '1000px',
}



export class Projects extends Component {    
    render() {
    return (
    <section id='prolst' style={projectStyles}>
        <h2>Projects</h2>

        {projectList.map((item) => {
        
        return (
        <div key={item.name} style={itemStyles}>
            
            <h3>{item.name}</h3>
            <img src={require(`${item.imageLink}`)} alt={item.name} style ={picStyles}/>
            <h4>{item.description}</h4>
            <h4>Stack : {item.stack}</h4>
            <h4>Links : <a href={item.liveSite} target="_blank" rel="noopener noreferrer" >Live Site</a> | <a href={item.codeURL} target="_blank" rel="noopener noreferrer" className='site project'>Code</a></h4>
            
        </div> 
        )}

      )}
    
    </section>
    );
  }
}

export default Projects
