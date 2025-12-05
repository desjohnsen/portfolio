import React from 'react';
import todo from "../assets/images/todo.png";
import ProjectLayout from "../components/ProjectLayout"; 

const Project3 = () => {
  return (
    <ProjectLayout
      title="TODO"
      subtitle="A React app for managing tasks with React Router navigation and persistent state using localStorage."
      role="Developer"
      timeframe="1 week"
      tools="React + Vite"
    >
      <section id="overview" className="project-content">
        <h2>Overview</h2>
        <p>
          This school project involved building a multi-page Todo application in React using Vite. The app lets users add, view, manage, and complete tasks, with navigation handled via React Router and tasks persisted in localStorage. It also includes an About page, explaining how it helps users easily track their tasks and progress, whether for personal goals, shopping lists, or other daily activities.
        </p>
      </section>

      <section id="design" className="project-content">
        <h2>Design</h2>
        <p>
          The interface is clean and minimal, focusing on clarity and ease of use. Navigation is quick and intuitive, and the layout adapts smoothly to both desktop and mobile. The app is structured into separate, reusable components for the Todo list, individual items, and the form, keeping the code modular and maintainable.
        </p>
        <p>
          A celebratory animation appears when all tasks are completed, adding a playful touch and enhancing the overall user experience.
        </p>
        <div className="project-image-wrapper">
          <img src={todo} alt="todo app" className="project-image" />
        </div>
      </section>

      <section id="reflection" className="project-content">
        <h2>Reflection</h2>
        <p>
          This project helped me strengthen my React skills and improve my understanding of component structure, state management, and responsive design. It reinforced the importance of writing clean, maintainable code, while also giving me hands-on experience with React Router and localStorage for practical functionality.
        </p>
      </section>
      
      <div className="project-actions">
        <a
          href="https://desjohnsen-todo-app.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button primary"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/desjohnsen/todo-app"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button secondary"
        >
          GitHub Repo
        </a>
      </div>
    </ProjectLayout>
  );
};

export default Project3;
