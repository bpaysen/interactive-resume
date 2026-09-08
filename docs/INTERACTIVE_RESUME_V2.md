# Interactive Resume V2

## Objective

Modernize Ben Paysen's original interactive resume while preserving the personality,
interaction patterns, and handmade quality that make the site distinctive.

This is an evolution of the original project, not a generic portfolio rebuild.

## Core Principle

Keep the soul. Replace the machinery.

The finished site should demonstrate both where the development journey began and
where Ben's work has evolved: software development, solutions engineering, product,
enterprise systems, applied AI, integrations, and forward-deployed work.

---

## Preserve

- Full-screen opening experience
- Long vertical scrolling journey
- Section-to-section storytelling
- Quotes as visual/interstitial elements
- Original personality and non-template feel
- Selected original projects
- General visual DNA of the existing site
- Evidence that the application was originally built from scratch
- Interactive project presentation where useful

## Evolve

- Hero typography and layout
- Scrolling/navigation experience
- Quote presentation
- Project cards and interactions
- Color system
- Animation and transitions
- Responsive behavior
- Mobile experience
- Contact section
- Career timeline presentation

## Replace / Rewrite

- Professional headline
- Profile copy
- Experience content
- Skills/Abilities presentation
- Current project portfolio
- Technology descriptions
- Outdated employment information
- Star-based skill ratings

---

## Current Professional Positioning

AI Solutions Architect, Product & Platform Integrations, applied AI /
forward-deployed systems builder, Founder.

Core areas:

- Applied AI and agentic systems
- API, webhook, and business-system integrations
- Retrieval, enrichment, reconciliation, and data workflows
- LLM evaluation and reliability
- Backend and full-stack product development
- Workflow automation and orchestration
- Production debugging, deployment, and system hardening
- Technical discovery and solution architecture
- Product and enterprise technology
- GTM and operational systems

---

## Proposed Technical Direction

- Modern React
- TypeScript
- Vite
- Modern CSS / CSS Grid / Flexbox / custom properties
- Minimal third-party dependencies
- Responsive/mobile-first implementation
- Accessible semantic markup
- Keyboard accessibility
- prefers-reduced-motion support
- Modern linting and formatting
- Clean production build
- Security/dependency audit

Avoid rebuilding the old dependency tree one vulnerability at a time.

Where practical, replace obsolete libraries with browser-native functionality.

---

# Section Decisions

## 1. Hero

Status: APPROVED
Decision: EVOLVE

### Preserve

- Full-screen atmospheric opening
- Existing tree / landscape imagery
- Ben Paysen as the dominant visual element
- Centered composition
- Horizontal divider
- Scroll / jump invitation
- Sense of depth and motion
- "interactive résumé" identity

### Approved Copy

Ben Paysen

AI Solutions Architect · Systems Builder

Applied AI · Product & Platform Integrations · Forward-Deployed Engineering

interactive résumé

### Design Direction

The existing Hero should feel more mature rather than fundamentally redesigned.

- Generous whitespace
- Strong editorial typography
- Use a brief one-time typing/reveal sequence for the primary role line, followed by subtle fade/reveal motion for supporting text. Avoid looping typewriter effects.
- Improved contrast/readability over the landscape
- Modern responsive typography using clamp()
- True viewport-height layout
- Preserve subtle parallax/depth
- Modernize the downward scroll indicator
- Avoid excessive UI elements, cards, gradients, or visual effects

### Engineering Direction

- Replace fixed 1024px height with modern viewport sizing
- Replace Semantic UI layout components
- Replace react-scroll for this interaction with native anchor/scroll behavior
- Prefer CSS/native browser behavior over a parallax dependency if the visual effect can be preserved
- Remove inline layout styles where practical
- Support prefers-reduced-motion
- Ensure strong mobile layout

The Hero should immediately establish current professional identity without trying
to contain the entire résumé or GitHub profile headline.

## 2. Profile

Status: APPROVED
Decision: EVOLVE

### Preserve

- Three-part About / Portrait / Details composition
- Personal tone
- Portrait
- Animated identity / "I am..." element
- Social/contact links
- Classical musician identity

