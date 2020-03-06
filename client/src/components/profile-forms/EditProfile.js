import React, { useState, Fragment, useEffect } from "react";
// withRouter allows us to use 'history' parameter
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const initialState = {
  company: "",
  website: "",
  location: "",
  status: "",
  skills: "",
  githubusername: "",
  bio: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  youtube: "",
  instagram: ""
};

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState(initialState);

  // to toggle and show social media form input fields
  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  // useEffect(() => {
  //   getCurrentProfile();

  //   setFormData({
  //     company: loading || !profile.company ? "" : profile.company,
  //     website: loading || !profile.website ? "" : profile.website,
  //     location: loading || !profile.location ? "" : profile.location,
  //     status: loading || !profile.status ? "" : profile.status,
  //     skills: loading || !profile.skills ? "" : profile.skills,
  //     githubusername:
  //       loading || !profile.githubusername ? "" : profile.githubusername,
  //     bio: loading || !profile.bio ? "" : profile.bio,
  //     twitter: loading || !profile.twitter ? "" : profile.twitter,
  //     facebook: loading || !profile.facebook ? "" : profile.facebook,
  //     linkedin: loading || !profile.linkedin ? "" : profile.linkedin,
  //     youtube: loading || !profile.youtube ? "" : profile.youtube,
  //     instagram: loading || !profile.instagram ? "" : profile.instagram
  //   });
  // }, [loading, getCurrentProfile]);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      // for (const key in profile.social) {
      //   if (key in profileData) profileData[key] = profile.social[key];
      // }
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className="">Edit Your Profile</h1>
      <p className="lead">
        Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className="form p-1 pb-4" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <select className="form-control" name="status" value={status} onChange={e => onChange(e)}>
            <option value="0">* Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
            {/* <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option> */}
          </select>
          <small className="form-text">
            Unicorns and snowflakes welcome!
          </small>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Education"
            name="company"
            value={company}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
          What is your education level?
          </small>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Pets"
            name="website"
            value={website}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
          Do you have any pets? (If so, what kind?)
          </small>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Hometown"
            name="location"
            value={location}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="* Hobbies"
            name="skills"
            value={skills}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
          Please use comma separated values (eg. Biking, Hiking, Sleeping, Eating)
          </small>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Favorite food"
            name="githubusername"
            value={githubusername}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
          What is your favorite food?
          </small>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={e => onChange(e)}
          ></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        {/* <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        If you click social media button it shows the following divs in the fragment
        {displaySocialInputs && (
          <Fragment>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x"></i>
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x"></i>
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x"></i>
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x"></i>
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x"></i>
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>
          </Fragment>
        )} */}

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

// withRouter to pass history
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
