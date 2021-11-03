
import { Link } from "react-router-dom";
import axios from 'axios';
import React, {useState} from 'react';


  const CreateProfile = () => {
   
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


    return(
                   <div className="container">
            <div className="row">
                <h1>Create your Profile</h1>
            </div>
            <form className="createProfileForm" onSubmit={sendData}>
                <div className="row">
                    <div className="row">
                        <label htmlFor="name-input">First Name</label>
                        <input className="half-width" type="text" name="firstName" value={state.firstName} onChange={onInputChange}/> 
                    </div>
                    <div className="row">
                        <label htmlFor="text-input">Last Name</label>
                        <input className="half-width" type="text" name="lastName" value={state.lastName} onChange={onInputChange}/>
                    </div>
                    <div className="row">
                        <label htmlFor="text-input">Creighton email</label>
                        <input className="half-width" type="text" name="email" value={state.email} onChange={onInputChange}/>
                    </div>
                      <div className="row">
                        <label htmlFor="text-input">User Name</label>
                        <input className="half-width" type="text" name="userName" value={state.userName} onChange={onInputChange}/>
                    </div>
                    <div className="row">
                        <label htmlFor="text-input">Password</label>
                        <input className="half-width" type="text" name="password" value={state.password} onChange={onInputChange}/>
                    </div>
                     <div className="row">
                        <label htmlFor="text-input">What are you most excited about this semester?</label>
                        <input className="half-width" type="text" name="password" value={state.semester} onChange={onInputChange}/>
                    </div>
                    <div className="row">
                      <Link to="/Survey">
                        <button variant="outlined">
                            Sign up
                        </button>
                     </Link>
                    </div>
                </div> 
            </form> 
        </div>
    );
  }
  export default CreateProfile; 