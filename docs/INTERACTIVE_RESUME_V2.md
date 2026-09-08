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

Status: REVIEW

Current direction:
- Preserve the full-screen opening
- Preserve the sense of depth / parallax
- Preserve Ben Paysen as the dominant element
- Preserve the scroll invitation
- Modernize typography
- Replace outdated professional positioning
- Improve responsive behavior
- Use restrained animation

Decision:
TBD

Approved copy:
TBD

Design notes:
TBD

---

## 2. Profile

Status: REVIEW

Current direction:
- Rewrite substantially
- Explain the professional trajectory rather than presenting Ben only as a web developer
- Connect software development, solutions engineering, product, enterprise systems,
  Accel IQ, and applied AI
- Keep the section personal and concise

Decision:
TBD

Approved copy:
TBD

---

## 3. Experience

Status: REVIEW

Current direction:
- Preserve a timeline/journey concept
- Update all dates and roles
- Emphasize progression and transferable technical experience
- Include Accel IQ prominently
- Avoid simply reproducing LinkedIn or a traditional resume

Decision:
TBD

Approved content:
TBD

---

## 4. Abilities / Capabilities

Status: REPLACE

Remove star ratings.

Potential capability groups:

### Applied AI
Agentic systems, LLM workflows, retrieval, evaluation, prompt/system design

### Software & Platforms
Python, TypeScript/JavaScript, React/Next.js, APIs, SQL, backend services

### Integrations & Data
REST APIs, webhooks, CRM/business systems, data pipelines,
enrichment and reconciliation

### Architecture & Delivery
Technical discovery, prototyping, debugging, testing, deployment,
system hardening

### Business & Product
Solution architecture, product discovery, enterprise systems,
technical stakeholder alignment

Final section title:
TBD

---

## 5. Projects

Status: EVOLVE

Current work should appear first.

Potential current work:
- Accel IQ systems
- Applied AI / agentic workflow projects
- Studyapp
- Enrichment / evaluation systems
- Production integrations

Project cards should communicate:

- Problem
- What I built
- Technologies
- Outcome

Preserve a curated selection of original projects under an "Earlier Work" concept.

Old projects become evidence of the development journey rather than the primary portfolio.

---

## 6. Quotes

Status: KEEP / EVOLVE

Quotes are part of the site's identity.

- Review current quotes individually
- Keep the ones that still fit
- Replace where appropriate
- Use as quiet transitions between sections
- Avoid overusing them

---

## 7. Contact

Status: EVOLVE

- Keep simple
- Modernize links and professional positioning
- GitHub
- LinkedIn
- Appropriate direct contact
- Possibly resume/download link later

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