### Approved Main Copy

I started as a web developer and solutions engineer, moved through product and
enterprise technology, and eventually brought those threads together through
Accel IQ. Today I design and build AI-enabled products, agentic workflows,
integrations, and operational systems — often working from an ambiguous business
problem through technical discovery, architecture, prototyping, implementation,
testing, and deployment.

I still write code, still enjoy getting into the details of how systems work,
and still like the point where product, engineering, and business problems
collide. Before all of this, I trained as a classical percussionist — which is
still an important part of who I am.

### Animated Identity

I am...

- an AI Solutions Architect
- a Systems Builder
- a Developer
- a Product Thinker
- a Founder
- a Classical Percussionist 🎶

The animation should cycle/reveal these identities without becoming visually busy, revealing a Classical Percussionist last.

### Details

Based in  
San Francisco Bay Area

Working across  
Applied AI · Product · Integrations · Systems

Connect  
GitHub · LinkedIn · Email

### Design Direction

- Preserve the three-column storytelling structure on larger screens
- Recompose naturally on mobile
- Modernize the portrait treatment
- Remove the heavy double-border/avatar styling
- Retain the animated identity concept
- Use generous whitespace and stronger typography
- Keep this section human rather than turning it into a résumé summary

---

## 3. Experience

Status: APPROVED
Decision: EVOLVE STRUCTURE / REPLACE CONTENT

### Preserve

- Career journey / timeline concept
- Distinction between Career and Education
- Two-column visual rhythm where useful
- Sense of progression over time
- Technical roots of the original site
- Independent development as part of the career story

### Career Direction

Experience should intentionally surface the technical responsibilities embedded
throughout Ben's career, including during commercially titled roles.

Use composite titles from the current résumé where they accurately reflect the
functions performed. Do not flatten the career into either an engineering-only
or sales-only narrative.

The central progression should be:

software development → solutions engineering → product → enterprise systems →
solution architecture → applied AI / forward-deployed systems

Each role should emphasize the kinds of systems, technical problems, implementations,
and business outcomes Ben was responsible for rather than simply reproducing a
traditional résumé.

---

### Accel IQ

**Founder · Product & Solutions Architect**  
**2024–Present**

Designed and delivered AI-powered products, agentic workflows, automation platforms,
developer tools, integrations, and operational systems for B2B organizations.

Worked from ambiguous business requirements through technical discovery, architecture,
prototyping, implementation, testing, deployment, and iteration.

Representative work:

- Architected 0-to-1 AI and automation systems using agents, APIs, SDKs, webhooks,
  LLM platforms, and custom integrations
- Built systems spanning CRM, Customer Success, sales and marketing operations,
  enrichment, data workflows, internal tooling, and business automation
- Worked with OpenAI and Anthropic platforms alongside Python, n8n, Make, Zapier,
  Clay, and application-layer integrations
- Built AI-enabled workflows that reduced manual administrative work and accelerated
  operational response times
- Designed systems connecting technical implementation directly to measurable
  customer and business outcomes
- Delivered AI and automation implementations across more than 50 client engagements

### OptConnect

**Senior Account Executive · Product Lead · Solutions Engineer**  
**2022–2025**

Led technically complex enterprise SaaS and IoT engagements from discovery through
implementation, working across customers, engineering, product, infrastructure,
operations, security, and executive stakeholders.

Representative work:

- Designed solution architectures, implementation strategies, technical playbooks,
  proofs of concept, and deployment plans
- Worked directly with engineering teams to validate, test, troubleshoot, and move
  customer-facing solutions from development into production
- Influenced product strategy, customer workflows, and technical infrastructure based
  on enterprise requirements
- Led technical discovery and translated complex business requirements into scalable
  SaaS and IoT implementations
- Built and presented technical demonstrations, ROI analyses, TCO models, and
  implementation strategies
- Combined technical solution ownership with responsibility for large enterprise
  commercial engagements
- Achieved three consecutive President's Club awards while closing and expanding
  complex enterprise relationships

The role should remain visibly commercial while making its substantial product,
implementation, architecture, and solutions-engineering responsibilities clear.

