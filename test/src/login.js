import React, { useState } from 'react';
import axios from 'axios';
import "./style/skeleton.css";
import { Link } from "react-router-dom";

import CreateProfile from './createProfile';

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
            <form className="form" onSubmit={sendData}>
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
                      <Link to="/CreateProfile">
                        <button variant="outlined">
                            Sign up
                        </button>
                     </Link>
                    </div>
                </div> 
            </form> 
        </div>
    );
};

export default Login