import React from "react";
import "./App.css";
import { Parallax } from "react-parallax";
import image1 from "./tree-bg-resume.jpg";
import JumpButton from "./Components/JumpButton";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import profile from "./Profile";
import profileSub from "./ProfileSub";
import Experience from "./Experience";
import Abilities from "./Abilities";
import Gallery from "./Gallery";
import contact from "./Contact";

export default function App() {
  return (
    <div className="container" id="top">
      <Parallax
        bgImage={image1}
        alt="Landscape with tree by Bessi from Pixabay"
        strength={500}
        blur={{ min: -1, max: 2 }}
        bgImageStyle={{ opacity: 0.8 }}
      >
        <header className="hero">
          <JumpButton />

          <div className="hero-content">
            <h1 className="hero-name">Ben Paysen</h1>

            <hr className="coverLine" />

            <p className="hero-label">
              <i>interactive resume</i>
            </p>
          </div>
        </header>
      </Parallax>

      <div className="resume-layout">
        <main className="resume-main">
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
        </main>

        <aside className="resume-nav-rail">
          <div className="resume-nav-sticky">
            <Navbar />
          </div>
        </aside>
      </div>
    </div>
  );
}