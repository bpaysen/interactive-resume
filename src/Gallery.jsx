const currentProjects = [
  {
    title: "Studyapp",
    type: "Full-Stack · Applied AI",
    description:
      "A deployed learning system that turns source material into targeted practice, evaluates responses, updates mastery, and determines what should be studied next.",
    technologies:
      "React · TypeScript · APIs · Authentication · AI-assisted evaluation · Production deployment",
  },
  {
    title: "Evidence-Gated AI Enrichment",
    type: "Agentic Systems · AI Reliability",
    description:
      "An enrichment and qualification system built around verified evidence, explicit policy, tool-using workflows, and careful handling of missing or conflicting information.",
    technologies:
      "Python · LLM tooling · APIs · Structured data · Evaluation · Policy workflows",
  },
  {
    title: "Accel IQ Systems",
    type: "Solution Architecture · Automation",
    description:
      "Selected AI, integration, enrichment, CRM, and operational systems designed and implemented across real client environments.",
    technologies:
      "AI agents · APIs · Webhooks · n8n · CRM integrations · Data workflows",
  },
  {
    title: "Interactive Resume V2",
    type: "React Modernization",
    description:
      "The modernization of this original React portfolio — preserving its interaction and visual identity while replacing its legacy build system, dependencies, and architecture.",
    technologies:
      "React · Vite · Modern CSS · Accessibility · Security remediation",
  },
];

const earlierProjects = [
  {
    title: "Environmental Activism",
    description:
      "An early React-based environmental information and advocacy project.",
    technologies: "React · JavaScript · Firebase · UI design",
    image: "/limantourSunset2.JPG",
  },
  {
    title: "Composer's Personal Website",
    description:
      "A multimedia website combining custom design and development with music and media presentation.",
    technologies: "JavaScript · TypeScript · AWS · Front-end development",
    image: "/valentino-funghi-VRr9a2rOoBI-unsplash.jpg",
  },
  {
    title: "Hunger & Homelessness Project",
    description:
      "An early full-stack project focused on resources and outreach around hunger and homelessness.",
    technologies: "Ruby on Rails · JavaScript · PostgreSQL · AWS S3",
  },
];

export default function Gallery() {
  return (
    <div className="projects">
      <section className="projects-group">
        <div className="projects-heading">
          <h3>Selected Work</h3>
          <p>
            Products, systems, and implementations spanning applied AI,
            integrations, automation, and full-stack development.
          </p>
        </div>

        <div className="current-project-grid">
          {currentProjects.map((project) => (
            <article className="current-project" key={project.title}>
              <p className="project-type">{project.type}</p>

              <h4>{project.title}</h4>

              <p className="project-description">{project.description}</p>

              <p className="project-technologies">{project.technologies}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-group earlier-projects">
        <div className="projects-heading">
          <h3>Earlier Work</h3>
          <p>
            Selected projects from the development work that helped shape the
            path into product, solutions engineering, and applied systems.
          </p>
        </div>

        <div className="earlier-project-grid">
          {earlierProjects.map((project) => (
            <article
              className={`earlier-project${
                project.image ? "" : " earlier-project--fallback"
              }`}
              key={project.title}
              tabIndex={0}
              style={
                project.image
                  ? { backgroundImage: `url(${project.image})` }
                  : undefined
              }
            >
              <div className="earlier-project-overlay">
                <h4>{project.title}</h4>

                <div className="earlier-project-details">
                  <p>{project.description}</p>
                  <p className="project-technologies">
                    {project.technologies}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}