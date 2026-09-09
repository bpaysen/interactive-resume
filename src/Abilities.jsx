const capabilityGroups = [
  {
    title: "Applied AI & Intelligent Systems",
    items: [
      "Agentic systems and AI agents",
      "LLM-powered workflows",
      "Retrieval and enrichment systems",
      "Evaluation and reliability",
      "Prompt and system design",
      "Model selection and context management",
    ],
  },
  {
    title: "Software Engineering",
    items: [
      "Python",
      "TypeScript / JavaScript",
      "React / Next.js",
      "Backend and full-stack development",
      "REST APIs",
      "SQL and relational data",
    ],
  },
  {
    title: "Integrations & Data",
    items: [
      "API and SDK integrations",
      "Webhooks",
      "Data ingestion and transformation",
      "Enrichment and reconciliation workflows",
      "CRM and business-system integrations",
      "Automation and orchestration",
      "SaaS and IoT system integration",
    ],
  },
  {
  title: "Architecture, Product & Delivery",
  items: [
    "Technical discovery and requirements translation",
    "Solution architecture",
    "Rapid prototyping and proofs of concept",
    "0-to-1 product development",
    "Technical product management",
    "Testing, validation, and production debugging",
    "Deployment and system hardening",
    "Enterprise solution design",
    "Customer and stakeholder discovery",
    "ROI / TCO modeling",
    ],
  },
];

const technologyGroups = [
  {
    label: "AI / Models",
    items: "OpenAI · Anthropic / Claude · LLM APIs · retrieval systems",
  },
  {
    label: "Development",
    items:
      "Python · TypeScript · JavaScript · React · Next.js · SQL · HTML · CSS · Git · GitHub",
  },
  {
    label: "APIs / Data / Infrastructure",
    items:
      "REST APIs · Webhooks · SDKs · Postman · Supabase · BigQuery · cloud services · CI/CD",
  },
  {
    label: "Automation / Orchestration",
    items: "n8n · Make · Zapier · Clay",
  },
  {
    label: "Business Platforms",
    items: "Salesforce · HubSpot · Customer.io · Notion",
  },
];

export default function Abilities() {
  return (
    <div className="capabilities">
      <div className="capability-grid">
        {capabilityGroups.map((group) => (
          <section className="capability-group" key={group.title}>
            <h3>{group.title}</h3>

            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="technology-section">
        <h3>Selected Technologies</h3>

        <div className="technology-list">
          {technologyGroups.map((group) => (
            <div className="technology-row" key={group.label}>
              <h4>{group.label}</h4>
              <p>{group.items}</p>
            </div>
          ))}
        </div>

        <div className="earlier-stack">
          <h4>Earlier / Foundational Stack</h4>
          <p>
            Ruby on Rails · Ruby · jQuery · Firebase · MySQL · Bootstrap ·
            Semantic UI
          </p>
        </div>
      </section>
    </div>
  );
}