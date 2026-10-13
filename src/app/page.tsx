"use client";

import { useState } from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, Code2, Cpu,
  Link, Mail, Menu, Rocket, Sparkles, X
} from "lucide-react";
import { projects } from "@/lib/projects";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Learning labs", href: "#labs" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    title: "Frontend & product UI",
    status: "Built in portfolio / prototypes",
    items: ["HTML & CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    note: "Responsive UI, component-based pages, and accessible form structure.",
  },
  {
    title: "Backend & integration",
    status: "Repository evidence",
    items: ["Node.js", "Express", "REST-style routes", "Zod validation", "Resend API", "Environment variables"],
    note: "Server routes and input validation are present; email delivery still needs its final provider test.",
  },
  {
    title: "AI & computer vision",
    status: "Prototype territory",
    items: ["Google GenAI SDK", "MediaPipe packages", "Face / hand / pose tracking", "AI feature experiments"],
    note: "These appear in private prototypes. Each visible feature must be tested before being marked as shipped.",
  },
  {
    title: "Foundations in progress",
    status: "Learning & practical labs",
    items: ["Python", "FastAPI", "PostgreSQL", "Machine learning", "Deep learning", "Cloud computing"],
    note: "The next step is to link each learning area to a small, repeatable hands-on lab.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <nav className="container nav" aria-label="Main navigation">
          <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">DS</span>
            <span><span className="brand-name">Deepak Saini</span><br /><small className="brand-sub muted">Developer Portfolio</small></span>
          </a>
          <div className="nav-links">
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
          <a className="button nav-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></a>
          <button className="mobile-menu" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {menuOpen && <div className="mobile-nav">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}</div>}
      </header>

      <section id="home" className="container hero">
        <div className="hero-content">
          <span className="pill"><span className="pulse" /> B.Voc IT Student · Learning by building</span>
          <p className="eyebrow" style={{ marginTop: 32 }}>Hello, I&apos;m</p>
          <h1>Deepak<br /><span className="gradient-text">Saini.</span></h1>
          <h2>Full-Stack Development <span className="muted">&amp;</span><br />AI Engineering Experiments</h2>
          <p className="hero-copy">I build and test web experiences, explore AI and computer-vision prototypes, and document what I learn. My long-term project is DIS AI—a private, evolving platform foundation.</p>
          <div className="actions">
            <a className="button button-primary" href="#projects">Explore project evidence <ArrowRight size={18} /></a>
            <a className="button" href="#contact">Contact me <ArrowUpRight size={17} /></a>
          </div>
          <div className="socials">
            <a href="https://github.com/sdeepak20072004-hue" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a>
            <a href="https://www.linkedin.com/in/deepak-saini-0a384541a" target="_blank" rel="noreferrer"><Link size={17} /> LinkedIn</a>
            <a href="mailto:Sdeepak20072004@gmail.com"><Mail size={17} /> Email</a>
          </div>
          <div className="hero-proof">
            <span><strong>Build</strong> small and real</span>
            <span><strong>Test</strong> what works</span>
            <span><strong>Document</strong> the evidence</span>
          </div>
        </div>

        <aside className="profile-card">
          <div className="profile-top"><span>Developer profile</span><Sparkles size={19} color="#a5f3fc" /></div>
          <div className="avatar"><Image src="/deepak-profile.jpg" alt="Portrait of Deepak Saini" width={384} height={384} priority /></div>
          <h3>Learning. Building. Improving.</h3>
          <p className="school">B.Voc in Information Technology<br />Bhartiya Skill Development University<br /><span className="muted">Jaipur, Rajasthan, India</span></p>
          <div className="mini-grid">
            <div className="mini"><Code2 size={21} color="#a5f3fc" /><strong>Full-Stack</strong><span>Web applications</span></div>
            <div className="mini"><BrainCircuit size={21} color="#c4b5fd" /><strong>AI &amp; CV</strong><span>Prototypes &amp; learning</span></div>
          </div>
          <p className="profile-note">Project status is stated honestly: built, prototype, or learning in progress.</p>
        </aside>
        <a href="#about" aria-label="Scroll to about section" className="scroll-cue"><ArrowDown size={20} /></a>
      </section>

      <section id="about" className="section section-alt">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">About me</p>
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

      <section id="projects" className="container section">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Projects, with status and evidence.</h2>
          <p>Some projects are private and still in progress. Each case study separates what the repository contains from what still needs end-to-end testing.</p>
        </div>
        <div className="project-list-grid">
          {projects.map((project, index) => (
            <article className="work-card" key={project.slug}>
              <div className="work-card-top"><span className="work-number">{String(index + 1).padStart(2, "0")}</span><span className="status-pill">{project.status}</span></div>
              <p className="work-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="work-summary">{project.summary}</p>
              <div className="tech-tags">{project.stack.slice(0, 5).map((item) => <span key={item}>{item}</span>)}</div>
              <a className="text-link" href={"/projects/" + project.slug}>Read case study <ArrowUpRight size={16} /></a>
            </article>
          ))}
        </div>
        <p className="section-footnote">Private repositories stay private. Public case studies share the project purpose, safe architecture notes, verification status, and next milestones—not secrets or private source code.</p>
      </section>

      <section id="skills" className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Skills &amp; evidence</p>
            <h2>What I&apos;m using—and what I&apos;m learning.</h2>
            <p>Skill labels reflect the current evidence level instead of suggesting expert-level proficiency in every technology.</p>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <div className="skill-group-heading"><h3>{group.title}</h3><span>{group.status}</span></div>
                <div className="skill-pills">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                <p>{group.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="labs" className="container section">
        <div className="section-heading">
          <p className="eyebrow">Learning labs</p>
          <h2>Turning lessons into practical proof.</h2>
          <p>These are active learning tracks, not completed professional experience. Published results will be added as each lab is finished and tested.</p>
        </div>
        <div className="lab-grid">
          <article className="lab-card">
            <div className="lab-icon"><Cpu size={22} /></div>
            <span className="lab-state">In progress</span>
            <h3>Cloud computing &amp; deployment</h3>
            <p>Next practical evidence: deploy a small app, keep secrets out of source control, check a health endpoint and logs, inspect usage, then document how resources are stopped or removed.</p>
            <a className="text-link" href="https://learn.microsoft.com/en-us/learn/paths/azure-fundamentals/" target="_blank" rel="noreferrer">Official Azure fundamentals learning path <ArrowUpRight size={16} /></a>
          </article>
          <article className="lab-card">
            <div className="lab-icon"><Sparkles size={22} /></div>
            <span className="lab-state">Experiments</span>
            <h3>Hindi AI videos &amp; editing</h3>
            <p>Exploring short-form explainers, scripts, real-camera delivery, captions, and AI-assisted editing. Only published clips and actual before/after examples will be presented as proof.</p>
            <a className="text-link" href="#contact">Ask about a content collaboration <ArrowUpRight size={16} /></a>
          </article>
          <article className="lab-card">
            <div className="lab-icon"><Rocket size={22} /></div>
            <span className="lab-state">Next step</span>
            <h3>Project testing &amp; documentation</h3>
            <p>For the three featured projects, I am building a repeatable checklist for type checks, linting, production builds, setup steps, and verified demo recordings.</p>
            <a className="text-link" href="#projects">Review the three case studies <ArrowUpRight size={16} /></a>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container approach-grid">
          <div>
            <p className="eyebrow">My working method</p>
            <h2 className="about-title">Learn it. Build it. Test it. Explain it.</h2>
          </div>
          <div className="approach-steps">
            <div><span>01</span><p><strong>Understand the problem</strong><br />Define a real user need and a small first milestone.</p></div>
            <div><span>02</span><p><strong>Build a working version</strong><br />Choose the simplest tools that meet the goal.</p></div>
            <div><span>03</span><p><strong>Test and debug</strong><br />Run checks, verify the behavior, and record limitations.</p></div>
            <div><span>04</span><p><strong>Publish the evidence</strong><br />Share a demo, setup notes, architecture, and next steps.</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="container section">
        <div className="contact-panel">
          <div className="contact-layout">
            <div className="contact-intro">
              <Rocket size={30} color="#a5f3fc" />
              <p className="eyebrow" style={{ marginTop: 24 }}>Get in touch</p>
              <h2>Have an idea? Let&apos;s build something useful.</h2>
              <p>I&apos;m interested in practical software projects, learning with other developers, and conversations about AI, web development, and technology.</p>
              <p className="contact-direct">You can also reach me directly at <a href="mailto:Sdeepak20072004@gmail.com">Sdeepak20072004@gmail.com</a>.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Deepak Saini. Built with Next.js.</span>
          <div className="footer-links"><a href="https://github.com/sdeepak20072004-hue" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/deepak-saini-0a384541a" target="_blank" rel="noreferrer">LinkedIn</a><a href="#home">Back to top ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
