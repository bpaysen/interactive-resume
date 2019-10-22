import React from 'react';
import profileImg from './ProfileImg.jpg';
import { Grid, Responsive, Divider, Image, Segment, Menu, Button, Icon } from 'semantic-ui-react';
import SocialFollow from "./SocialFollow";


const profileBorder = {
	borderStyle: "double",
	borderWidth: 10,
	borderColor: "#b1cbcc",
	padding:0,
}

const profileLine = {
	background: "#b1cbcc",
    width: 800,
    margin: 'auto',
    marginBottom: 60
}

const AboutMeText = {
	fontSize: 32,
	color: "#b1cbcc",
	fontWeight: 1,
	textAlign: 'left'
}

const AboutMeSubText = {
	lineHeight: 1.8,
	textAlign: 'left'
}

const DetailsText = {
	fontSize: 32,
	color: "#b1cbcc",
	fontWeight: 1,
}

const DetailsSubText = {
	lineHeight: 1.8,
	textAlign: 'right'

}


const profile = 

<Grid stackable centered columns={3}>
	<Grid.Row centered horizontal style={{ marginBottom: 100}}>
	    <Responsive as={Divider} style={profileLine}> </Responsive>
		<Grid.Column>
    		<Menu text vertical>
      			<Menu.Item header style={AboutMeText}>
      				About Me
      			</Menu.Item>
      			<Menu.Item style={AboutMeSubText}>I am a creative full stack web developer with professional experience pushing code to production.
      			 	I am passionate for responsive web design, test-driven development and performant code.
      				I have experience in JavaScript, Ruby on Rails, React.JS, Python, ES6, CSS3, HTML5, AWS and more. 
      				I enjoy finding solutions to tough problems, learning new tech, and working with teams.
				</Menu.Item>
      		</Menu>
      	</Grid.Column>
      	<Grid.Column textAlign="center" verticalAlign="middle" >
    		<Menu.Item>
					<Image centered src={profileImg} size='medium' avatar style={profileBorder}/>
			</Menu.Item>
	    </Grid.Column>
	    <Grid.Column>
	      	<Menu text vertical style={DetailsSubText}>
				<Menu.Item header style={DetailsText}>
					Details
      			</Menu.Item>
      			<Menu.Item ><strong>Name:</strong></Menu.Item>
      			<Menu.Item >Ben Paysen</Menu.Item>	      			
      			<Menu.Item ><b>Location:</b></Menu.Item>
      			<Menu.Item >San Francisco Bay Area</Menu.Item>
      			<Menu.Item ><b>Connect • Explore • Contact:</b></Menu.Item>
      			<div>
				    <SocialFollow />
				</div>   			
      		</Menu>
      	</Grid.Column>
	</Grid.Row>
</Grid>

export default profile;