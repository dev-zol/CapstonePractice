import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Survey = () => {


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
		return(
	<div id = "overallDiv">
		<form className="surveyForm" onSubmit={sendData}>

		<div id="DormContainer">
			<h4>Fill out survey to meet more students like you! in?</h4>
			
				<h2 id="DormQuestion">What Dorm are you in?</h2>
				<input type="checkbox" value="Kiewit"/>
				<label>Kiewit</label><br/>
				<input type="checkbox" value="Gallagher"/>
				<label>Gallagher</label><br/>
				<input type="checkbox" value="Swanson"/>
				<label>Swanson</label><br/>
				<input type="checkbox" value="McGloin"/>
				<label>McGloin</label><br/>
				<input type="checkbox" value="Kenefick"/>
				<label>Kenefick</label><br/>
				<input type="checkbox" value="Davis"/>
				<label>Davis</label><br/>
				<input type="checkbox" value="Opus"/>
				<label>Opus</label><br/>
	</div>
	<div id="HobbiesContainer">
				<h2 id="HobbieQuestion">What Hobbies do you enjoy or are interested in?</h2>
				<input type="checkbox" value="Reading"/>
				<label>Reading</label><br/>
				<input type="checkbox" value="Television"/>
				<label>Television</label><br/>
				<input type="checkbox" value="Collecting"/>
				<label>Collecting</label><br/>
				<input type="checkbox" value="Music"/>
				<label>Music</label><br/>
				<input type="checkbox" value="Gardening"/>
				<label>Gardening</label><br/>
				<input type="checkbox" value="Video Games"/>
				<label>Video Games</label><br/>
				<input type="checkbox" value="Fishing"/>
				<label>Fishing</label><br/>
				<input type="checkbox" value="Excersing"/>
				<label>Excersing</label><br/>
				<input type="checkbox" value="Watching Sports"/>
				<label>Watching Sports</label><br/>
				<input type="checkbox" value="Shopping"/>
				<label>Shopping</label><br/>
				<input type="checkbox" value="Travelling"/>
				<label>Travelling</label><br/>
				<input type="checkbox" value="Eating on Campus"/>
				<label>Eating on Campus</label><br/>
				<input type="checkbox" value="Eating off Campus"/>
				<label>Eating off Campus</label><br/>
				<input type="checkbox" value="Writing"/>
				<label>Writing</label><br/>
				<input type="checkbox" value="Walking"/>
				<label>Walking</label><br/>
				<input type="checkbox" value="Running"/>
				<label>Running</label><br/>
				<input type="checkbox" value="Volunteer Work"/>
				<label>Volunteer Work</label><br/>
				<input type="checkbox" value="Dancing"/>
				<label>Dancing</label><br/>
				<input type="checkbox" value="Painting"/>
				<label>Painting</label><br/>
				<input type="checkbox" value="Cooking"/>
				<label>Cooking</label><br/>
				<input type="checkbox" value="Bicycling"/>
				<label>Bicycling</label><br/>
				<input type="checkbox" value="Watching Movies"/>
				<label>Watching Movies</label><br/>
				<input type="checkbox" value="Watching Movies"/>
				<label>Watching Movies</label><br/>
				<input type="checkbox" value="Going to Church"/>
				<label>Going to Church</label><br/>
				<input type="checkbox" value="Socializing"/>
				<label>Socializing</label><br/>
				<input type="checkbox" value="Getting Coffee"/>
				<label>Getting Coffee</label><br/>
				<input type="checkbox" value="Hammocking"/>
				<label>Hammocking</label><br/>
				<input type="checkbox" value="Studying"/>
				<label>Studying</label><br/>
				<input type="checkbox" value="Water Sports"/>
				<label>Water Sports</label><br/>
		</div>

		<div id="SportsContainer">
			<h2 id="SportsQuestion">Do you like to play any sports or are you interested in learning?</h2>
			<input type="checkbox" value="MountainBiking"/>
			<label>Mountain Biking</label><br/>
			<input type="checkbox" value="Football"/>
			<label>Football</label><br/>
			<input type="checkbox" value="Golf"/>
			<label>Golf</label><br/>
			<input type="checkbox" value="Running"/>
			<label>Running</label><br/>
			<input type="checkbox" value="Tennis"/>
			<label>Tennis</label><br/>
			<input type="checkbox" value="Basketball"/>
			<label>Basketball</label><br/>
			<input type="checkbox" value="Baseball"/>
			<label>Baseball</label><br/>
			<input type="checkbox" value="Softball"/>
			<label>Softball</label><br/>
			<input type="checkbox" value="Soccer"/>
			<label>Soccer</label><br/>
			<input type="checkbox" value="Wrestling"/>
			<label>Wrestling</label><br/>
			<input type="checkbox" value="Rowing"/>
			<label>Rowing</label><br/>
			<input type="checkbox" value="Fencing"/>
			<label>Fencing</label><br/>
			<input type="checkbox" value="Martial Arts"/>
			<label>Martial Arts</label><br/>
			<input type="checkbox" value="Qudditch"/>
			<label>Quidditch</label><br/>
			<input type="checkbox" value="Curling"/>
			<label>Curling</label><br/>
			<input type="checkbox" value="Hockey"/>
			<label>Hockey</label><br/>
			<input type="checkbox" value="Volleyball"/>
			<label>Volleyball</label><br/>
			<input type="checkbox" value="Badminton"/>
			<label>Badminton</label><br/>
			<input type="checkbox" value="Swimming"/>
			<label>Swimming</label><br/>
			<input type="checkbox" value="Table Tennis"/>
			<label>Table Tennis</label><br/>
			<input type="checkbox" value="Rugby"/>
			<label>Rugby</label><br/>
			<input type="checkbox" value="Surfing"/>
			<label>Surfing</label><br/>
			<input type="checkbox" value="Skiing"/>
			<label>Skiing</label><br/>
			<input type="checkbox" value="Snowboarding"/>
			<label>Snowboarding</label><br/>
			<input type="checkbox" value="Skating"/>
			<label>Skating</label><br/>
			<input type="checkbox" value="Cricket"/>
			<label>Cricket</label><br/>
			<input type="checkbox" value="Equestrian"/>
			<label>Equestrian</label><br/>
			<input type="checkbox" value="Rock Climbing"/>
			<label>Rock Climbing</label><br/>
			<input type="checkbox" value="Figure Skating"/>
			<label>Figure Skating</label><br/>
			<input type="checkbox" value="Water Polo"/>
			<label>Water Polo</label><br/>
		</div> 

		<div id="IntrovertExtrovertContainer">
			<h2 id="IntrovertExtrovertQuestion">Where do you Fall in the Introversion-Extroversion Scale?</h2>
	  		<input type="range" min="1" max="10" value="2" class="slider"/>
	  		<p>Introvert Extrovert</p>
		</div> 

		<div id="CoreValueContainer">
			<h2 id="CoreValueQuestion">What are your Core Values?</h2>
			<input type="checkbox" value="Religion or Spirituality"/>
			<label>Religion or Spirituality</label><br/>
			<input type="checkbox" value="Family"/>
			<label>Family</label><br/>
			<input type="checkbox" value="Friends"/>
			<label>Friends</label><br/>
			<input type="checkbox" value="Social Justice"/>
			<label>Social Justice</label><br/>
			<input type="checkbox" value="Honesty"/>
			<label>Honesty</label><br/>
			<input type="checkbox" value="Passion"/>
			<label>Passion</label><br/>
			<input type="checkbox" value="Dependability"/>
			<label>Dependability</label><br/>
			<input type="checkbox" value="Loyalty"/>
			<label>Loyalty</label><br/>
			<input type="checkbox" value="Positivity"/>
			<label>Positivity</label><br/>
			<input type="checkbox" value="Optimism"/>
			<label>Optimism</label><br/>
			<input type="checkbox" value="Ambition"/>
			<label>Ambition</label><br/>
			<input type="checkbox" value="Communication"/>
			<label>Communication</label><br/>
			<input type="checkbox" value="Leadership"/>
			<label>Leadership</label><br/>
			<input type="checkbox" value="Compassion"/>
			<label>Compassion</label><br/>
			<input type="checkbox" value="Balance"/>
			<label>Balance</label><br/>
			<input type="checkbox" value="Kindness"/>
			<label>Kindness</label><br/>
			<input type="checkbox" value="Respectfulness"/>
			<label>Respectfulness</label><br/>
			<input type="checkbox" value="Integrity"/>
			<label>Integrity</label><br/>
			<input type="checkbox" value="Humility"/>
			<label>Humility</label><br/>
		</div>


		<div id="FriendContainer"> 
			<h2 id="FriendQuestion">What do you look for in a friend?</h2>
			<input type="checkbox" value="Dependability"/>
			<label>Dependability</label><br/>
			<input type="checkbox" value="Trustworthy"/>
			<label>Trustworthy</label><br/>
			<input type="checkbox" value="Loyalty"/>
			<label>Loyalty</label><br/>
			<input type="checkbox" value="Compassion"/>
			<label>Compassion</label><br/>
			<input type="checkbox" value="Respectfulness"/>
			<label>Restctfulness</label><br/>
			<input type="checkbox" value="Dedication"/>
			<label>Dedication</label><br/>
			<input type="checkbox" value="Communication"/>
			<label>Communication</label><br/>
			<input type="checkbox" value="Kindness"/>
			<label>Kindness</label><br/>
			<input type="checkbox" value="Optimism"/>
			<label>Optimism</label><br/>
			<input type="checkbox" value="Integrity"/>
			<label>Integrity</label><br/>
			<input type="checkbox" value="Responsibility"/>
			<label>Responsibility</label><br/>
			<input type="checkbox" value="Humility"/>
			<label>Humility</label><br/>
			<input type="checkbox" value="Fairness"/>
			<label>Fairness</label><br/>

		</div>	
			 <Link to="/Matches">
                <button variant="outlined">
                    Sumbit
                    </button>
            </Link>
		</form>	
	</div>
		);
}

	export default Survey; 