import React, { Component, createRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Parallax } from "react-parallax";
import image1 from './tree-bg-resume.jpg';
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import profile from "./Profile";
import profileSub from "./ProfileSub";
import Experience from "./Experience";
import Abilities from "./Abilities";
import Gallery from './Gallery'
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

class App extends Component {
  contextRef = createRef();
  render() {
    return (
      <div>
        <div>
          <Parallax bgImage={image1} alt="Image by Bessi from Pixabay" strength={500} blur={{ min: -1, max: 2 }} bgImageStyle={{ opacity: '.8' }}>
            <Grid className="App" centered columns={1}>
              <Ref innerRef={this.contextRef}>
                <div style={{ height: 1000}}>

                  <div style={insideStyles}>
                   <Responsive as={Segment} 
                      basic
                      size={"large"}
                      style={{
                        height: 40,
                        width: 520,
                        color: "white",
                        fontSize: 70,
                        top: 20}}
                      className="coverText">Ben Paysen
                    </Responsive>
                    <div style={{height: -100}}><hr className="coverLine" /></div>
                    <Responsive as={Segment} 
                      basic
                      size={"large"}
                      style={{
                        height: 20,
                        width: 520,
                        color: "white",
                        fontSize: 30,
                        bottom: 25}}
                      className="coverSubText"><i>interactive resume</i>
                    </Responsive>
                  </div>

                </div>
              </Ref>
            </Grid>
          </Parallax>
                      {/*Close all tags above here*/}
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
                        quote="Tell me and I forget. Teach me and I remember. Involve me and I learn."
                        attribution=" ―Xun Kuang"
                        copy={Experience}
                        dark={true}
                        id="experience"
                      />
                    <Section
                        title="Abilities"
                        quote=""
                        copy={Abilities}
                        dark={false}
                        id="abilities"
                      />
                      <Section
                        title="Projects"
                        quote="Courage is grace under pressure."
                        attribution=" –Ernest Hemingway"
                        copy={<Gallery />}
                        dark={true}
                        id="projects"
                      />
                    <Section
                      title="Contact"
                      copy=""
                      dark={false}
                      id="contact"
                    />
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