import React, {Components} from 'react';
import { Grid, Responsive, Divider, Image, Segment, Button, Icon } from 'semantic-ui-react';
import {LeftSkills, RightSkills} from './Components/Skills'


const abilitesText = {
	color: "#6d8687",
  	fontSize: 60,
}
const experienceSubText = {
	color: "#b1cbcc",
  	fontSize: 26,
  	padding: 20,
  	opacity: 0.9
}

const skillsLine = {
	background: "#b1cbcc",
    width: 800,
    margin: 'auto',
    marginBottom: 60
}

const skillsText = {
	color: "#6d8687",
  	fontSize: 32,
  	padding: 15,
  	marginTop: 20,
  	textAlign: 'left'
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
  	fontWeight: .9,
  	lineHeight: 1.5,
  	textAlign: 'left'
}
const rightColText ={
	color: "Black",
  	fontSize: 14,
  	fontWeight: .9,
  	lineHeight: 1.5,
  	textAlign: 'left'
}
const locIcon ={
	color: '#757b7d',
}

const expDescription = {
	color: '#6d8687'
}

const Abilities = 

	<Grid stackable centered columns={3}>
		<Grid.Row centered columns={2}>
		    <Responsive as={Divider} style={skillsLine}> </Responsive>
			<Grid.Column>
				<Segment 
					className="abilitesText"
					basic 
					textAlign='left'
					style={skillsText}
					>Skills
				</Segment>

	  		</Grid.Column>
	  		<Grid.Column>
			    <Segment 
					className="abilitesText"
					basic
					textAlign='left'
					style={skillsText}><Icon name='wrench' size="small" />
				</Segment>
	      	</Grid.Column>
		</Grid.Row>

		<Grid.Row centered columns={2} style={EducationBlock}>		
			<Grid.Column>
			      <Segment 
					className="abilitesText"
					basic 
					textAlign='left'
					style={leftColText}
					>
					<LeftSkills />
				</Segment>

	  		</Grid.Column>
	  		<Grid.Column>
			    <Segment 
					className="abilitesText"
					basic 
					textAlign='left'
					style={rightColText}
					>
					<RightSkills />
				</Segment>
			</Grid.Column>
		</Grid.Row>
	</Grid>						

export default Abilities;