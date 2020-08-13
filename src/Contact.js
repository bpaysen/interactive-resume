import React from 'react';
import { Grid, Responsive, Divider, Image, Segment, Menu, Button, Icon } from 'semantic-ui-react';
import ContactLinks from "./Components/ContactLinks";


const profileLine = {
	background: "#b1cbcc",
    width: 800,
    margin: 'auto',
    marginBottom: 40,
    zIndex: 0,
}

const AboutMeText = {
	fontSize: 32,
	color: "#b1cbcc",
	fontWeight: 1,
	textAlign: 'left',
	display: "inline-block"
}


const contact = 

<Grid stackable centered columns={2}>
	<Grid.Row centered horizontal style={{ marginBottom: 100}}>
	    <Responsive as={Divider} style={profileLine}> </Responsive>
		<Grid.Column>
    		<Menu text vertical>
      			<Menu.Item header style={AboutMeText}>
      			<div>
				    <ContactLinks />
				</div>  
      			</Menu.Item>
      		</Menu>
      	</Grid.Column>
    </Grid.Row>
</Grid>

export default contact;