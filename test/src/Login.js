import { Link } from "react-router-dom";
import React, {Component} from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "./actions/authActions";
import classnames from "classnames";


// test

class Login extends Component {
    constructor() {
        super();
        this.state = {
          email: "",
          password: "",
          errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
    }

    sendData = event => {
        event.preventDefault();
        
        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
    };

    onInputChange = event => {
        event.preventDefault();
        this.setState({ [event.target.id]: event.target.value });
    };


    render() {
        const { errors } = this.state;
    return (
        <div className="container">
            <div className="row">
                <h1>Welcome to JaysFlock</h1>
            </div>
            <form className="loginForm" noValidate onSubmit={this.sendData}>
                <div className="row">
                    <div className="input-field col s12">
                        <label htmlFor="email">Email</label>
                        <span className="red-text"> {errors.email}{errors.emailnotfound}</span>
                        <input className={classnames("", {invalid: errors.email || errors.emailnotfound})} error={errors.email} type="text" id="email" name="email" value={this.state.email} onChange={this.onInputChange} /> 
                    </div>
                    <div className="input-field col s12">
                        <label htmlFor="password">Password</label>
                        <span className="red-text"> {errors.password}{errors.passwordincorrect}</span>
                        <input className={classnames("", {invalid: errors.password || errors.passwordincorrect})} error={errors.password} type="password" id="password" name="password" value={this.state.password} onChange={this.onInputChange} />
                    </div>
                    <div className="">
                        <button variant="outlined" className="btn btn-large waves-effect waves-light hoverable blue accent-3" type="submit">
                            Log in
                        </button>
                     <p> If you do not already have an account </p> 
                     <Link to="/CreateProfile"> 
                        Sign Up!
                    </Link>
                    </div>
                </div> 
            </form> 
        </div>
    );
};
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);