### Premier Wireless Solutions
**Acquired by OptConnect**

**Product Manager · Solutions Engineer · Account Manager**  
**2017–2022**

Worked across software development, IoT infrastructure, solution engineering,
product management, technical support, and customer implementation.

Representative work:

- Served as Product Manager for two technical software platforms, working from
  customer discovery and requirements through feature definition, implementation,
  testing, deployment, and production iteration
- Designed software solutions, technical integrations, and implementation strategies
  around customer requirements
- Partnered with engineering throughout the software development lifecycle,
  contributing to product design, full-stack development, testing, debugging,
  deployment, and continuous improvement
- Worked with Ruby on Rails, JavaScript, Python, SQL, automation, networking,
  provisioning, and IoT systems
- Supported integrations involving OEMs, network infrastructure, channel partners,
  and enterprise customers
- Built automation and technical workflows that reduced manual operational work
- Served as a technical advisor connecting customer business requirements with
  software, hardware, networking, and product capabilities

This role should visibly establish the bridge between Ben's early development work
and the later product, solutions architecture, and enterprise technology work.

### Independent Web Development

**Designer · Developer**  
**Earlier Work**

Built independent applications and experiments across React, JavaScript,
Ruby on Rails, databases, APIs, cloud deployment, and UI/UX.

This work established the hands-on software-development foundation that later
carried into solutions engineering, product management, system integration,
and applied AI.

Keep this entry compact. Individual applications and technologies should be
shown primarily in the Projects / Earlier Work section rather than repeated here.

---

## Education

Status: APPROVED
Decision: SIMPLIFY

Education should remain part of the story, particularly because the transition
from professional classical musician to software and technology is distinctive,
but it should no longer compete visually with professional experience.

### Formal Education

**Rutgers University**  
Doctoral studies — Music Performance, DMA (ABD)  
2010–2013

**San Francisco Conservatory of Music**  
Master of Music — Performance  
Bachelor of Music — Performance

### Professional Studies & Technical Development

Independent software engineering and computer science study including:

- University of Helsinki — Department of Computer Science
- Harvard University — Computer Science / CS50
- Dartmouth College — Computer Science / Algorithms
- Watch and Code — JavaScript & Software Development
- Udemy — Web Development, Python, AI & Automation
- Additional independent technical study and project-based learning

### Education Design Direction

- Formal education should be concise
- Technical study should be grouped rather than presented as individual timeline entries
- Do not reproduce course syllabi
- Do not enumerate basic programming concepts
- Let shipped products and professional engineering work demonstrate current technical ability
- Preserve the classical-music background because it is part of the site's personal story
- Education should have lower visual weight than Career
- On mobile, collapse into a simple chronological or grouped layout

---

### Experience Design Direction

- Preserve the idea of a visual career journey
- Give Accel IQ the greatest visual weight
- Make technical ownership visible throughout every role
- Keep composite titles where they accurately describe the work performed
- Allow earlier roles to become progressively more compact
- Avoid dense résumé-style bullet walls
- Use selected technical terms as visual anchors rather than giant technology lists
- Consider subtle year markers or a vertical timeline
- Create a clear visual progression from developer to solutions engineer to product
  and enterprise systems to applied AI / architecture
- Responsive layout should collapse naturally into a single chronological column

## 4. Capabilities

Status: APPROVED
Decision: REPLACE CONTENT / EVOLVE PRESENTATION

### Preserve

- A highly scannable skills/capabilities section
- Balanced multi-column presentation on desktop
- Technical breadth as part of the site's story
- Technologies as visible evidence of hands-on work

### Replace

- Star ratings
- Numeric or subjective proficiency scoring
- Arbitrary left/right skill lists
- Outdated emphasis on individual frameworks
- Large undifferentiated technology lists

The section should communicate what Ben can build and work across rather than
attempting to assign a proficiency score to every tool.

---

### Applied AI & Intelligent Systems

- Agentic systems and AI agents
- LLM-powered workflows
- Retrieval and enrichment systems
- Evaluation and reliability
- Prompt and system design
- Model selection and context management
- AI-enabled internal tools and operational systems

