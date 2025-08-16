import React from 'react';
import { useParams } from 'react-router-dom';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';



const Projects = () => {
  const { projectId } = useParams();

  switch (projectId) {
    case "1":
      return <Project1 />;
    case "2":
      return <Project2 />;
    case "3":
      return <Project3 />;
    case "4":
      return <Project4 />; 
    case "5":
      return <Project5 />;   
    default:
      return <div>Project not found.</div>;
  }
};

export default Projects;
