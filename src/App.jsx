import React, { Component, createRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Parallax } from "react-parallax";
import image1 from './tree-bg-resume.jpg';
import JumpButton from "./Components/JumpButton"
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import profile from "./Profile";
import profileSub from "./ProfileSub";
import Experience from "./Experience";
import Abilities from "./Abilities";
import Gallery from './Gallery'
import contact from "./Contact"
import { Grid, Ref, Responsive, Sticky, Rail, Segment } from 'semantic-ui-react';

const insideStyles = {
  // backgroundColor: "transparent",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: 0  
};

const jumpButtonStyle = {
  borderStyle: 'none',
  padding: 0,
  margin: 'auto',
  width: 140,
  zIndex: 2
  };

class App extends Component {
  contextRef = createRef();
  render() {
    return (
      <div className="container">
        <div className="refDiv">
          <Parallax 
            bgImage={image1}
            alt="Landscape with tree by Bessi from Pixabay"
            strength={500}
            blur={{ min: -1, max: 2 }}
            bgImageStyle={{ 
              opacity: '.8'}}
            >
            <Grid className="App"centered columns={1}>

                <div style={{ height: 1024}}>
                    <Responsive as={Segment}
                          className="vertical buttons"
                          style={ jumpButtonStyle } 

                          size="massive"
                          >
                          <JumpButton />
                    </Responsive>

                  <div style={insideStyles}>
                   <Responsive as={Segment} 
                      basic
                      size={"small"}
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        color: "white",
                        fontSize: "5vw",
                        padding: ".2em"}}
                      className="coverText">Ben Paysen
                    </Responsive>
                    <Responsive as={Segment} 
                      basic
                      size={"small"}
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        }}
                      ><hr className="coverLine" />
                      </Responsive>
                    <Responsive as={Segment} 
                      basic
                      size={"small"}
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        lineHeight: .9,
                        color: "white",
                        fontSize: "2.5vw",
}}
                      className="coverText"><i>interactive resume</i>
                    </Responsive>
                  </div>

                </div>

            </Grid>
          </Parallax>
              <Grid>
                <Grid.Column>
                  <Ref innerRef={this.contextRef}>
                    <Responsive as={Segment}>
                      <Rail className='ui right internal close rail'>
                        <Sticky context={this.contextRef} offset={20}>
                          <Navbar />
                        </Sticky>
                      </Rail>
                      <Section
                        title="Profile"
                        quote={profileSub}
                        copy={profile}
                        dark={false}
                        id="profile"
                      />
                      <Section
                        title="Experience"
                        quote="Be a first-rate version of yourself, instead of a second-rate version of somebody else."
                        attribution=" ―Judy Garland"
                        copy={Experience}
                        dark={true}
                        id="experience"
                      />
                    <Section
                        title="Abilities"
                        quote="No good deed goes unpunished."
                        attribution=" ―Oscar Wilde"
                        copy={Abilities}
                        dark={false}
                        id="abilities"
                      />
                      <Section
                        title="Projects"
                        quote="Courage is grace under pressure."
                        attribution=" ―Ernest Hemingway"
                        copy={<Gallery />}
                        dark={true}
                        id="projects"
                      />
                      <div className="lastSection">
                        <Section
                          title="Contact"
                          quote="Not he who has much is rich, but he who gives much."
                          attribution=" ―Erich Fromm"
                          copy={contact}
                          dark={false}
                          id="contact"
                        />
                      </div>
                  </Responsive>
              </Ref>
          </Grid.Column>
        </Grid>
        </div>
      </div>
    );
  }
}

export default App;