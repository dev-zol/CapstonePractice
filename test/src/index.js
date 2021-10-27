import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './ReportWebVitals';
import { BrowserRouter } from 'react-router-dom';

//import { Link } from "react-router-dom";

ReactDOM.render((
   <BrowserRouter basename="/">
    <App /> 
  </BrowserRouter>
  ), document.getElementById('root')
);

//<Link to= "/CreateProfile"/>
//<Link to= "/ReturningUser"/>
//<Link to= "/Survey"/>
//<Link to= "/Matches"/>
//<Link to= "/Messaging"/>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
