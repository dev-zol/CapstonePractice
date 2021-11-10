import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getData } from "./actions/dataActions";

class CardData extends Component {

  getFriends = event => {
    const rm = {
      reading: this.props.auth.user.reading,
      movies: this.props.auth.user.movies
    }

    event.preventDefault();
    this.props.getData(rm);
  }

  render() {
    const { data } = this.props.data;
    return(

      <button onClick={this.getFriends}>click</button>
       );
  }
};


CardData.propTypes = {
  getData: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  data: state.data
});
export default connect(
  mapStateToProps,
  { getData }
)(CardData);