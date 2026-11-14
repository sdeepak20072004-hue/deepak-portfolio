export type PipelineStage = {
  step: string;
  title: string;
  detail: string;
  state: "repository evidence" | "prototype / verify" | "planned next step";
};

export type ProjectTool = {
  name: string;
  role: string;
  evidence: "declared in repository" | "documented foundation" | "needs runtime verification";
};

export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  status: string;
  summary: string;
  stack: string[];
  repositoryVisibility: "Private source" | "Public source";
  repoUrl?: string;
  overview: string;
  architecture: string;
  tools: ProjectTool[];
  pipeline: PipelineStage[];
  evidence: string[];
  limitations: string[];
  nextMilestones: string[];
  safetyNote?: string;
};

export const projects: PortfolioProject[] = [
  {
    slug: "visionfx",
    title: "VisionFX",
    category: "Computer vision · AR / VFX",
    status: "Prototype · private source",
    summary:
      "An experimental AR/VFX workspace exploring camera-based gestures and visual effects with a server-side AI intent layer.",
    stack: ["React", "TypeScript", "Vite", "Express", "MediaPipe", "Google GenAI SDK"],
    repositoryVisibility: "Private source",
    overview:
      "VisionFX explores an interactive visual-effects workflow: camera input is interpreted through computer-vision components, then a controlled intent layer is used to describe which visual action the application may perform. It is an experimental project, not a claim that every face, hand, pose, or AI-assisted effect is production-ready.",
    architecture:
      "Browser experience (React + TypeScript + Vite) → camera / vision packages (MediaPipe) → server-side intent layer (Express + Google GenAI SDK) → allowlisted effect intent → UI action. The package and server declarations provide evidence for these building blocks; a complete live path still needs a recorded end-to-end test.",
    tools: [
      {
        name: "React",
        role: "Builds the interactive browser interface and component-based experience.",
        evidence: "declared in repository",
      },
      {
        name: "TypeScript",
        role: "Adds types to the application code and UI contracts.",
        evidence: "declared in repository",
      },
      {
        name: "Vite",
        role: "Provides the frontend development and build toolchain.",
        evidence: "declared in repository",
      },
      {
        name: "MediaPipe packages",
        role: "Provide face, hand, and pose computer-vision utilities for camera experiments.",
        evidence: "declared in repository",
      },
      {
        name: "Express",
        role: "Hosts the server-side application layer and health endpoint.",
        evidence: "declared in repository",
      },
      {
        name: "Google GenAI SDK",
        role: "Included for server-side AI-assisted intent handling; successful runtime behavior still needs verification.",
        evidence: "needs runtime verification",
      },
    ],
    pipeline: [
      {
        step: "01",
        title: "Camera input",
        detail:
          "The browser requests camera access. Permission-denied, camera-off, and device-switch states should be tested as part of the demo.",
        state: "prototype / verify",
      },
      {
        step: "02",
        title: "Vision signals",
        detail:
          "MediaPipe face, hand, and pose packages are declared in the project dependencies for computer-vision experiments.",
        state: "repository evidence",
      },
      {
        step: "03",
        title: "Intent handling",
        detail:
          "The Express server contains a health endpoint and a declared set of permitted visual-effect action intents.",
        state: "repository evidence",
      },
      {
        step: "04",
        title: "AI-assisted interpretation",
        detail:
          "The Google GenAI SDK is included for server-side intent handling. Model response, validation, and failure behavior need an end-to-end test.",
        state: "prototype / verify",
      },
      {
        step: "05",
        title: "Effect action",
        detail:
          "An allowlisted intent can be mapped to a visual action. Only actions demonstrated in a recorded test should be marked as shipped.",
        state: "planned next step",
      },
    ],
    evidence: [
      "The repository includes a React, TypeScript, and Vite application foundation.",
      "The package manifest includes MediaPipe camera utilities and face, hand, and pose packages.",
      "The server includes a health endpoint and a declared list of permitted visual-effect action intents.",
      "The Google GenAI SDK is included for server-side AI-assisted intent handling.",
    ],
    limitations: [
      "A dependency or declared action does not prove every feature works end-to-end.",
      "Camera permissions, model loading, action mapping, failure states, and browser compatibility need hands-on verification.",
      "AI output must be validated against a strict allowlist before it can trigger an application action.",
      "The source repository is private; no public source-code link is provided.",
    ],
    nextMilestones: [
      "Record a short demo showing only features that work reliably.",
      "Create a feature-by-feature verification checklist and test camera-off / permission-denied paths.",
      "Add request validation and explicit error handling around AI-assisted intent responses.",
      "Publish safe setup notes, screenshots, test results, and known limitations in this case study.",
    ],
  },
  {
    slug: "dis-ai",
    title: "DIS AI",
    category: "AI platform architecture",
    status: "In development · private source",
    summary:
      "A long-term AI platform foundation, with current documentation focused on backend setup, service boundaries, and the architecture for future agent capabilities.",
    stack: ["Python", "FastAPI foundation", "PostgreSQL architecture", "Monorepo tooling", "Git / GitHub"],
    repositoryVisibility: "Private source",
    overview:
      "DIS AI (Deepak IT Solutions AI) is a long-term platform project. Its product direction includes specialised agents, memory, knowledge, workflows, integrations, and future compute work. The public-safe case study focuses on the documented foundation and separates it from capabilities that remain planned or under active development.",
    architecture:
      "Current documented foundation: Python / FastAPI backend setup + PostgreSQL architecture + monorepo conventions. Future architecture areas include agents, knowledge, memory, workflows, observability, security, and compute. These future areas are roadmap boundaries—not proof that every service is already implemented.",
    tools: [
      {
        name: "Python",
        role: "Primary backend language in the documented platform foundation.",
        evidence: "documented foundation",
      },
      {
        name: "FastAPI",
        role: "The README identifies a minimal API/backend foundation.",
        evidence: "documented foundation",
      },
      {
        name: "PostgreSQL",
        role: "Identified as the database foundation in repository documentation.",
        evidence: "documented foundation",
      },
      {
        name: "Monorepo tooling",
        role: "Organises current and planned platform areas under shared repository conventions.",
        evidence: "documented foundation",
      },
      {
        name: "Git / GitHub",
        role: "Tracks changes and supports the documented contributor workflow.",
        evidence: "documented foundation",
      },
    ],
    pipeline: [
      {
        step: "01",
        title: "Repository conventions",
        detail:
          "Development setup, contributor conventions, and a shared monorepo structure provide the project foundation.",
        state: "repository evidence",
      },
      {
        step: "02",
        title: "API foundation",
        detail:
          "The repository README documents a minimal FastAPI backend foundation; endpoint coverage should be verified before describing product features as complete.",
        state: "repository evidence",
      },
      {
        step: "03",
        title: "Data foundation",
        detail:
          "PostgreSQL is identified as the database foundation in the documented architecture.",
        state: "repository evidence",
      },
      {
        step: "04",
        title: "Platform modules",
        detail:
          "Agents, services, SDK, knowledge, memory, observability, and security are named as platform areas in the repository structure.",
        state: "prototype / verify",
      },
      {
        step: "05",
        title: "One vertical feature",
        detail:
          "Next milestone: select one small feature, implement its API and data flow, then attach tests and repeatable setup evidence.",
        state: "planned next step",
      },
    ],
    evidence: [
      "The repository has documented development setup and contributor conventions.",
      "The README identifies a minimal FastAPI / PostgreSQL architecture foundation.",
      "The monorepo is organised around future platform areas such as agents, services, SDK, knowledge, memory, observability, and security.",
    ],
    limitations: [
      "The repository README explicitly says major product features—including LLM chat, memory features, UI, authentication, and feature APIs—are not yet present in the documented snapshot.",
      "Architecture diagrams must separate implemented foundations from future plans.",
      "No private source files, credentials, internal endpoint details, or secret architecture are exposed on this public portfolio.",
      "The repository is private and its source code will not be exposed on this site.",
    ],
    nextMilestones: [
      "Publish a safe architecture overview with implemented / planned labels.",
      "Choose one small end-to-end feature and include its tests before describing it as implemented.",
      "Document a reproducible local setup and the result of quality checks.",
      "Add service-level observability and security notes as those components become verifiable.",
    ],
  },
  {
    slug: "portfolio-contact-system",
    title: "Portfolio & Contact System",
    category: "Full-stack web · personal product",
    status: "Public source · email delivery to verify",
    summary:
      "A responsive Next.js portfolio with a server-side contact endpoint, Zod validation, a honeypot field, basic in-memory throttling, and Resend integration.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS 4", "Zod", "Resend API"],
    repositoryVisibility: "Public source",
    repoUrl: "https://github.com/sdeepak20072004-hue/deepak-portfolio",
    overview:
      "This portfolio is itself a practical full-stack project. The frontend collects an enquiry, a Next.js route validates it on the server, and the route can send an email through Resend when the required environment variables and sender configuration are valid.",
    architecture:
      "Next.js page + React contact form → POST /api/contact → JSON parsing → Zod schema validation → hidden honeypot check → in-memory per-process throttle → server-only Resend API call → success / error response rendered in the form.",
    tools: [
      {
        name: "Next.js App Router",
        role: "Provides the application routes, page rendering, and server API route.",
        evidence: "declared in repository",
      },
      {
        name: "React + TypeScript",
        role: "Builds the interface and typed form interaction states.",
        evidence: "declared in repository",
      },
      {
        name: "Tailwind CSS 4",
        role: "Provides the styling foundation for the responsive interface.",
        evidence: "declared in repository",
      },
      {
        name: "Zod",
        role: "Validates contact payload fields on the server before email handling.",
        evidence: "declared in repository",
      },
      {
        name: "Resend API",
        role: "Delivers messages from the server when the API key and sender / recipient variables are configured.",
        evidence: "needs runtime verification",
      },
      {
        name: "Lucide React",
        role: "Provides the interface icon set.",
        evidence: "declared in repository",
      },
    ],
    pipeline: [
      {
        step: "01",
        title: "Form input",
        detail:
          "The React contact form collects name, email, optional subject, message, and a hidden honeypot field.",
        state: "repository evidence",
      },
      {
        step: "02",
        title: "API request",
        detail:
          "The browser sends a JSON POST request to /api/contact; the server rejects oversized or invalid JSON submissions.",
        state: "repository evidence",
      },
      {
        step: "03",
        title: "Validation & bot checks",
        detail:
          "Zod validates the input. A non-empty honeypot is quietly accepted, and a small per-process Map throttles repeated requests.",
        state: "repository evidence",
      },
      {
        step: "04",
        title: "Email provider",
        detail:
          "The server calls Resend with RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL. These values must remain server-side.",
        state: "prototype / verify",
      },
      {
        step: "05",
        title: "User feedback",
        detail:
          "The form displays a success or error response and provides a direct email fallback. Successful delivery still needs a real inbox test.",
        state: "prototype / verify",
      },
    ],
    evidence: [
      "The project uses Next.js App Router, React, TypeScript, Tailwind CSS 4, and Lucide icons.",
      "The contact route validates submitted data server-side with Zod.",
      "The route contains a honeypot field and a small in-memory request throttle.",
      "The server calls Resend using environment variables so the API key is not embedded in client-side code.",
    ],
    limitations: [
      "Email delivery is not confirmed until a valid Resend API key, permitted sender, recipient, and live inbox test are configured.",
      "The in-memory throttle is a basic per-process measure, not production-grade rate limiting for a multi-instance deployment.",
      "A production URL, build checks, and a post-deployment contact test still need to be captured as release evidence.",
    ],
    nextMilestones: [
      "Verify the Resend sender/domain and test the complete email flow.",
      "Run typecheck, lint, and production build; address any failures.",
      "Deploy the portfolio and record Lighthouse, mobile, keyboard-navigation, and contact-form test results.",
      "Replace the in-memory throttle with a shared rate limiter before relying on it for public production traffic.",
    ],
  },
];
