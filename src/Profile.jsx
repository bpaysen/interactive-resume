import React from "react";
import profileImg from "./ProfileImg-v2.jpg";

export default function Profile() {
  return (
    <div className="profile-grid">
      <section className="profile-about" aria-labelledby="about-me-heading">
        <h3 id="about-me-heading" className="profile-heading">
          About Me
        </h3>

        <p>
          I started as a web developer and solutions engineer, moved through
          product and enterprise technology, and eventually brought those
          threads together through Accel IQ. Today I design and build AI-enabled
          products, agentic workflows, integrations, and operational systems —
          often working from an ambiguous business problem through technical
          discovery, architecture, prototyping, implementation, testing, and
          deployment.
        </p>

        <p>
          I still write code, still enjoy getting into the details of how
          systems work, and still like the point where product, engineering, and
          business problems collide. Before all of this, I trained as a
          classical percussionist — which is still an important part of who I am.
        </p>
      </section>

      <div className="profile-portrait">
        <img
          src={profileImg}
          alt="Ben Paysen"
          className="profile-image"
        />
      </div>

      <section className="profile-details" aria-labelledby="details-heading">
        <h3 id="details-heading" className="profile-heading">
          Details
        </h3>

        <dl className="profile-details-list">
          <div>
            <dt>Based in</dt>
            <dd>San Francisco Bay Area</dd>
          </div>

          <div>
            <dt>Working across</dt>
            <dd>Applied AI · Product · Integrations · Systems</dd>
          </div>
        </dl>

        <nav className="profile-links" aria-label="Profile links">
          <a
            href="https://github.com/bpaysen"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.3 11.3 0 0 0 12 .7Z" />
            </svg>
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/benpaysen"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M5.3 7.8H1.7V22h3.6V7.8ZM3.5 2A2.1 2.1 0 1 0 3.5 6.2 2.1 2.1 0 0 0 3.5 2ZM22 13.8c0-4.3-2.3-6.3-5.4-6.3-2.5 0-3.6 1.4-4.2 2.3v-2H8.8V22h3.6v-7c0-1.8.3-3.6 2.6-3.6 2.2 0 2.3 2.1 2.3 3.7V22H21v-8.2Z" />
            </svg>
            LinkedIn
          </a>

          <a href="mailto:ben@acceliqtech.com">
            Email
          </a>
        </nav>
      </section>
    </div>
  );
}