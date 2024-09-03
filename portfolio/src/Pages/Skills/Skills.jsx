import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <h2>Technical Skills</h2>
      <h3>Programming Languages</h3>
      <ul>
        <li>Python</li>
        <li>Javascript</li>
        <li>Java</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      <h3>Frameworks and Libraries</h3>
      <ul>
        <li>React</li>
        <li>Nest</li>
        <li>Tailwind</li>
        <li>Bootstrap</li>
        <li>Bulma</li>
      </ul>
      <h3>Databases</h3>
      <ul>
        <li>MongoDB</li>
        <li>PostgresSQL</li>
        <li>MySQL</li>
      </ul>
      <h3>Tools</h3>
      <ul>
        <li>Git</li>
        <li>Docker</li>
      </ul>
    </div>
  );
};

export default Skills;
