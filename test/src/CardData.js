import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getData } from "./actions/dataActions";

import Card from './Card';

import bg0 from './assets/bg1.jpg'
import bg1 from './assets/bg2.jpg'
import bg2 from './assets/bg3.jpg'
import bg3 from './assets/bg4.jpg'

let userEmail = "";

class CardData extends Component {

  componentDidMount() {
    userEmail = this.props.auth.user.email;
    const rm = {
      reading: this.props.auth.user.reading,
      movies: this.props.auth.user.movies
    }
    this.props.getData(rm);
  }

  render() {
    const { data } = this.props.data;
    const listItems = Object.keys(data).map((key, index) => {

      const buildJSX =  <div className="col s12 m4">
                        <Card firstName={data[key]["firstName"]} lastName={data[key]["lastName"]} email={data[key]["email"]} key={key} bg={bg1} reading={data[key]["reading"]} movies={data[key]["movies"]} />
                        </div>

      if (data[key]["email"] === userEmail) {
        console.log("same")
      } else {
        return (buildJSX);
      }
    });
    return(
      <div className="row">
        {listItems}
      </div>
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