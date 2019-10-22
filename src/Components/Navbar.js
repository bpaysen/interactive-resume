import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="wrapper">
	      <nav className="vertical" id="navbar">
	        <div className="nav-content">
	          <img
	            src={logo}
	            className="nav-logo"
	            alt="Logo"
	            onClick={this.scrollToTop}
	          />
	          <ul className="nav-items">
	            <li className="nav-item">
	              <Link
	              	className="anchor"
	                activeClass="active"
	                to="profile"
	                spy={true}
	                smooth={true}
	                offset={0}
	                duration={500}
	              >
	                Profile
	              </Link>
	            </li>
	            <li className="nav-item">
	              <Link
	              	className="anchor"
	                activeClass="active"
	                to="experience"
	                spy={true}
	                smooth={true}
	                offset={0}
	                duration={500}
	              >
	                Experience
	              </Link>
	            </li>
	            <li className="nav-item">
	              <Link
	              	className="anchor"
	                activeClass="active"
	                to="abilities"
	                spy={true}
	                smooth={true}
	                offset={0}
	                duration={500}
	              >
	                Abilities
	              </Link>
	            </li>
	            <li className="nav-item">
	              <Link
	              	className="anchor"
	                activeClass="active"
	                to="projects"
	                spy={true}
	                smooth={true}
	                offset={0}
	                duration={500}
	              >
	                Projects
	              </Link>
	            </li>
	            <li className="nav-item">
	              <Link	              	
	              	className="contactAnchor"
	                activeClass="active"
	                to="section5"
	                spy={true}
	                smooth={true}
	                offset={0}
	                duration={500}
	              >
	                Contact
	              </Link>
	            </li>
	          </ul>
	        </div>
	      </nav>
      </div>
    );
  }
}