### Software Engineering

- Python
- TypeScript / JavaScript
- React / Next.js
- Backend and full-stack application development
- REST APIs
- SQL and relational data
- Testing and debugging
- CI/CD and production deployment

### Integrations & Data

- API and SDK integrations
- Webhooks
- Data ingestion and transformation
- Enrichment and reconciliation workflows
- CRM and business-system integrations
- Data mapping and workflow design
- Automation and orchestration
- SaaS and IoT system integration

### Architecture & Delivery

- Technical discovery
- Solution architecture
- Rapid prototyping
- Proofs of concept
- Requirements translation
- Production debugging
- Testing and validation
- Deployment and system hardening
- Technical documentation
- Cross-functional implementation

### Product & Business Systems

- Product discovery
- Product strategy
- 0-to-1 product development
- Technical product management
- Enterprise solution design
- Customer and stakeholder discovery
- ROI / TCO modeling
- GTM systems
- Workflow and operational design

---

## Selected Technologies

Technologies should be presented as a supporting layer beneath capabilities,
not as the primary definition of technical ability.

### AI / Models

OpenAI · Anthropic / Claude · LLM APIs · agent tooling · retrieval systems

### Development

Python · TypeScript · JavaScript · React · Next.js · SQL · HTML · CSS · Git · GitHub

### APIs / Data / Infrastructure

REST APIs · Webhooks · SDKs · Postman · Supabase · BigQuery · cloud services · CI/CD

### Automation / Orchestration

n8n · Make · Zapier · Clay

### Business Platforms

Salesforce · HubSpot · Customer.io · Notion

### Development Environment

VS Code · Claude Code · Cursor · command line / shell tooling

---

## Earlier / Foundational Technologies

Do not erase technologies that demonstrate the development history of the site,
but give them lower visual priority.

Examples:

Ruby on Rails · Ruby · jQuery · Firebase · MySQL · Bootstrap · Semantic UI

These can appear in an "Earlier Stack" treatment or alongside the historical
projects where they were actually used.

---

## Design Direction

- No star ratings
- No progress bars or percentage scores
- Capabilities should be more prominent than individual tools
- Use approximately 4–5 capability groups
- Technologies may use compact typography, tags, or another understated visual treatment
- Avoid a wall of pill-shaped badges
- Preserve some of the original two-column visual rhythm on desktop
- Mobile should become a clean single-column sequence
- Consider subtle interaction on hover/focus that reveals representative technologies
  or examples without hiding essential information
- Current technologies should have greater visual weight than legacy technologies
- Earlier technologies should remain discoverable as evidence of technical history

---

## 5. Projects

Status: APPROVED DIRECTION
Decision: EVOLVE

### Preserve

- Image-first project presentation
- Large visual tiles
- Titles visible without interaction
- Dark overlay / reveal interaction
- Secondary information revealed through motion
- Handmade, editorial feeling of the original gallery
- Selected early projects as part of the site's history

### Modernize

- Hover interactions must also work through keyboard focus and touch
- Essential information must not be hidden exclusively behind hover
- Improve responsive layout
- Replace fixed 400x250 sizing with responsive aspect-ratio based layouts
- Use semantic links/buttons
- Add real project URLs and GitHub links where appropriate
- Improve image loading and accessibility
- Use restrained transition/reveal motion
- Remove dependency on Emotion solely for project-card styling if unnecessary

---

## Current / Selected Work

Current work should occupy the primary visual position in the section.

Each project should communicate four things:

**Problem**  
What problem or opportunity existed?

**Built**  
What system, application, workflow, or integration was created?

**Technologies**  
What meaningful technologies were involved?

**Outcome**  
What changed as a result?

Avoid turning every card into a résumé bullet list.

---

### Studyapp

**Type:** Full-stack / Applied AI Learning System

A deployed learning application that turns source material into targeted practice,
evaluates learner responses, maintains mastery state, and determines what should
be studied next.

Representative themes:

