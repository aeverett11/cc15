// Profile.js

import React from 'react';
import './Profile.css'; // Import your CSS file for styling (create this file next)

const Profile = () => {
  return (
    <div className="profile-container">
      <h2 className="profile-name">Your Name</h2>
      <p className="profile-bio">Brief Biography about yourself...</p>
      <div className="profile-contact">
        <p>Email: your-email@example.com</p>
        <p>LinkedIn: <a href="www.linkedin.com/in/ahmad-everett-b709662b2">Your LinkedIn Profile</a></p>
      </div>
    </div>
  );
}

export default Profile;

// ExperienceEntry.js

import React from 'react';
import PropTypes from 'prop-types';
import './ExperienceEntry.css'; // Import your CSS file for styling (create this file next)

const ExperienceEntry = ({ title, company, duration }) => {
  return (
    <div className="experience-entry">
      <h3 className="experience-title">{title}</h3>
      <p className="experience-company">{company}</p>
      <p className="experience-duration">{duration}</p>
    </div>
  );
}

ExperienceEntry.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default ExperienceEntry;
