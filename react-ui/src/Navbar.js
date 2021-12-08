import React, {Component} from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "./actions/authActions";
import "./styles/navbarpage.css";

class Navbar extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
        return(
            <nav>
                <div className="nav-wrapper">
                <a href="#" className="brand-logo" style={{paddingLeft: "1rem"}}>Flock</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a className="waves-effect waves-light btn" onClick={this.onLogoutClick}>Logout {user.firstName + " " + user.lastName}</a></li>
                </ul>
                </div>
            </nav>
        )
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Navbar);