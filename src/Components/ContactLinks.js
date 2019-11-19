import React from "react";
import {Grid, Icon} from 'semantic-ui-react';
import styled from "@emotion/styled/macro";


const linkContent = {
	fontSize: 18,
	textTransform: "none",
}

const contactStyle= {
	
	color: "#b1cbcc",
	marginBottom: 10,
};

const LinkDiv = styled('div')`
  color: #b1cbcc;
`

const Link = LinkDiv.withComponent('a')

export default function ContactLinks() {
  return (
  		  <Grid columns={2}>
  			<Grid.Row style={linkContent}>
			    <Grid.Column>
			    	<a
			    href="https://www.linkedin.com/in/benpaysen"
			    className="linkedinButton"
			 	>
			    	<Icon name='linkedin' size="large" style={contactStyle} />
			 		</a>
			 	</Grid.Column>
			 	<Grid.Column>
			 		<Link href="https://www.linkedin.com/in/benpaysen">https://www.linkedin.com/in/benpaysen</Link>
			 	</Grid.Column>

			 </Grid.Row>
			 			 	
			 <Grid.Row style={linkContent}>			 	
			 	<Grid.Column>
			 		<a
				    href="mailto:paysen@gmail.com"
				    className="gmailButton" 
				 	>
				    	<Icon name='paper plane' size="large" style={contactStyle} />
				 	</a>
			 	</Grid.Column>
			 	<Grid.Column>
			 		<Link href="mailto:paysen@gmail.com" >paysen@gmail.com</Link>
			 	</Grid.Column>
			 </Grid.Row>

		  </Grid>
  );
};