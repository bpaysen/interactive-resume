import React from 'react';
import { Segment } from 'semantic-ui-react'


const profileSubText = {
	color: "#6d8687",
	margin: 80,
  	fontSize: 24,
  	padding: 0,
  	opacity: 0.7,

}


const profileSub =

	<Segment 
		className="profileSubText"
		basic
		textAlign='center'
		style={profileSubText}> 					 					
		<div className="cement">
		  <div className="cement__container">
		    <p className="cement__container__text">
		      I am
		    </p>
		    <ul className="cement__container__list">
		      <li className="cement__container__list__item"><i>a Front End</i> Developer</li>
		      <li className="cement__container__list__item">a <i>Full Stack</i> Engineer</li>
		      <li className="cement__container__list__item">an <i>Application</i> Developer</li>
		      <li className="cement__container__list__item">a <i>Software</i> Engineer</li>
		      <li className="cement__container__list__item">a <i>Classical Musician 🎶</i></li>
		    </ul>
		  </div>
		</div>
	</Segment>


export default profileSub;