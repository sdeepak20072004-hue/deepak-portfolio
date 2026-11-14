"use client";

import { useState } from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, BrainCircuit, Check,
  Code2, GitBranch, Layers3, Link, Mail, Menu, Rocket, Sparkles,
  Terminal, Workflow, X, Zap,
} from "lucide-react";
import { projects } from "@/lib/projects";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Tech stack", href: "#stack" },
  { label: "Workflow", href: "#workflow" },
  { label: "Contact", href: "#contact" },
];

const stackGroups = [
  {
    id: "01",
    title: "Frontend & experience",
    level: "Building with",
    description: "Responsive interfaces, component-driven pages, and practical web experiences.",
    tools: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    accent: "cyan",
  },
  {
    id: "02",
    title: "Backend & integration",
    level: "Project evidence",
    description: "Server routes, structured request validation, and external API integration.",
    tools: ["Node.js", "Express", "REST APIs", "FastAPI foundation", "Zod", "Resend API"],
    accent: "violet",
  },
  {
    id: "03",
    title: "AI & computer vision",
    level: "Prototype / learning",
    description: "Exploring camera input, vision signals, and AI-assisted application workflows.",
    tools: ["MediaPipe", "Google GenAI SDK", "Machine learning", "Deep learning", "LLMs"],
    accent: "pink",
  },
  {
    id: "04",
    title: "Data, cloud & developer tools",
    level: "Learning foundations",
    description: "Building practical foundations for data, deployment, and repeatable development.",
    tools: ["Python", "PostgreSQL", "Git", "GitHub", "Linux", "Cloud computing", "AWS", "Azure"],
    accent: "blue",
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand",
    description: "Turn an idea into a small problem statement, user flow, and first milestone.",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "Build",
    description: "Choose a focused stack, implement the smallest useful version, and keep the code readable.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Verify",
    description: "Run type checks, linting, production builds, and manual feature tests. Record what passed.",
    icon: BadgeCheck,
  },
  {
    number: "04",
    title: "Document",
    description: "Explain architecture, dependencies, limitations, setup steps, and the next milestone.",
    icon: Layers3,
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <nav className="container nav" aria-label="Main navigation">
          <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">DS<span className="brand-mark-dot" /></span>
            <span>
              <span className="brand-name">Deepak Saini</span>
              <br />
              <small className="brand-sub muted">Developer · Builder · Learner</small>
            </span>
          </a>
          <div className="nav-links">
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
          <a className="button nav-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></a>
          <button
            className="mobile-menu"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="mobile-nav">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          </div>
        )}
      </header>

      <section id="home" className="container hero hero-advanced">
        <div className="hero-content">
          <span className="pill hero-pill"><span className="pulse" /> B.Voc IT Student <span className="pill-separator">/</span> Learning by building</span>
          <p className="eyebrow hero-kicker">Hello, I&apos;m Deepak</p>
          <h1 className="hero-name">Building ideas<br />into <span className="gradient-text">real software.</span></h1>
          <h2 className="hero-role">Full-Stack Development <span className="muted">&amp;</span> AI Experiments</h2>
          <p className="hero-copy">
            I build and test web experiences, explore AI and computer-vision prototypes, and document the engineering behind my work. My focus is learning in public through practical projects—not just listing technologies.
          </p>
          <div className="actions">
            <a className="button button-primary" href="#projects">Explore my projects <ArrowRight size={18} /></a>
            <a className="button button-ghost" href="#contact">Let&apos;s connect <ArrowUpRight size={17} /></a>
          </div>
          <div className="socials hero-socials">
            <a href="https://github.com/sdeepak20072004-hue" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a>
            <a href="https://www.linkedin.com/in/deepak-saini-0a384541a" target="_blank" rel="noreferrer"><Link size={17} /> LinkedIn</a>
            <a href="mailto:Sdeepak20072004@gmail.com"><Mail size={17} /> Email</a>
          </div>
          <div className="hero-principles">
            <span><i /> Build</span>
            <span><i /> Test</span>
            <span><i /> Document</span>
            <span><i /> Improve</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-aura visual-aura-one" />
          <div className="visual-aura visual-aura-two" />
          <aside className="profile-card enhanced-profile">
            <div className="profile-top">
              <span><span className="live-dot" /> Developer profile</span>
              <span className="profile-index">DS / 2026</span>
            </div>
            <div className="profile-main">
              <div className="avatar"><Image src="/deepak-profile.jpg" alt="Portrait of Deepak Saini" width={384} height={384} priority /></div>
              <div className="profile-identity">
                <h3>Deepak Saini</h3>
                <p>B.Voc · Information Technology</p>
                <span>Bhartiya Skill Development University</span>
                <span>Jaipur, Rajasthan, India</span>
              </div>
            </div>
            <div className="profile-focus">
              <div><Code2 size={17} /><span>Full-Stack</span><small>Web applications</small></div>
              <div><BrainCircuit size={17} /><span>AI & Computer Vision</span><small>Prototypes & learning</small></div>
            </div>
            <div className="terminal-card">
              <div className="terminal-bar">
                <span className="terminal-lights"><i /><i /><i /></span>
                <span>engineering-notes.txt</span>
                <Terminal size={14} />
              </div>
              <div className="terminal-lines">
                <p><b>01</b><span className="terminal-green">Build</span><em>small and real</em></p>
                <p><b>02</b><span className="terminal-blue">Test</span><em>what works</em></p>
                <p><b>03</b><span className="terminal-purple">Document</span><em>the evidence</em></p>
              </div>
            </div>
            <div className="profile-bottom"><span>Curious by nature</span><span>Consistent by practice <Sparkles size={14} /></span></div>
          </aside>
          <div className="floating-chip chip-top"><Zap size={15} /> Practical learning</div>
          <div className="floating-chip chip-bottom"><GitBranch size={15} /> Project-first mindset</div>
        </div>

        <a href="#about" aria-label="Scroll to about section" className="scroll-cue"><ArrowDown size={19} /></a>
      </section>

      <section className="container proof-strip" aria-label="Portfolio overview">
        <div><strong>03</strong><span>Featured projects</span></div>
        <div><strong>02</strong><span>Private case studies</span></div>
        <div><strong>01</strong><span>Public codebase</span></div>
        <div className="proof-note"><Sparkles size={16} /> Evidence over exaggeration</div>
      </section>

      <section id="about" className="section section-alt">
        <div className="container about-grid">
          <div className="about-heading">
            <p className="eyebrow"><span>01</span> / About me</p>
            <h2 className="about-title">I want my work to be easy to inspect—not just easy to describe.</h2>
          </div>
          <div className="about-copy">
            <p>I&apos;m studying Information Technology at Bhartiya Skill Development University and building practical skills across frontend development, backend APIs, AI experiments, and cloud computing.</p>
            <p>I learn by making a small version, running it, debugging the errors, and documenting what works and what needs improvement. I&apos;m particularly interested in useful tools for real businesses and in how AI systems can become dependable software.</p>
            <p>My current focus is turning project ideas into clear, testable case studies with working demos, setup instructions, and honest limitations.</p>
            <div className="about-values">
              <div><strong>01</strong><span>Practical projects</span></div>
              <div><strong>02</strong><span>Clear documentation</span></div>
              <div><strong>03</strong><span>Continuous learning</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="container section project-section">
        <div className="section-heading section-heading-wide">
          <div>
            <p className="eyebrow"><span>02</span> / Selected work</p>
            <h2>Projects with real context, tools, and pipelines.</h2>
          </div>
          <p>Open a case study to inspect its architecture, dependencies, implementation flow, repository evidence, limitations, and next milestones.</p>
        </div>
        <div className="project-list-grid project-list-advanced">
          {projects.map((project, index) => (
            <article className={"work-card work-card-" + (index + 1)} key={project.slug}>
              <div className="work-card-top">
                <span className="work-number">{String(index + 1).padStart(2, "0")} <span>/ 03</span></span>
                <span className="status-pill">{project.status}</span>
              </div>
              <p className="work-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="work-summary">{project.summary}</p>
              <div className="tech-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <div className="card-pipeline">
                <div className="card-pipeline-head"><Workflow size={15} /><span>PIPELINE SNAPSHOT</span></div>
                {project.pipeline.slice(0, 3).map((stage) => (
                  <div className="card-pipeline-step" key={stage.step}>
                    <b>{stage.step}</b><span>{stage.title}</span>
                    <i className={"state-dot state-" + (stage.state === "repository evidence" ? "verified" : stage.state === "prototype / verify" ? "review" : "planned")} />
                  </div>
                ))}
              </div>
              <a className="text-link" href={"/projects/" + project.slug}>Explore full case study <ArrowUpRight size={16} /></a>
            </article>
          ))}
        </div>
        <p className="section-footnote">Private repositories stay private. Public case studies share project purpose, safe architecture notes, verification status, and next milestones—not secrets or private source code.</p>
      </section>

      <section id="stack" className="section section-alt">
        <div className="container">
          <div className="section-heading section-heading-wide">
            <div>
              <p className="eyebrow"><span>03</span> / Technology map</p>
              <h2>The tools behind what I&apos;m building.</h2>
            </div>
            <p>Each group shows the technologies connected to my projects and learning roadmap. The labels distinguish repository evidence from areas I&apos;m still learning.</p>
          </div>
          <div className="stack-grid">
            {stackGroups.map((group) => (
              <article className={"stack-card stack-" + group.accent} key={group.id}>
                <div className="stack-card-top"><span>{group.id} / TOOLKIT</span><span>{group.level}</span></div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="stack-tags">{group.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="stack-legend">
            <span><i className="legend-evidence" /> Repository / documented foundation</span>
            <span><i className="legend-learning" /> Learning / in progress</span>
          </div>
        </div>
      </section>

      <section id="workflow" className="container section workflow-section">
        <div className="section-heading">
          <p className="eyebrow"><span>04</span> / Engineering workflow</p>
          <h2>From first idea to verified evidence.</h2>
          <p>A repeatable workflow for every project. A check is only called passed after it has actually been run and reviewed.</p>
        </div>
        <div className="workflow-grid">
          {workflow.map((item) => {
            const Icon = item.icon;
            return (
              <article className="workflow-card" key={item.number}>
                <div className="workflow-card-top"><span>{item.number}</span><Icon size={22} /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
        <div className="quality-panel">
          <div className="quality-copy">
            <p className="eyebrow">Portfolio release gates</p>
            <h3>Before a public release</h3>
            <p>These quality-check commands are defined in the project package scripts. Run them on the latest code and record the actual result before calling a release verified.</p>
          </div>
          <div className="quality-commands">
            <div><span className="command-index">01</span><code>npm run typecheck</code><span>TypeScript check</span></div>
            <div><span className="command-index">02</span><code>npm run lint</code><span>Code quality</span></div>
            <div><span className="command-index">03</span><code>npm run build</code><span>Production build</span></div>
          </div>
        </div>
        <div className="release-note"><span className="release-note-icon"><Check size={15} /></span><p><strong>Honest release notes:</strong> no automated test suite or production deployment is claimed here unless a real run confirms it. Contact email delivery also needs a live Resend inbox test.</p></div>
      </section>

      <section className="section section-alt">
        <div className="container approach-grid">
          <div>
            <p className="eyebrow"><span>05</span> / Working principles</p>
            <h2 className="about-title">Learn it. Build it. Test it. Explain it.</h2>
          </div>
          <div className="approach-steps">
            <div><span>01</span><p><strong>Understand the problem</strong><br />Define a real user need and a small first milestone.</p></div>
            <div><span>02</span><p><strong>Build a working version</strong><br />Choose the simplest tools that meet the goal.</p></div>
            <div><span>03</span><p><strong>Test and debug</strong><br />Run checks, verify behavior, and record limitations.</p></div>
            <div><span>04</span><p><strong>Publish the evidence</strong><br />Share a demo, setup notes, architecture, and next steps.</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="container section">
        <div className="contact-panel contact-panel-advanced">
          <div className="contact-layout">
            <div className="contact-intro">
              <div className="contact-orb"><Rocket size={25} /></div>
              <p className="eyebrow">06 / Get in touch</p>
              <h2>Have an idea? Let&apos;s build something useful.</h2>
              <p>I&apos;m interested in practical software projects, learning with other developers, and conversations about AI, web development, and technology.</p>
              <p className="contact-direct">You can also reach me directly at <a href="mailto:Sdeepak20072004@gmail.com">Sdeepak20072004@gmail.com</a>.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="footer footer-advanced">
        <div className="container footer-inner">
          <div className="footer-brand"><span className="brand-mark">DS</span><span>Deepak Saini <small>Building through curiosity.</small></span></div>
          <div className="footer-links">
            <a href="https://github.com/sdeepak20072004-hue" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/deepak-saini-0a384541a" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Deepak Saini</span><span>Designed with intent · Built with Next.js</span></div>
      </footer>
    </main>
  );
}
