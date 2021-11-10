import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "./actions/authActions";

import Navbar from './Navbar'
import Card from './Card'
import CardData from './CardData'

import bg1 from './assets/bg1.jpg'
import bg2 from './assets/bg2.jpg'
import bg3 from './assets/bg3.jpg'
import bg4 from './assets/bg4.jpg'


class Dashboard extends Component {
render() {
return (    
      <div style={{width: "100%"}} className="container">
        <Navbar />
        <CardData />
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);