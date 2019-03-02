import projects from '../data/projects.json';
import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component{
    render(){
        return(
            <div id="projects">
              <h1>My Projects</h1>
              <p>These are some of my projects</p>
                {projects.allProjects.map(result => {
                    return(
                        <div key={result.name} className='result'>
                            <Project title={result.title} imgName={result.imgName} description={result.description} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Projects;