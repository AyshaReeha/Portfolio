import React from 'react';
import './Project.css';

const projects = [
  {
    title: 'Disease Predictor using ML',
    description: 'A machine learning-based project that predicts Diabetes, Heart Disease, and Parkinson’s Disease.',
    tools:'usingPython,scikit-learn,numpy,streamlit',
    image: 'https://assets.skyfilabs.com/images/blog/20-best-c-programming-projects-for-beginners.webp', // Replace with your image URL
    demoLink: 'https://disease-out-break-prediction.streamlit.app/',
    codeLink: 'https://github.com/AyshaReeha/disease_prediction-project',
  },
  {
    title: 'MindEase',
    description: 'A student-focused mental well-being app designed to provide easy access to counseling, anonymous thought sharing, and stress relief tips & games. ',
    image: 'https://assets.skyfilabs.com/images/blog/20-best-c-programming-projects-for-beginners.webp',
    tools:'using nodejs,javascript,css,html,mogodb',
    demoLink: 'github.com/Aysha022/MindEase',
  
    codeLink: 'https://github.com/AyshaReeha/MindEase',
  },
  {
    title: 'weathercheck_project',
    description: 'A simple and responsive weather app that shows real-time weather data like temperature, humidity, and conditions using the OpenWeatherMap API.',
    image: 'https://assets.skyfilabs.com/images/blog/20-best-c-programming-projects-for-beginners.webp',
    tools:'using html,css and javascript',
    demoLink: '#',
    codeLink: 'https://github.com/AyshaReeha/Weathercheck_Project',
  },
  
    
  {
    title: 'Todo-List',
    description: 'A minimal web app to add, track, and manage daily tasks with a clean and user-friendly interface.',
    image: 'https://assets.skyfilabs.com/images/blog/20-best-c-programming-projects-for-beginners.webp',
    tools:'using html,css and javascript',
    demoLink: '#',
    codeLink: 'https://github.com/AyshaReeha/Todo_list-project',
  },
  {
  title: 'GesturePlay',
    description: 'Gesture Play is a recovery-focused game that uses hand gestures to help improve mobility and coordination through fun, interactive gameplay.',
    image: 'https://assets.skyfilabs.com/images/blog/20-best-c-programming-projects-for-beginners.webp',
    tools:'using python,Pygame,MediaPipe,OpenCV, NumPy',
    demoLink: '#',
    codeLink: 'https://github.com/AyshaReeha/Weathercheck_Project',
  },
];

const Projects = () => {
  return (
    <div id='project' className="projects-section">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.tools}</p>
            <div className="buttons">
              <a href={project.demoLink} target="_blank" rel="noreferrer">Demo</a>
              <a href={project.codeLink} target="_blank" rel="noreferrer">Source Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
