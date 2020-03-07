import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/map">Map</Link>
      </li>
      {/* <li>
        <Link to="/profiles">Browse CheckIN Users</Link>
      </li> */}
      <li>
        <Link to="/dashboard">
          <i className="fas fa-cog" />{" "}
          <span className="hide-sm">Profile</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/map" className="nav-item nav-link text-dark">Map</Link>

      </li>
      {/* <li>
        <Link to="/profiles">Browse CheckIN Users</Link>
      </li> */}
      <li>
        <Link to="/login" className="nav-item nav-link text-dark">Login</Link>
      </li>
      <li>
        <Link to="/register"><button className="btn btn-primary">Signup</button></Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-light">
      <h1>
        <Link to="/">
          <span className="text-dark"><i className="fas fa-check-double"></i> CheckIN</span>
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
