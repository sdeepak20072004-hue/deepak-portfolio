<div align="center">

# Deepak Saini — Developer Portfolio

### Full-Stack Development · AI Experiments · Computer Vision · Engineering in Public

A visual portfolio of the projects I build, the tools I explore, and the engineering process behind each project.

<p>
  <a href="https://github.com/sdeepak20072004-hue"><img src="https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github" alt="GitHub profile" /></a>
  <a href="https://www.linkedin.com/in/deepak-saini-0a384541a"><img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn profile" /></a>
  <a href="mailto:Sdeepak20072004@gmail.com"><img src="https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email Deepak" /></a>
</p>

<p>
  <img src="https://img.shields.io/badge/Next.js-16.4.0-000000?style=flat-square&logo=nextdotjs" alt="Next.js 16.4.0" />
  <img src="https://img.shields.io/badge/React-19.3.0-149ECA?style=flat-square&logo=react" alt="React 19.3.0" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=flat-square&logo=tailwindcss" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Status-In_Development-D97706?style=flat-square" alt="In development" />
</p>

</div>

---

## Contents

- [About](#about)
- [Portfolio highlights](#portfolio-highlights)
- [Featured projects](#featured-projects)
- [Technology map](#technology-map)
- [Engineering workflows](#engineering-workflows)
- [Application architecture](#application-architecture)
- [Run locally](#run-locally)
- [Contact form configuration](#contact-form-configuration)
- [Quality checks](#quality-checks)
- [Deployment](#deployment)
- [Privacy and security](#privacy-and-security)
- [Roadmap](#roadmap)
- [Connect](#connect)

---

## About

Hi, I'm **Deepak Saini**, a B.Voc Information Technology student at **Bhartiya Skill Development University, Jaipur, Rajasthan, India**.

I am developing practical skills in full-stack development, backend engineering, AI/ML, computer vision, and cloud computing. I learn by taking an idea, creating a small working version, running it, debugging it, and documenting what is verified.

This portfolio is designed to be more than a list of technologies. Each featured project has a case study explaining its purpose, tools, architecture, implementation pipeline, repository evidence, limitations, and next milestones.

> **My approach: Build small. Test honestly. Document clearly. Improve continuously.**

## Portfolio highlights

| Area | What's included |
|---|---|
| Personal introduction | Education, current focus, profile links, and developer goals |
| Project case studies | Separate pages for VisionFX, DIS AI, and the portfolio contact system |
| Architecture views | High-level component and request-flow diagrams |
| Technology map | Frontend, backend, AI / computer vision, data, and cloud learning areas |
| Implementation pipelines | Numbered stages with evidence, verification, and planned labels |
| Contact | Interactive form connected to a server-side API route |
| Responsive interface | Desktop, tablet, and mobile layouts |
| Accessibility basics | Semantic sections and visible keyboard focus treatment |

## Featured projects

The portfolio presents three case studies. Private repositories remain private; public pages expose only safe, high-level technical information.

### 01 — VisionFX

**Status:** Prototype · Private source  
**Category:** Computer vision · AR / VFX

An experimental AR/VFX workspace exploring camera-based gestures, computer-vision signals, and an AI-assisted intent layer.

**Tools documented**

| Tool | Role in the project |
|---|---|
| React | Interactive browser interface |
| TypeScript | Application types and UI contracts |
| Vite | Frontend development and build toolchain |
| MediaPipe packages | Face, hand, and pose computer-vision utilities |
| Express | Server-side application layer and health endpoint |
| Google GenAI SDK | Included for server-side intent handling; runtime behavior needs verification |

**High-level implementation pipeline**

```text
Browser UI
   |
   v
Camera permission and input
   |
   v
MediaPipe vision packages
   |
   v
Server-side intent layer (Express)
   |
   v
AI-assisted interpretation (Google GenAI SDK)
   |
   v
Allowlisted visual-effect intent
   |
   v
UI action (end-to-end verification required)
```

**Verification notes**

- Dependencies and server declarations do not prove every feature works end-to-end.
- Camera permission states, model loading, browser compatibility, action mapping, and failure handling need hands-on tests.
- AI output must be validated against an allowlist before it can trigger an application action.
- The source repository is private and is not linked publicly.

### 02 — DIS AI

**Status:** In development · Private source  
**Category:** AI platform architecture

DIS AI (Deepak IT Solutions AI) is a long-term AI platform project. This case study focuses on the documented backend foundations and separates them from the wider product roadmap.

**Documented foundation**

| Tool / area | Role |
|---|---|
| Python | Backend language |
| FastAPI | Minimal API foundation identified in repository documentation |
| PostgreSQL | Database foundation identified in architecture documentation |
| Monorepo conventions | Organisation for current and future platform areas |
| Git / GitHub | Source control and contributor workflow |

**High-level architecture**

```text
DOCUMENTED FOUNDATION
Python / FastAPI backend
          |
          v
PostgreSQL architecture
          |
          v
Monorepo service boundaries

FUTURE ROADMAP (planned / under development)
Agents - Knowledge - Memory - Workflows
Observability - Security - Compute
```

**Status notes**

- Agents, memory, knowledge, workflows, observability, security, and compute are roadmap areas—not a claim that every service is complete.
- The documented repository snapshot identifies major product capabilities that are not yet present in that snapshot.
- Private source code, credentials, internal endpoints, and sensitive architecture are not published here.

### 03 — Portfolio & Contact System

**Status:** Public source · Email delivery requires configuration and a live test  
**Category:** Full-stack web application

This portfolio is also a practical full-stack project. It uses a React contact form, a Next.js server route, server-side validation, basic bot filtering, request throttling, and Resend integration.

**Tools**

| Tool | Role |
|---|---|
| Next.js App Router | Page rendering and API route |
| React + TypeScript | User interface and typed form states |
| Tailwind CSS 4 | Styling foundation |
| Zod | Server-side payload validation |
| Resend API | Email delivery provider integration |
| Lucide React | Interface icons |

**Contact request pipeline**

```text
Contact form
    |
    v
POST /api/contact
    |
    v
JSON parsing and payload-size check
    |
    v
Zod schema validation
    |
    v
Honeypot check
    |
    v
In-memory per-process throttle
    |
    v
Resend API (server-side credentials)
    |
    v
Success / error response in the form
```

**Current limitations**

- Email delivery requires a valid Resend API key and an approved sender address/domain.
- The in-memory throttle is per process; it is not production-grade rate limiting for serverless or multi-instance deployments.
- A real inbox test is required before the contact form can be described as fully verified.

[View the public source repository](https://github.com/sdeepak20072004-hue/deepak-portfolio)

## Technology map

This table separates technologies present in this portfolio repository from tools documented in other project case studies or current learning areas.

| Area | Technologies | Context |
|---|---|---|
| Frontend | Next.js, React, TypeScript, Tailwind CSS 4 | Used by this portfolio |
| Icons | Lucide React | Used by this portfolio |
| Validation | Zod | Used by the contact API |
| Email | Resend API | Integrated; delivery configuration required |
| Vision prototype | MediaPipe | Dependency evidence in VisionFX |
| AI integration | Google GenAI SDK | Included in VisionFX; runtime verification required |
| Backend foundation | Python, FastAPI, PostgreSQL | Documented DIS AI foundation |
| Developer workflow | Git, GitHub, npm | Repository and local development |
| Learning areas | AWS, Azure, Linux, ML, DL, LLMs | Learning roadmap; not all are implemented here |

## Engineering workflows

The project follows a repeatable development and release workflow.

| Stage | Activity | Evidence to keep |
|---|---|---|
| 01 — Understand | Define the problem, audience, and a small milestone | Scope and acceptance notes |
| 02 — Build | Implement the UI, API, or prototype | Source changes and setup instructions |
| 03 — Verify | Run static checks and manual tests | Command output and test notes |
| 04 — Document | Explain architecture, tools, and limitations | README and project case study |
| 05 — Release | Deploy only after review | Deployment URL and post-deployment checks |

## Application architecture

The portfolio uses the Next.js App Router. The main UI lives in <code>src/app</code>, shared project information lives in <code>src/lib/projects.ts</code>, and the contact form submits to a server route.

<details>
<summary><strong>View repository structure</strong></summary>

```text
deepak-portfolio/
├── public/
│   └── deepak-profile.jpg
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── ContactForm.tsx
│   └── lib/
│       └── projects.ts
├── .env.example
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── tsconfig.json
```

</details>

### Project case-study data flow

```text
src/lib/projects.ts
       |
       +-------------> Homepage project cards
       |
       +-------------> /projects/[slug]
                            |
                            +-- Overview
                            +-- Architecture
                            +-- Tool roles and evidence
                            +-- Implementation pipeline
                            +-- Limitations
                            +-- Next milestones
```

## Run locally

### Prerequisites

- Node.js and npm compatible with the installed Next.js version.
- Git.
- PowerShell, Windows Terminal, or another command-line terminal.

### 1. Clone the repository

```powershell
git clone https://github.com/sdeepak20072004-hue/deepak-portfolio.git
cd deepak-portfolio
```

### 2. Install dependencies

```powershell
npm install
```

### 3. Start the development server

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Create and run a production build

```powershell
npm run typecheck
npm run lint
npm run build
npm run start
```

The production server uses the build created by the build command.

## Contact form configuration

The contact API reads its configuration from server-only environment variables.

| Variable | Purpose | Example |
|---|---|---|
| <code>RESEND_API_KEY</code> | Resend API credential | <code>re_your_api_key</code> |
| <code>CONTACT_FROM_EMAIL</code> | Sender identity approved by Resend | <code>Portfolio &lt;you@your-verified-domain.com&gt;</code> |
| <code>CONTACT_TO_EMAIL</code> | Inbox that receives enquiries | Your preferred inbox |

### Configure email delivery

1. Copy <code>.env.example</code> to <code>.env.local</code>.
2. Replace the placeholder Resend key with your own key.
3. Set <code>CONTACT_FROM_EMAIL</code> to a sender identity allowed by your Resend account.
4. Set <code>CONTACT_TO_EMAIL</code> to the inbox where you want to receive enquiries.
5. Restart the development server.
6. Submit a test message and confirm that it arrives in the intended inbox.

**Never commit <code>.env.local</code>.** Do not put API credentials in <code>NEXT_PUBLIC_*</code> variables, source code, screenshots, or public documentation.

If email is not configured, the API intentionally returns a helpful response and the page provides a direct email fallback.

## Quality checks

The following scripts are defined in <code>package.json</code>:

| Command | Purpose |
|---|---|
| <code>npm run typecheck</code> | TypeScript type check |
| <code>npm run lint</code> | ESLint checks |
| <code>npm run build</code> | Next.js production build |
| <code>npm run dev</code> | Local development server |
| <code>npm run start</code> | Start the production build locally |

Before release, manually verify:

- Homepage navigation and section links.
- Each project case-study route.
- Desktop, tablet, and mobile layouts.
- Keyboard navigation and visible focus states.
- Contact form validation and error handling.
- Resend delivery to the real recipient inbox.
- Production URL and post-deployment behavior.

A command being available does not mean it has passed on every commit. No automated test suite, successful production deployment, or confirmed email delivery is claimed until the relevant checks have actually been run and recorded.

## Deployment

The intended hosting platform is **Vercel** using the GitHub repository integration.

Recommended release sequence:

1. Push the reviewed code to the deployment branch.
2. Confirm that the Vercel project is connected to the correct GitHub repository.
3. Verify the framework preset and build settings.
4. Add <code>RESEND_API_KEY</code>, <code>CONTACT_FROM_EMAIL</code>, and <code>CONTACT_TO_EMAIL</code> as Vercel environment variables when email delivery is ready.
5. Deploy a preview and inspect the website on desktop and mobile.
6. Promote to production only after the build and contact flow have been verified.

The portfolio is not marked as production-deployed in this documentation. Add the live URL here after a successful production deployment.

## Privacy and security

- DIS AI and VisionFX source repositories are private and remain private.
- Case studies disclose only safe, high-level implementation information.
- API keys and credentials must remain server-side.
- The contact route validates submitted data with Zod and includes a hidden honeypot field.
- The in-memory rate limiter is a basic per-process safeguard, not a substitute for a shared production rate limiter.
- Do not publish <code>.env.local</code>, private source code, tokens, or internal service details.

## Roadmap

- [ ] Complete final responsive and browser testing of the redesigned portfolio.
- [ ] Run typecheck, lint, and production build on the release candidate.
- [ ] Configure and verify Resend email delivery.
- [ ] Deploy to Vercel and record the production URL.
- [ ] Capture real project demos and feature-level verification evidence.
- [ ] Replace the in-memory contact throttle with shared production-grade protection before relying on it at scale.
- [ ] Keep project case studies aligned with current repository evidence.

## Connect

<div align="center">

**Thanks for visiting my portfolio and GitHub repository.**

<a href="https://github.com/sdeepak20072004-hue">GitHub</a> ·
<a href="https://www.linkedin.com/in/deepak-saini-0a384541a">LinkedIn</a> ·
<a href="mailto:Sdeepak20072004@gmail.com">Email</a>

<sub>Built with Next.js · React · TypeScript · Tailwind CSS</sub>

</div>
