import React from "react";

const career = [
  {
    company: "Accel IQ",
    title: "Founder · Product & Solutions Architect",
    dates: "2024–Present",
    summary:
      "Design and build AI-enabled products, agentic workflows, integrations, data systems, and operational automation for B2B organizations.",
    highlights: [
      "Architect 0-to-1 AI and automation systems using agents, APIs, SDKs, webhooks, LLM platforms, and custom integrations.",
      "Build systems spanning CRM, Customer Success, GTM operations, enrichment, data workflows, internal tooling, and business automation.",
      "Work from technical discovery and architecture through prototyping, implementation, testing, deployment, and production iteration.",
      "Delivered AI and automation implementations across more than 50 client engagements.",
    ],
    technologies:
      "Applied AI · Python · APIs · Webhooks · OpenAI · Anthropic · n8n · Make · Zapier · Data & CRM Integrations",
  },
  {
    company: "OptConnect",
    title: "Senior Account Executive · Product Lead · Solutions Engineer",
    dates: "2022–2025",
    summary:
      "Led technically complex enterprise SaaS and IoT engagements from discovery through implementation, working across customers, engineering, product, infrastructure, operations, security, and executive stakeholders.",
    highlights: [
      "Designed solution architectures, implementation strategies, technical playbooks, proofs of concept, and deployment plans.",
      "Worked with engineering to validate, test, troubleshoot, and move customer-facing solutions from development into production.",
      "Influenced product strategy, workflows, and technical infrastructure based on enterprise requirements.",
      "Combined technical solution ownership with commercial responsibility for large enterprise engagements and earned three consecutive President’s Club awards.",
    ],
    technologies:
      "SaaS · IoT · Solution Architecture · Technical Discovery · POCs · Deployment · Networking · Product Strategy",
  },
  {
    company: "Premier Wireless Solutions",
    companyNote: "Acquired by OptConnect",
    title: "Product Manager · Solutions Engineer · Account Manager",
    dates: "2017–2022",
    summary:
      "Worked across software development, IoT infrastructure, solution engineering, product management, technical support, and customer implementation.",
    highlights: [
      "Managed two technical software platforms from customer discovery and feature definition through implementation, testing, deployment, and production iteration.",
      "Designed software solutions, technical integrations, and implementation strategies around customer requirements.",
      "Partnered with engineering throughout the software development lifecycle, contributing to full-stack development, testing, debugging, deployment, and continuous improvement.",
      "Worked across OEM, network, channel, and enterprise integrations while serving as a technical advisor to customers and internal teams.",
    ],
    technologies:
      "Ruby on Rails · JavaScript · Python · SQL · Networking · Provisioning · IoT · Automation",
  },
  {
    company: "Independent Web Development",
    title: "Designer · Developer",
    dates: "2014–2021",
    summary:
      "Built independent applications and experiments that established the hands-on software-development foundation for later work in product, solutions engineering, integrations, and applied AI.",
    highlights: [],
    technologies:
      "React · JavaScript · Ruby on Rails · APIs · Databases · Cloud Deployment · UI/UX",
  },
];

export default function Experience() {
  return (
    <div className="experience">
      <section className="experience-group" aria-labelledby="career-heading">
        <div className="experience-group-heading">
          <h3 id="career-heading">Career</h3>
          <p>
		  Over time, my work has expanded from hands-on software development into
		  solutions engineering, product leadership, enterprise implementation, and
		  applied AI architecture. Across each stage, the common thread has been
		  translating complex business needs into systems that can be built,
		  deployed, and adopted.
		  </p>
        </div>

        <div className="career-timeline">
          {career.map((role) => (
            <article className="career-entry" key={`${role.company}-${role.dates}`}>
              <div className="career-entry-meta">
                <p className="career-dates">{role.dates}</p>
                <h4>{role.company}</h4>

                {role.companyNote && (
                  <p className="career-company-note">{role.companyNote}</p>
                )}
              </div>

              <div className="career-entry-content">
                <h5>{role.title}</h5>

                <p className="career-summary">{role.summary}</p>

                {role.highlights.length > 0 && (
                  <ul className="career-highlights">
                    {role.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}

                <p className="career-technologies">{role.technologies}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-group education" aria-labelledby="education-heading">
        <div className="experience-group-heading">
          <h3 id="education-heading">Education</h3>
          <p>
            Formal music training and continued computer science / software
            engineering study.
          </p>
        </div>

        <div className="education-grid">
          <article className="education-entry">
            <p className="education-dates">2010–2013</p>
            <h4>Rutgers University</h4>
            <p>Doctoral studies — Music Performance, DMA (ABD)</p>
          </article>

          <article className="education-entry">
            <p className="education-dates">2003 · 2001</p>
            <h4>San Francisco Conservatory of Music</h4>
            <p>Master of Music · Bachelor of Music — Performance</p>
          </article>

          <article className="education-entry education-entry-wide">
            <p className="education-label">
              Professional Studies & Technical Development
            </p>
            <h4>Computer Science & Software Engineering</h4>
            <p>
              University of Helsinki · Harvard CS50 · Dartmouth / Algorithms ·
              Watch and Code · Udemy · independent project-based study
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}