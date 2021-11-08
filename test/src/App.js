import './App.css';
import React from 'react'
import Main from './Main.js';


import Card from "./Card.js"
import {dummydata} from "./dummydata";
import "./cardStyle.css";
//test
function App() {

	return (
		<div className="App">
			<Main />

		 {dummydata.map((person) => {
		 	return <Card {...person} />;
		 })}


			{dummydata.map((person, index) => {
				let position = index > 0 ? "nextCard" : index === 0 ? 
				"activeCard" : "prevCard";
				return <Card {...person} cardStyle={position} />;
			})}

		<div className="container">
			<div className="card-container"> /* wrap cards */
				{dummydata.map((person, index) => {
				let position =
				index > 0 ? "nextCard" : index === 0 ? 
				"activeCard" : "prevCard";
				return <Card {...person} cardStyle={position} />;
			})} 
			

			{dummydata.map((person, n, index) => {
    			let position = n > index ? "nextCard" 
        		: n === index ? "activeCard" : "prevCard";
    		return <Card {...person} cardStyle={position} />;
})}
				</div>
			</div>	
		</div>
		);
	}

	export default App;
