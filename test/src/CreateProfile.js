
import { Link, withRouter } from "react-router-dom";
import React, {Component} from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "./actions/authActions";
import classnames from "classnames";

let readingC = false;
let moviesC = false;

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
            movies: this.state.movies
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

    onMoviesChange = event => {
        if(moviesC == false) {
            moviesC = true
        } else {
            moviesC = false
        }
        this.setState({ movies: moviesC });
    }

    render() {
        const { errors } = this.state;
    return(
        <div className="container">
            <div className="row">
                <h1>Create your Profile</h1>
            </div>
            <form className="createProfileForm" noValidate onSubmit={this.sendData}>
                <div className="row">
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
                        <label htmlFor="userName">User Name</label>
                        <input className="" type="text" name="userName" />
                    </div>
                    <div className="row">
                        <label htmlFor="password">Password</label>
                        <span className="red-text">{errors.password}</span>
                        <input className={classnames("", {invalid: errors.password})} error={errors.password} type="password" id="password" name="password" value={this.state.password} onChange={this.onInputChange} />
                    </div>
                     <div className="row">
                        <label htmlFor="text-input">What are you most excited about this semester?</label>
                        <input className="" type="text"/>
                    </div>

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

                    </div>
                    <div className="row">
                        <button variant="outlined" type="submit">
                            Sign up
                        </button>
                    </div>
                </div> 
            </form> 
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