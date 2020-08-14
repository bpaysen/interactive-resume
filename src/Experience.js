import React from "react";
import "./App.css";
import {Grid, Segment, Icon, Responsive, Divider} from 'semantic-ui-react';



const experienceText = {
	color: "#6d8687",
  	fontSize: 60,
}
const experienceSubText = {
	color: "#b1cbcc",
  	fontSize: 26,
  	padding: 20,
  	opacity: 0.9
}
const expLine = {
	background: "#b1cbcc",
    width: 'auto',
    margin: 'auto',
    marginBottom: 60
}

const EducationBlock = {
	marginBottom: 20
}
const educationText = {
	color: "#6d8687",
  	fontSize: 32,
  	padding: 15,
  	marginTop: 20
}

const leftColText = {
	color: "Black",
  	fontSize: 14,
  	fontWeight: .3,
  	lineHeight: 1.2,
  	textAlign: 'left'
}
const rightColText = {
	color: "Black",
  	fontSize: 14,
  	fontWeight: .3,
  	lineHeight: 1.2,
  	textAlign: 'left'
}
const locIcon ={
	color: '#757b7d',
}
const linkStyle= {
	color: '#757b7d'
}


const Experience =
	<Grid centered columns={2}>

		<Grid.Row className="CareerRow" centered columns={2}>
			<Responsive as={Divider} style={expLine}></Responsive>		
			<Grid.Column>
			      <Segment 
					className="experienceText"
					basic 
					textAlign='left'
					style={educationText}
					>Career
				</Segment>

	  		</Grid.Column>
	  		<Grid.Column>
			    <Segment 
					className="experienceText"
					basic
					textAlign='left'
					style={educationText}><Icon name='world' size="small" />
				</Segment>
	  		</Grid.Column>
	  	</Grid.Row>

	  	<Grid.Row centered columns={2} style={EducationBlock}>		
			<Grid.Column>
			      <Segment 
					className="experienceText"
					basic 
					textAlign='left'
					style={leftColText}
					>
					<h3><b>Premier Wireless Solutions</b></h3>
					<p>June 2017 - Present</p>
				</Segment>

	  		</Grid.Column>
	  		<Grid.Column>
			    <Segment 
					className="experienceText"
					basic 
					textAlign='left'
					style={rightColText}
					>
					<h4><b>Service and Support Engineer<br/>Web Developer - Full Time</b></h4>
					<p className="experienceText"><Icon style={locIcon} name='code' size="small" /><span className="expDescription">Testing and Development </span><br/>
						Contributed UI/UX changes to a Ruby on Rails site that addressed safer and more secure IoT device provisioning.
						Expanded unit tests in Ruby, YAML, JavaScript, Active Record, MiniTest, RSpec, Simplecov and MySQL.
					</p>
					<p className="experienceText"><Icon style={locIcon} name='code' size="small" /><span className="expDescription">Automation </span><br/>
						Built automation scripts in Ruby and Python that reduced data-entry tasks by about 75%.
					</p>
					<p className="experienceText"><Icon style={locIcon} name='code' size="small" /><span className="expDescription">Telematics Engineering </span><br/>
						Built tracking programs for asset trackers in automotive, last-mile transportation (scooters and e-bikes) and other IoT.
					</p>
					<p className="experienceText"><Icon style={locIcon} name='code' size="small" /><span className="expDescription">Technical Support and Network Management </span><br/>
						Provided technical documentation, M2M provisioning, L3 support with expertise in network management, telecommunications and hardware for over 200K devices.
					</p>
					<p style={locIcon}><Icon name='map marker alternate' size="large" /><b> San Jose, CA</b></p>
				</Segment>
	  		</Grid.Column>
	  	</Grid.Row>
	  	<Grid.Row centered columns={2} style={EducationBlock}>		
			<Grid.Column>
			      <Segment 
					className="experienceText"
					basic 
					textAlign='left'
					style={leftColText}
					>
					<h3><b>Independent Web Developer</b></h3>
					<p>July 2014 - Present</p>
				</Segment>

	  		</Grid.Column>
	  		<Grid.Column>
			    <Segment 
					className="experienceText"
					basic 
					textAlign='left'
					style={rightColText}
					>
					<h4><b>Designer, Founder, Front End _, Application _, Software _ and Full Stack Developer</b></h4>
					<p className="experienceText"><span ><b>Projects:</b></span>
						
					</p>
					<p className="experienceText"><Icon style={locIcon} name='code' size="small" /><span className="expDescription">Hunger an Homelessness Project </span><br/>
						<span className="expTech"> Technologies:</span> Ruby on Rails, JavaScript, PostgreSQL, AWS S3.
						<h5 style={locIcon}><Icon name='map marker alternate' size="small" /><b> San Fransisco Bay Area</b></h5>
						<h5 style={locIcon}> <Icon name="sliders horizontal icon" size="small" /><b>Founder, Designer, Developer</b></h5>
					</p>
					<p className="experienceText"><Icon style={locIcon} name='code' size="small" /><span className="expDescription">Environmental HQ </span><br/>
						A periodical with curated articles and critical resources addressing our biggest threat of the century.
						<span className="expTech"> Technologies:</span> React.JS, JavaScript, Emotion, Semantic, Netlify, Firebase.
						<h5 style={locIcon}><Icon name='map marker alternate' size="small" /><b> San Fransisco Bay Area</b></h5>
						<h5 style={locIcon}> <Icon name="sliders horizontal icon" size="small" /><b>Founder, Designer, Developer</b></h5>
					</p>
					<p className="experienceText"><Icon style={locIcon} name='code' size="small" /><span className="expDescription">Industry-A-list </span><br/>
						A subscription website for connecting developers and entrepreneurs and investors. 
						<span className="expTech"> Technologies:</span> Ruby on Rails, JavaScript, SaSS, HTML, JQuery, SQLite, Stripe API.
						<h5 style={locIcon}><Icon name='map marker alternate' size="small" /><b> San Fransisco Bay Area</b></h5>
						<h5 style={locIcon}> <Icon name="sliders horizontal icon" size="small" /><b>Designer, Developer</b></h5>
					</p>
					

					<p className="experienceText"><Icon style={locIcon} name='code' size="small" /><span className="expDescription">Catch-of-the-Day </span><br/>
						A stateful React.Js website that displays a dynamic menu for a seafood restaurant, deployed using Firebase and a Node.Js backend.  
						<span className="expTech">Technologies:</span> React.JS and Firebase
						<h5 style={locIcon}><Icon name='map marker alternate' size="small" /><b> San Fransisco Bay Area</b></h5>
						<h5 style={locIcon}> <Icon name="linkify" size="small" /><b><a style={linkStyle} href="https://catch-of-the-day.bpaysen.now.sh/">Go To site</a></b></h5>
					</p>
				</Segment>
	  		</Grid.Column>
	  	</Grid.Row>
		<Grid.Row centered columns={2}>
			<Responsive as={Divider} style={expLine}></Responsive>		
			<Grid.Column>
			      <Segment 
					className="experienceText"
					basic 
					textAlign='left'
					style={educationText}
					>Education
				</Segment>

	  		</Grid.Column>
	  		<Grid.Column>
			    <Segment 
					className="experienceText"
					basic
					textAlign='left'
					style={educationText}><Icon name='graduation cap' size="small" />
				</Segment>
	  		</Grid.Column>
	  	</Grid.Row>

	  	<Grid.Row centered columns={2} style={EducationBlock}>		
			<Grid.Column>
			      <Segment 
					className="experienceText"
					basic 
					textAlign='left'
					style={leftColText}
					>
					<h3><b>Harvard University</b></h3>
					<p>January 2018 - March 2018</p>
				</Segment>

	  		</Grid.Column>
	  		<Grid.Column>
			    <Segment 
					className="experienceText"
					basic 
					textAlign='left'
					style={rightColText}
					>
					<h4><b>Course - Intro to Computer Science <i>CS50</i> ( <Icon name='certificate' color='brown' size='small'/>)</b></h4>
					<p>Program topics include: abstraction, algorithms, data structures, encapsulation, resource management,
					 security, software engineering, and web development. Languages include C, PHP, 
					 JavaScript, SQL, CSS, and HTML. Material inspired by real-world domains of biology, 
					 cryptography, finance, forensics, and gaming.
					</p>
					<p style={locIcon}><Icon name='map marker alternate' size="large" /><b> Online</b></p>
				</Segment>
	  		</Grid.Column>
	  	</Grid.Row>
		<Grid.Row centered columns={2} style={EducationBlock}>		
			<Grid.Column>
			      <Segment 
					className="experienceText"
					basic 
					textAlign='left'
					style={leftColText}
					>
					<h3><b>Rutgers University</b></h3>
					<p>September 2010 - June 2013</p>
				</Segment>

	  		</Grid.Column>
	  		<Grid.Column>
			    <Segment 
					className="experienceText"
					basic 
					textAlign='left'
					style={rightColText}
					>
					<h4><b>Doctorate - Music Performance (DMA)</b></h4>
					<p>Exceptional talent as a performer and the meeting of the School's technical standards,
					a high level and quality of training and musicianship, a capacity for sustained, disciplined practice, the personal maturity of spirit essential for ensemble work,
					broad and thoughtful interest in the world of music, including its historical traditions and contemporary trends, a clear dedication to artistic excellence,
					and a desire to exercise artistic leadership.
					</p>
					<p style={locIcon}><Icon name='map marker alternate' size="large" /><b> New Brunswick, NJ</b></p>
				</Segment>
	  		</Grid.Column>
	  	</Grid.Row>
	  		  	<Grid.Row centered columns={2} style={EducationBlock}>		
			<Grid.Column>
			      <Segment 
					className="experienceText"
					basic 
					textAlign='left'
					style={leftColText}
					>
					<h3><b>Khan Academy, Dartmouth College</b></h3>
					<p>January 2013 - March 2013</p>
				</Segment>

	  		</Grid.Column>
	  		<Grid.Column>
			    <Segment 
					className="experienceText"
					basic 
					textAlign='left'
					style={rightColText}
					>
					<h4><b>Course - Intro to Algorithms (Thomas Cormen and Devin Balkcom</b></h4>
					<p>Binary search, Asymptotic notation, Selection sort, Insertion sort, Recursive algorithms, Towers of Hanoi, Merge sort, 
					Quick sort, Graph representation. Breadth-first search.
					</p>
					<p style={locIcon}><Icon name='map marker alternate' size="large" /><b> Online</b></p>
				</Segment>
	  		</Grid.Column>
	  	</Grid.Row>
	  	<Grid.Row centered columns={2} style={EducationBlock}>		
			<Grid.Column>
			      <Segment 
					className="experienceText"
					basic 
					textAlign='left'
					style={leftColText}
					>
					<h3><b>Watch and Code</b></h3>
					<p>August 2016 - December 2016</p>
				</Segment>

	  		</Grid.Column>
	  		<Grid.Column>
			    <Segment 
					className="experienceText"
					basic 
					textAlign='left'
					style={rightColText}
					>
					<h4><b>Course - Practical JavaScript (Premium)</b></h4>
					<p>Mastering the building blocks of programming (functions, objects, and conditional logic) JavaScript, DOM manipulation, 
					Data Types, Event Listeners, Documentation, RegEx, Recursion, Test-Driven Development, Advanced software engineering topics.

					</p>
					<p style={locIcon}><Icon name='map marker alternate' size="large" /><b> Online</b></p>
				</Segment>
	  		</Grid.Column>
	  	</Grid.Row>
	  	<Grid.Row centered columns={2} style={EducationBlock}>		
			<Grid.Column>
			      <Segment 
					className="experienceText"
					basic 
					textAlign='left'
					style={leftColText}
					>
					<h3><b>The Complete Web Developer Bootcamp</b></h3>
					<p>August 2016 - December 2016</p>
				</Segment>

	  		</Grid.Column>
	  		<Grid.Column>
			    <Segment 
					className="experienceText"
					basic 
					textAlign='left'
					style={rightColText}
					>
					<h4><b>Course - Udemy by Rob Dey ( <Icon name='certificate' color='brown' size='small'/>)</b></h4>
					<p>Complete web development immersive course HTML, CSS, Javascript, HTTP Protocol, 
					jQuery, Ruby, Ruby on Rails, Git, E-Commerce with Stripe API, Servers, Heroku, Bootstrap, SQL Databases, 
					 Angular, Node.JS, CS Fundamentals, Test-Driven Development.
					</p>
					<p style={locIcon}><Icon name='map marker alternate' size="large" /><b> Online</b></p>
				</Segment>
	  		</Grid.Column>
	  	</Grid.Row>	  	
	</Grid>



export default Experience;