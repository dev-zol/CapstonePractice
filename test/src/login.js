import "./style/skeleton.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import React, {useState} from 'react';

import CreateProfile from './CreateProfile';

// test

const Login = () => {
    
    const [state, setState] = useState({
        name: '',
        task: ''
      });
    const [result, setResult] = useState(null);
    const sendData = event => {
        event.preventDefault();
        axios
            .post('/send', { ...state })
            .then(response => {
            setResult(response.data);
            setState({ name: '', task: ''});
            })
            .catch(() => {
            setResult({ success: false, message: 'Something went wrong. Try again later'});
            });
    };
    const onInputChange = event => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        });
    };
    
    return (
        <div className="container">
            <div className="row">
                <h1>Welcome to JaysFlock</h1>
            </div>
            <form className="loginForm" onSubmit={sendData}>
                <div className="row">
                    <div className="row">
                        <label htmlFor="name-input">Username</label>
                        <input className="half-width" type="text" name="userName" value={state.userName} onChange={onInputChange}/> 
                    </div>
                    <div className="row">
                        <label htmlFor="text-input">Password</label>
                        <input className="half-width" type="text" name="password" value={state.password} onChange={onInputChange}/>
                    </div>
                    <div className="row">
                      <Link to="/ReturningUser">
                        <button variant="outlined">
                            Log in
                        </button>
                     </Link>

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
export default Login