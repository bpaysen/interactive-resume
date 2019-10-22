import React, { Component, createRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import profile from "./Profile";
import profileSub from "./ProfileSub";
import Experience from "./Experience";
import Abilities from "./Abilities";
import { Grid, Ref, Responsive, Sticky, Rail, Segment } from 'semantic-ui-react';



class App extends Component {
  render() {
    return (
      <div>
        <Grid className="App">
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
                    quote="Tell me and I forget. Teach me and I remember. Involve me and I learn. ―Xun Kuang"
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
                    copy=""
                    dark={true}
                    id="projects"
                  />
                <Section
                  title="Section 5"
                  copy=""
                  dark={false}
                  id="section5"
                />
                </Responsive>
              </Ref>
          </Grid.Column>
        </Grid>

 

        </div>
    );
  }
}

export default App;