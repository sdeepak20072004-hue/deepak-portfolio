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
    summary: "An experimental AR/VFX workspace exploring camera-based gestures and visual effects with a server-side AI intent layer.",
    stack: ["React", "TypeScript", "Express", "MediaPipe", "Google GenAI SDK"],
    repositoryVisibility: "Private source",
    overview: "VisionFX is a prototype exploring how camera input, computer-vision signals, and a controlled set of application actions can work together in an interactive visual-effects experience.",
    evidence: [
      "The repository includes a React, TypeScript, and Vite application foundation.",
      "The package manifest includes MediaPipe camera utilities and face, hand, and pose packages.",
      "The server includes a health endpoint and a declared list of permitted visual-effect action intents.",
      "The Google GenAI SDK is included for server-side AI-assisted intent handling."
    ],
    limitations: [
      "A dependency or declared action does not prove every feature works end-to-end.",
      "Camera permissions, model loading, action mapping, failure states, and browser compatibility need hands-on verification.",
      "The source repository is private; no public source-code link is provided."
    ],
    nextMilestones: [
      "Record a short demo showing only features that work reliably.",
      "Create a feature-by-feature verification checklist and test the camera-off / permission-denied path.",
      "Add setup instructions, screenshots, test results, and known limitations to the case study."
    ]
  },
  {
    slug: "dis-ai",
    title: "DIS AI",
    category: "AI platform architecture",
    status: "In development · private source",
    summary: "A long-term AI operating-system vision, with current work focused on repository foundations, developer tooling, and service boundaries.",
    stack: ["Python", "FastAPI foundation", "PostgreSQL architecture", "Monorepo tooling", "Git workflow"],
    repositoryVisibility: "Private source",
    overview: "DIS AI (Deepak IT Solutions AI) is a long-term project exploring an extensible platform for specialised AI agents and future memory, knowledge, workflow, and compute capabilities. The current repository README describes foundation work rather than a finished AI operating system.",
    evidence: [
      "The repository has documented development setup and contributor conventions.",
      "The README identifies a minimal FastAPI/PostgreSQL architecture foundation.",
      "The monorepo is organised around future platform areas such as agents, services, SDK, knowledge, memory, observability, and security."
    ],
    limitations: [
      "The repository README explicitly says major product features—including LLM chat, memory features, UI, authentication, and feature APIs—are not yet present in the documented snapshot.",
      "Architecture diagrams must separate implemented foundations from future plans.",
      "The repository is private and its source code will not be exposed on this site."
    ],
    nextMilestones: [
      "Publish a safe architecture overview with implemented / planned labels.",
      "Choose one small end-to-end feature and include its tests before describing it as implemented.",
      "Document a reproducible local setup and the result of quality checks."
    ]
  },
  {
    slug: "aegishealth",
    title: "AegisHealth Connect",
    category: "HealthTech · AI prototype",
    status: "Prototype · educational",
    summary: "A HealthTech exploration with a server-side AI symptom-analysis route intended for preliminary, non-diagnostic information.",
    stack: ["React", "TypeScript", "Express", "Google GenAI SDK", "API design"],
    repositoryVisibility: "Private source",
    overview: "AegisHealth Connect explores how a web interface and a server-side AI route might support a preliminary symptom-information workflow. It is an educational software prototype and is not a medical device or clinical service.",
    evidence: [
      "The repository contains a React/Vite frontend foundation and an Express server.",
      "The server includes an /api/health route and an /api/ai/symptom-analysis route.",
      "The symptom-analysis handler asks for symptom information and is described in code as preliminary rather than diagnostic."
    ],
    limitations: [
      "Health-related outputs can be wrong or incomplete and must not be treated as diagnosis or treatment advice.",
      "Use synthetic/demo inputs only; do not add real patient data to a public demo.",
      "Labels in code about regulatory standards or encryption are not independent proof of compliance or security certification."
    ],
    nextMilestones: [
      "Keep a clear not-medical-advice warning visible in the interface and case study.",
      "Review input validation, error handling, privacy, retention, and server-side secrets.",
      "Remove unverified compliance claims unless supported by a real implementation review and appropriate independent evidence."
    ],
    safetyNote: "Educational prototype only. It does not provide medical diagnosis, and it must not replace advice from a qualified health professional."
  },
  {
    slug: "portfolio-contact-system",
    title: "Portfolio & Contact System",
    category: "Full-stack web · personal product",
    status: "Public source · email delivery to verify",
    summary: "A responsive portfolio with a server-side contact endpoint, input validation, basic bot protection, and Resend integration.",
    stack: ["Next.js", "React", "TypeScript", "Zod", "Resend API"],
    repositoryVisibility: "Public source",
    repoUrl: "https://github.com/sdeepak20072004-hue/deepak-portfolio",
    overview: "This portfolio is itself a practical web project. The UI, contact form, and server route are maintained in a public repository; the next milestone is to verify email delivery, production hosting, accessibility, and performance.",
    evidence: [
      "The project uses Next.js App Router, React, TypeScript, Tailwind CSS, and Lucide icons.",
      "The contact route validates submitted data server-side with Zod.",
      "The route contains a honeypot field and a small in-memory request throttle.",
      "The server calls Resend using environment variables so the API key is not embedded in client-side code."
    ],
    limitations: [
      "The recorded Resend log showed a domain-not-verified error for an example.com sender; real delivery must be retested with an allowed sender.",
      "The in-memory throttle is only a basic per-process measure, not production-grade rate limiting for a multi-instance deployment.",
      "A production URL, build checks, and a post-deployment contact test still need to be captured as release evidence."
    ],
    nextMilestones: [
      "Verify the Resend sender/domain and test the complete email flow.",
      "Run typecheck, lint, and production build; address any failures.",
      "Deploy the portfolio and record Lighthouse, mobile, keyboard-navigation, and contact-form test results."
    ]
  }
];
