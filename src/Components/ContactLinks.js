import React, {useState} from "react";
import {Grid, Icon} from 'semantic-ui-react';
import styled from "@emotion/styled/macro";
import style from './style.js';


const linkContent = {
	fontSize: 18,
	textTransform: "none",
}
const spacing = "0 2rem";


const contactStyle= {
	margin: spacing,
    transition: 'transform 250ms',
    display: 'inlineBlock',	
	color: "#b1cbcc",
	marginBottom: 10,

};

// const LinkDiv = styled('div')`
//   color: #b1cbcc;
// `

// const Link = LinkDiv.withComponent('a')

export default function ContactLinks() {

  const [hover, setHover] = useState(false);

  const hoverStyle = {


  }

  return (
  		  <Grid columns={1}>
  		  	<h3> Words </h3>
  			<Grid.Row style={linkContent}>
			    <a
			    href="https://www.linkedin.com/in/benpaysen"
			    className="linkedinButton"
			    onMouseEnter={()=>{
			        setHover(true);
			    }}
			      onMouseLeave={()=>{
			        setHover(false);
			    }}
		        style={{
        		  ...style.normal,
		          ...(hover ? style.hover : null)
		        }}>
			    	<Icon name='linkedin' size="large" style={contactStyle} />
			 	</a>
				<a
			    href="mailto:paysen@gmail.com"
			    className="gmailButton"
				onMouseEnter={()=>{
			        setHover(true);
			    }}
			      onMouseLeave={()=>{
			        setHover(false);
			    }}
		        style={{
        		  ...style.normal,
		          ...(hover ? style.hover : null)
		        }}>
				    <Icon name='paper plane' size="large" style={contactStyle} />
				 </a>
			 </Grid.Row>
		  </Grid>
  );
};