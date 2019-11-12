import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Icon } from 'semantic-ui-react';


export default class Navbar extends Component {


  render() {
    return (
		<div className="jumpWrapper">
		  <nav className="vertical" id="jumpBar">
		    <div className="jumpContent">
		        <div id="jumpButton">
		        	<Link
		              	className="anchor"
		                activeClass="active"
		                to="profile"
		                spy={true}
		                smooth={true}
		                offset={100}
		                duration={500}
		            >
			      	  	<Icon name="angle double down"
				      	  	size="large"
				            id="bounce"
				            alt="Logo"
			          	/>
			     	</Link>
		      </div>
		    </div>
		  </nav>
		</div>
	);
  }
}