- Full-stack product development
- AI-assisted question and evaluation workflows
- Deterministic and model-assisted grading
- Authentication and deployed application architecture
- Persistent mastery and learning-state updates
- Production testing, debugging, and deployment

Card treatment should favor the actual product/UI rather than abstract AI imagery.

---

### Evidence-Gated AI Enrichment

**Type:** Agentic Workflow / AI Systems

An agentic enrichment and qualification system designed around evidence quality
rather than unsupported model inference.

Representative themes:

- Tool-using AI agent workflows
- Verified account data
- External enrichment
- Evidence-gated policy
- Conflict and missing-data handling
- Structured outputs
- APIs and Python orchestration
- Evaluation and reliability

The project should demonstrate architectural judgment and model reliability,
not simply "AI automation."

---

### Accel IQ — AI & Automation Systems

**Type:** Selected Client Systems / Solution Architecture

A curated view of selected systems designed and implemented through Accel IQ.

Potential themes:

- AI-enabled operational workflows
- Agentic systems
- CRM and business-system integrations
- API and webhook integrations
- Enrichment and reconciliation
- Internal AI tooling
- Evaluation infrastructure
- Workflow automation and orchestration

Use anonymized client examples where confidentiality requires it.

This should communicate the range of real business systems built rather than
present Accel IQ as a generic consulting-services page.

---

### Interactive Resume V2

**Type:** React Application / Modernization

Originally built from scratch as an early React portfolio and modernized in 2026
while preserving its original interaction and design language.

Representative themes:

- React application modernization
- Legacy dependency migration
- Security remediation
- TypeScript
- Responsive design
- Accessibility
- Dependency reduction
- Preservation of product/design intent during refactoring

This project may link directly to its own GitHub repository and project history.

---

## Earlier Work

Earlier projects should remain visible as evidence of Ben's original development
work and technical evolution.

They should have lower visual priority than current work but retain much of their
original personality.

### Environmental Activism

Preserve.

Early React-based environmental information and advocacy project.

Historical technologies may include:
React · JavaScript · Bootstrap / Semantic UI · Firebase / deployment tooling

### Composer's Personal Website

Preserve.

Multimedia website created for a composer, combining custom design and development
with media-oriented presentation.

Historical technologies may be shown alongside the project rather than included
in the primary capabilities section.

### Hunger & Homelessness Project

Preserve.

Early full-stack project focused on resources and outreach around hunger and
homelessness.

Historical technologies:
Ruby on Rails · JavaScript · PostgreSQL · AWS S3

### Photojournal

Decision: REVIEW

Personal React-based photojournal project.

Retain only if Ben still wants this personal project publicly featured.
It could alternatively appear in a smaller "Experiments & Personal Work" group.

---

## Project Card Interaction

Preserve the spirit of the existing project tiles:

1. Project image and title are immediately visible
2. Hover / focus introduces a subtle dark overlay
3. Supporting description moves gently into view
4. Technologies and project links appear
5. Interaction remains usable on touch devices without requiring hover

Do not reproduce the original interaction literally if modern CSS can create
a cleaner and more accessible implementation.

### Visual Direction

- Favor large imagery over generic cards
- Avoid repetitive bordered SaaS-style boxes
- Current work may use screenshots, diagrams, or product imagery
- Earlier work can retain original photography/artwork
- Project titles should remain visually prominent
- Use technology labels sparingly
- Outcomes should have greater visual emphasis than tool lists
- Allow projects to feel materially different from one another

### Project Detail Strategy

Initial V2 does not require separate project-detail pages.

A project card may link to:

- Live application
- GitHub repository
- Case study
- Expanded modal/drawer if eventually useful

Start simple and add deeper project storytelling only where the project warrants it.

---

## 6. Quotes

Status: APPROVED DIRECTION
Decision: KEEP / CURATE

Quotes are part of the original site's personality and should remain as
interstitial elements between major sections.

They should feel intentional and slightly unexpected rather than decorative.

### Preserve

- Quotes as transitions in the scrolling journey
- Large-scale editorial presentation
- Contrast between résumé content and personal/cultural references
- The slightly literary quality of the original site

### Current Quote Decisions

**Keep**

