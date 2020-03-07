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
      <div className="container-fluid m-5">
        {/* <div className="landing-inner"> */}
          <h1 className="x-large text-center">
            <i className="fas fa-check-double"></i> CheckIN
          </h1>
          <br />
          <br />
          <h1 className="text-light">Live Life Spontaneously, Check In!</h1>
          <p className="text-dark">
            Whether it's at a Happy Hour, Coffee Shop, Lounge, or even a Museum,
            find people that you share interests with and meet them
            instantaneously!
          </p>
          </div>
        {/* </div> */}
        <Slider />

      
        <div className="container-fluid">
          <div className="icons row">
            {/* <img className="icon" src={Login} alt="login" />
            <img className="icon" src={Checkin} alt="checkin" />
            <img className="icon" src={Many} alt="many" />
            <img className="icon" src={Marker} alt="marker" /> */}
            <i class="fas fa-user-plus icon"></i>
            <i class="fas fa-check-double icon"></i>
            <i class="fas fa-users icon"></i>
            <i class="fas fa-map-marker icon"></i>
          </div>
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
