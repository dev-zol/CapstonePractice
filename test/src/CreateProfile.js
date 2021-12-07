
import { Link, withRouter } from "react-router-dom";
import React, {Component} from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "./actions/authActions";
import classnames from "classnames";
import "./styles/createprofile.css";
import Newnavylogo from "./assets/Newnavylogo.svg"
import './styles/createprofile.css';

let readingC = false;
let moviesC = false;
let sportsC = false;
let musicC = false;
let gamingC = false;

class CreateProfile extends Component {
    constructor() {
        super();
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          reading: false,
          movies: false,
          sports: false,
          music: false,
          gaming: false,
          errors: {}
        };
    }
   
    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
    }
    
    sendData = event => {
        event.preventDefault();
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            reading: this.state.reading,
            movies: this.state.movies,
            sports: this.state.sports,
            music: this.state.music,
            gaming: this.state.gaming
        }
        console.log(newUser);
        this.props.registerUser(newUser, this.props.history); 
    };

    onInputChange = event => {
        event.preventDefault();
        this.setState({ [event.target.id]: event.target.value });
    };

    onReadingChange = event => {
        if(readingC == false) {
            readingC = true
        } else {
            readingC = false
        }

        this.setState({reading: readingC});
    }

    nextPage = event => {
        event.preventDefault();
        let a = document.getElementById("data").hidden = true;
        let b = document.getElementById("survey").hidden = false;
    }

    backPage = event => {
        event.preventDefault();
        let a = document.getElementById("data").hidden = false;
        let b = document.getElementById("survey").hidden = true;
    }

    onMoviesChange = event => {
        if(moviesC == false) {
            moviesC = true
        } else {
            moviesC = false
        }
        this.setState({ movies: moviesC });
    }

    onSportsChange = event => {
        if(sportsC == false) {
            sportsC = true
        } else {
            sportsC = false
        }
        this.setState({ sports: sportsC });
    }

    onMusicChange = event => {
        if(musicC == false) {
            musicC = true
        } else {
            musicC = false
        }
        this.setState({ music: musicC });
    }

    onGamingChange = event => {
        if(gamingC == false) {
            gamingC = true
        } else {
            gamingC = false
        }
        this.setState({ gaming: gamingC });
    }

    render() {
        const { errors } = this.state;
    return(
        <div className="container">
            <div className="row">
                <h1 className = "dark-blue">Create your Profile</h1>
            </div>
            <form className="createProfileForm" noValidate onSubmit={this.sendData}>
                <div className="row">
                    <div id="data">

                        <div className="row">
                            <label htmlFor="firstName">First Name</label>
                            <span className="red-text">{errors.firstName}</span>
                            <input className={classnames("", {invalid: errors.firstName})} error={errors.firstName} type="text" id="firstName" name="firstName" value={this.state.firstName} onChange={this.onInputChange} /> 
                        </div>
                        <div className="row">
                            <label htmlFor="lastName">Last Name</label>
                            <span className="red-text">{errors.firstName}</span>
                            <input className={classnames("", {invalid: errors.lastName})} error={errors.lastName} type="text" id="lastName" name="lastName" value={this.state.lastName} onChange={this.onInputChange} />
                        </div>
                        <div className="row">
                            <label htmlFor="email">Creighton email</label>
                            <span className="red-text">{errors.email}</span>
                            <input className={classnames("", {invalid: errors.email})} error={errors.email} type="email" id="email" name="email" value={this.state.email} onChange={this.onInputChange} />
                        </div>
                        <div className="row">
                            <label htmlFor="password">Password</label>
                            <span className="red-text">{errors.password}</span>
                            <input className={classnames("", {invalid: errors.password})} error={errors.password} type="password" id="password" name="password" value={this.state.password} onChange={this.onInputChange} />
                        </div>
                        <div className="row">
                            <button variant="outlined" id="nextbtn" className="btn btn-large waves-effect waves-light hoverable blue accent-3" onClick={this.nextPage}>Next</button>
                        </div>
                    </div>
                    <div id="survey" hidden>
                        <div className="row">
                            <h4>What hobbies do you enjoy?</h4>
                            
                            <div className="row">
                                <label>
                                    <input type="checkbox"id="reading" onChange={this.onReadingChange}/>
                                    <span> Reading </span>
                                </label>
                            </div>

                            <div className="row">
                                <label>
                                    <input type="checkbox" id="movies" onChange={this.onMoviesChange} />
                                    <span> Movies </span>
                                </label>
                            </div>

                            <div className="row">
                                <label>
                                    <input type="checkbox" id="sports" onChange={this.onSportsChange} />
                                    <span> Sports </span>
                                </label>
                            </div>

                            <div className="row">
                                <label>
                                    <input type="checkbox" id="music" onChange={this.onMusicChange} />
                                    <span> Music </span>
                                </label>
                            </div>

                            <div className="row">
                                <label>
                                    <input type="checkbox" id="gaming" onChange={this.onGamingChange} />
                                    <span> Gaming </span>
                                </label>
                            </div>

                            <div className="row">
                            <button variant="outlined" id="nextbtn" className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{marginRight: "2rem"}} onClick={this.backPage} >Back</button>
                                <button variant="outlined" id="btn" className="btn btn-large waves-effect waves-light hoverable blue accent-3" type="submit">
                                Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div> 
            </form> 
            <div className="imgDiv">
                    <img src={Newnavylogo}/>
                </div>
        </div>
        
    );
  }
}

CreateProfile.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(CreateProfile));