"Be a first-rate version of yourself, instead of a second-rate version of somebody else."
— Judy Garland

"Courage is grace under pressure."
— Ernest Hemingway

**Replace / Review**

"No good deed goes unpunished."
— Oscar Wilde

Review any remaining original quote before implementation.

### Direction

Use approximately 3–4 quotes across the entire experience rather than placing
one mechanically after every section.

Potential placement:

Profile → quote → Experience

Experience → quote → Capabilities

Projects → quote → Contact

Quotes should provide breathing room between dense sections and contribute to
the narrative rhythm of the page.

### Design Direction

- Large editorial typography
- Significant whitespace
- Quiet entrance animation as the quote enters the viewport
- Attribution visually secondary
- No quote cards or boxed treatments
- Avoid oversized quotation-mark graphics
- Preserve the atmospheric quality of the original
- Motion must respect prefers-reduced-motion

Final quote selection:
REVIEW BEFORE IMPLEMENTATION

---

## 7. Contact

Status: APPROVED
Decision: EVOLVE

### Preserve

- Minimal ending
- Direct social/contact links
- Simple visual composition
- Personal rather than corporate tone

### Primary Links

- GitHub
- LinkedIn
- Email

A downloadable résumé may be added later if it improves the experience,
but it is not required for initial V2.

### Contact Direction

The final section should feel like the conclusion of the scrolling journey,
not another résumé information block.

Suggested structure:

**Connect**

Interested in applied AI, products, integrations, and the systems behind them.

GitHub · LinkedIn · Email

Final wording can be refined during implementation, but keep the copy short.

### Design Direction

- Generous whitespace
- Large, simple closing typography
- Retain the existing accent color relationship
- Use recognizable icons where helpful
- Include visible text labels rather than relying entirely on icons
- Subtle hover/focus movement is appropriate
- No contact form required
- Avoid excessive calls to action
- Keep the ending quiet and confident

### Engineering Direction

- Replace Semantic UI icons with a lightweight icon solution or simple SVGs
- Use semantic anchor elements
- Provide accessible labels
- Support keyboard focus states
- Open external profile links appropriately
- Do not implement hover behavior through React state when CSS is sufficient
- Remove unused Emotion/styling dependencies

---

# Design Direction

Preserve the muted, atmospheric quality of the original.

Potential direction:

- Charcoal / slate
- Warm off-white
- Desaturated sage or blue-grey accent
- Strong editorial typography
- Generous whitespace
- Subtle depth
- Restrained motion
- Avoid generic SaaS-dashboard aesthetics
- Avoid obvious portfolio templates
- Avoid excessive cards, gradients, glow effects, or AI-site clichés

The finished site should still look like something Ben designed.

---

# Historical Context

Retain some evidence of the site's history.

Potential footer/about note:

"Originally built from scratch as an early React portfolio. Modernized in 2026
while preserving the original interaction and design language."

Final wording:
TBD

---

# Engineering Requirements

- No known critical/high production dependency vulnerabilities
- Modern supported dependency versions
- Responsive desktop/tablet/mobile layouts
- Semantic HTML
- Keyboard navigation
- Reduced-motion support
- Reasonable Lighthouse performance
- Minimal unnecessary dependencies
- Production Vercel deployment verified
- No secrets in repository
- Clean build and lint
- Preserve useful Git history

---

# Workflow

For each section choose:

- KEEP
- EVOLVE
- REPLACE

Content/design decisions should be approved here before implementation.

Coding agents should use this document as the source of truth and should not invent
professional content or substantially redesign approved sections without instruction.

---

# Launch Checklist

- [ ] Hero approved
- [ ] Profile approved
- [ ] Experience approved
- [ ] Capabilities approved
- [ ] Projects approved
- [ ] Quotes approved
- [ ] Contact approved
- [ ] Technical migration complete
- [ ] Desktop reviewed
- [ ] Mobile reviewed
- [ ] Accessibility reviewed
- [ ] Dependency/security audit reviewed
- [ ] Production build passes
- [ ] Vercel preview reviewed
- [ ] README updated
- [ ] Merge into production branch