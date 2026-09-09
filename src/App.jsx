import "./App.css";
import image1 from "./tree-bg-resume.jpg";
import HeroRole from "./Components/HeroRole";
import JumpButton from "./Components/JumpButton";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Profile from "./Profile";
import ProfileSub from "./ProfileSub";
import Experience from "./Experience";
import Abilities from "./Abilities";
import Gallery from "./Gallery";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="container" id="top">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${image1})` }}
>
          <header className="hero">
          <JumpButton />

            <div className="hero-content">
              <h1 className="hero-name">Ben Paysen</h1>

              <hr className="coverLine" />

              <HeroRole text="AI Solutions Architect · Systems Builder" />

              <p className="hero-focus">
                Applied AI · Product &amp; Platform Integrations ·
                Forward-Deployed Engineering
              </p>

              <p className="hero-label">
                <i>interactive résumé</i>
              </p>
            </div>
          </header>
      </div>

      <div className="resume-layout">
        <div className="resume-nav-bar">
          <Navbar />
        </div>

        <main className="resume-main">
          <Section
            title="Profile"
            quote={<ProfileSub />}
            copy={<Profile />}
            dark={false}
            id="profile"
          />

          <Section
            title="Experience"
            quote="Be a first-rate version of yourself, instead of a second-rate version of somebody else."
            attribution=" ―Judy Garland"
            copy={<Experience />}
            dark={true}
            id="experience"
          />

          <Section
            title="Capabilities"
            quote="The details are not the details. They make the design."
            attribution=" ―Charles Eames"
            copy={<Abilities />}
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
              copy={<Contact />}
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