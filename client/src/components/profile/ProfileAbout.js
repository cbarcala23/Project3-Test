import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    status,
    company,
    location,
    skills,
    user: { name }
  }
}) => {
  return (
    <div class="profile-about bg-light p-2">
      {bio && (
        <Fragment>
          <h2 class="text-primary">Bio</h2>
          <p className="mb-2">{bio}</p>
          <p>I identify as {status}</p>
          <p>I am originally from {location}</p>
        </Fragment>
      )}

      <div class="line"></div>
      <h2 class="text-primary">Hobbies</h2>
      <div class="skills">
        {skills.map((skill, index) => (
          <div key={index} className="p-1">
            <i className="fas fa-star"></i> {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
