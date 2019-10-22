import React from "react";
import {Icon} from 'semantic-ui-react';

const socialStyle= {
	marginRight: 2,
	color: "#b1cbcc"

};

export default function SocialFollow() {
  return (
    <div>
	    <a
	    href="https://www.linkedin.com/in/benpaysen"
	    className="linkedinButton" 

	 	>
	    <Icon name='linkedin' size="big" style={socialStyle} />
	 	</a>
	 	<div style={{display: "inline-block", margin: 10}}></div>
	 	<a
	    href="https://www.github.com/bpaysen"
	    className="githubButton" 
	 	>
	    <Icon name='github' size="big" style={socialStyle} />
	 	</a>
	 	<div style={{display: "inline-block", margin: 10}}></div>
	 	<a
	    href="mailto:paysen@gmail.com"
	    className="gmailButton" 
	 	>
	    <Icon name='paper plane' size="big" style={socialStyle} />
	 	</a>

    </div>
  );
};