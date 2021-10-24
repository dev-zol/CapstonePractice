import React, { useState } from 'react';
import axios from 'axios';
import "./style/skeleton.css";
import { Link } from "react-router-dom";

// test

const login = () => {
    

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
        <Link to="/signup">
            <button variant="outlined">
            Sign up
            </button>
        </Link>
        <div className="container">
            <div className="row">
                <h1>Welcome to JayFlock</h1>
            </div>
            <form className="form" onSubmit={sendData}>
                <div className="row">
                    <div className="row">
                        <label htmlFor="name-input">User name</label>
                        <input className="half-width" type="text" name="name" value={state.name} onChange={onInputChange}/> 
                    </div>
                    <div className="row">
                        <label htmlFor="text-input">Password</label>
                        <input className="half-width" type="text" name="task" value={state.task} onChange={onInputChange}/>
                    </div>
                    <div className="row">
                        <input className="button-primary" type="submit" value="Submit" />
                    </div>
                </div> 
            </form> 
        </div>
    );
};

export default login