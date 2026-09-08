import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// import Icon from './Icon.jsx';
import chevy from '../dblChevy3.svg';

console.log(chevy)


// const styles = {
//     shadow: {
//         shadowColor: 'black',
//         shadowOpacity: 0.5,
//         shadowRadius: 5,
//         // iOS
//         shadowOffset: {
//             width: 0,            // These can't both be 0
//             height: 1,           // i.e. the shadow has to be offset in some way
//         },
//         // Android
//         textShadowOffset: {
//             width: 0,            // Same rules apply from above
//             height: 1,           // Can't both be 0
//         },
// 	}
// };

export default class Navbar extends Component {


  render() {
    return (
		<div className="jumpWrapper">
		  <nav className="vertical" id="jumpBar">
		    <div className="jumpContent">
		        <div id="jumpButton" class="jcontainer">
		        	<Link
		              	className="anchor"
		                activeClass="active"
		                to="profile"
		                spy={true}
		                smooth={true}
		                offset={100}
		                duration={500}
		            >
					<div class="triangle">
					</div>
					<div class="triangle1">
					</div>
					<div class="triangle2">
					</div>
	            

			     	</Link>
		      </div>
		    </div>
		  </nav>
		</div>
	);
  }
}