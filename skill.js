// Skill.js

import React from 'react';
import PropTypes from 'prop-types';
import './Skill.css'; // Import your CSS file for styling (create this file next)

const Skill = ({ name, proficiency }) => {
  return (
    <div className="skill-item">
      <h3 className="skill-name">{name}</h3>
      <p className="skill-proficiency">Proficiency: {proficiency}</p>
    </div>
  );
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  proficiency: PropTypes.string.isRequired,
};

export default Skill;

// SkillsList.js

import React from 'react';
import Skill from './Skill';

const SkillsList = () => {
  // Define your skills array here
  const skills = [
    { name: 'JavaScript', proficiency: 'Advanced' },
    { name: 'React', proficiency: 'Intermediate' },
    { name: 'HTML', proficiency: 'Advanced' },
    { name: 'CSS', proficiency: 'Intermediate' },
    { name: 'Node.js', proficiency: 'Intermediate' },
    // Add more skills as needed
  ];

  return (
    <div>
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <Skill key={index} name={skill.name} proficiency={skill.proficiency} />
      ))}
    </div>
  );
}

export default SkillsList;

// EducationEntry.js

import React from 'react';
import PropTypes from 'prop-types';
import './EducationEntry.css'; // Import your CSS file for styling (create this file next)

const EducationEntry = ({ institution, degree, years }) => {
  return (
    <div className="education-entry">
      <h3 className="education-degree">{degree}</h3>
      <p className="education-institution">{institution}</p>
      <p className="education-years">{years}</p>
    </div>
  );
}

EducationEntry.propTypes = {
  institution: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  years: PropTypes.string.isRequired,
};

export default EducationEntry;

// EducationsList.js

import React from 'react';
import EducationEntry from './EducationEntry';

const EducationsList = () => {
  // Define your educations array here
  const educations = [
    { institution: 'University of ABC', degree: 'Bachelor of Science in Computer Science', years: '2015 - 2019' },
    { institution: 'XYZ College', degree: 'Associate Degree in Business Administration', years: '2012 - 2014' },
    // Add more educational backgrounds as needed
  ];

  return (
    <div>
      <h2>Educational Background</h2>
      {educations.map((education, index) => (
        <EducationEntry
          key={index}
          institution={education.institution}
          degree={education.degree}
          years={education.years}
        />
      ))}
    </div>
  );
}

export default EducationsList;
