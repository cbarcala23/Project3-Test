import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Slider from "../Slider";
import Checkin from "../../img/icons/icons/checkin.png";
import Login from "../../img/icons/icons/login.png";
import Many from "../../img/icons/icons/many.png";
import Marker from "../../img/icons/icons/marker.png";

// Prevents you to go back to Landing page if logged in
const Landing = ({ isAuthenticated }) => {
  // if (isAuthenticated) {
  //   return <Redirect to="/dashboard" />;
  // }

  return (
    <section className="landing">
      <div className="dark-overlay">

        <div className="landing-inner">
          <Slider />
          <div className="line">
          <h1 className="x-large">
            <i className="fas fa-check-double"></i> CheckIN
          </h1>
          <br />
          <br />
          <h1 className="large">Live Life Spontaneously, Check In!</h1>
          <p className="lead">
            Whether it's at a Happy Hour, Coffee Shop, Lounge, or even a Museum,
            find people that you share interests with and meet them
            instantaneously!
          </p>

          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>

        </div>        
      

        <div className="icons row">
          <img className="icon" src={Login} alt="login" />
          <img className="icon" src={Checkin} alt="checkin" />
          <img className="icon" src={Many} alt="many" />
          <img className="icon" src={Marker} alt="marker" />
        </div>

        <div className="footer">
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          </div>
</div>
          </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
