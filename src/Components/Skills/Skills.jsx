/*
import React from 'react';
import './Skills.css';
import htmlIcon from '../../assets/html.png';
import cssIcon from '../../assets/css.png';
import js from '../../assets/js.png';
import mysql from '../../assets/mysql.png';

import c from '../../assets/c.png';
import python from '../../assets/python.png';
import figma from '../../assets/figma.png';
import flutter from '../../assets/flutter.png';
import firebase from '../../assets/firebase.webp';


const skills = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'Javascript', icon: js },
  { name: 'MySql', icon: mysql },
  { name: 'C', icon: c },
  { name: 'Python', icon: python },
  { name: 'Figma', icon: figma },
  { name: 'Flutter', icon: flutter },
  { name: 'Firebase', icon: firebase }
];

const Skills = () => {
  return (
    <div id='skills' className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;*/
import React from 'react';
import './Skills.css';
import htmlIcon from '../../assets/html.png';
import cssIcon from '../../assets/css.png';
import js from '../../assets/js.png';
import mysql from '../../assets/mysql.png';

import c from '../../assets/c.png';
import python from '../../assets/python.png';
import figma from '../../assets/figma.png';
import flutter from '../../assets/flutter.png';
import firebase from '../../assets/firebase.webp';


const skills = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'Javascript', icon: js },
  { name: 'MySql', icon: mysql },
  { name: 'C', icon: c },
  { name: 'Python', icon: python },
  { name: 'Figma', icon: figma },
  { name: 'Flutter', icon: flutter },
  { name: 'Firebase', icon: firebase }
];

const Skills = () => {
  return (
    <div id='skills' className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;