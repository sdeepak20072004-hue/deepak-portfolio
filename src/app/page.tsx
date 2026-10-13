"use client";

import { useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, Code2, Cpu,
  Link, Mail, Menu, Rocket, Sparkles, X
} from "lucide-react";

const skills = [
  { name: "Python", category: "Programming" },
  { name: "JavaScript", category: "Programming" },
  { name: "TypeScript", category: "Programming" },
  { name: "React & Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "HTML & CSS", category: "Web" },
  { name: "Machine Learning", category: "AI / ML" },
  { name: "Deep Learning", category: "AI / ML" },
  { name: "Git & GitHub", category: "Developer tools" },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#project" },
  { label: "Contact", href: "#contact" },
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
        <div>
          <span className="pill"><span className="pulse" /> B.Voc IT Student · Building for the future</span>
          <p className="eyebrow" style={{ marginTop: 32 }}>Hello, I&apos;m</p>
          <h1>Deepak<br /><span className="gradient-text">Saini.</span></h1>
          <h2>Aspiring Full-Stack Developer <span className="muted">&amp;</span><br /> AI Engineer</h2>
          <p className="hero-copy">I&apos;m learning to build useful software, explore intelligent systems, and turn ambitious ideas into real-world technology. My long-term vision is to build DIS AI.</p>
          <div className="actions">
            <a className="button button-primary" href="#project">Explore my work <ArrowRight size={18} /></a>
            <a className="button" href="#contact">Contact me <ArrowUpRight size={17} /></a>
          </div>
          <div className="socials">
            <a href="https://github.com/sdeepak20072004-hue" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a>
            <a href="https://www.linkedin.com/in/deepak-saini-0a384541a" target="_blank" rel="noreferrer"><Link size={17} /> LinkedIn</a>
            <a href="mailto:Sdeepak20072004@gmail.com"><Mail size={17} /> Email</a>
          </div>
        </div>

        <aside className="profile-card">
          <div className="profile-top"><span>Personal profile</span><Sparkles size={19} color="#a5f3fc" /></div>
          <div className="avatar" aria-label="Deepak Saini initials">DS</div>
          <h3>Learning. Building. Improving.</h3>
          <p className="school">B.Voc in Information Technology<br />Bhartiya Skill Development University<br /><span className="muted">Jaipur, Rajasthan, India</span></p>
          <div className="mini-grid">
            <div className="mini"><Code2 size={21} color="#a5f3fc" /><strong>Full-Stack</strong><span>Web development</span></div>
            <div className="mini"><BrainCircuit size={21} color="#c4b5fd" /><strong>AI &amp; ML</strong><span>Learning &amp; research</span></div>
          </div>
        </aside>
        <a href="#about" aria-label="Scroll to about section" style={{ position: "absolute", bottom: 22, left: "50%", color: "#71717a" }}><ArrowDown size={20} /></a>
      </section>

      <section id="about" className="section section-alt">
        <div className="container about-grid">
          <div><p className="eyebrow">About me</p><h2 className="about-title">Building my skills today to solve bigger problems tomorrow.</h2></div>
          <div className="about-copy">
            <p>I&apos;m a B.Voc IT student focused on growing my programming, web development, and AI engineering skills through structured learning and practical projects.</p>
            <p>My approach is to understand the fundamentals, build working projects, learn from mistakes, and improve the quality of my work step by step.</p>
            <p>I&apos;m especially interested in AI agents, machine learning, backend systems, and the technology needed to turn ambitious ideas into dependable software.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="container section">
        <div className="section-heading"><p className="eyebrow">Technologies</p><h2>Skills I&apos;m developing</h2><p>My learning roadmap across programming, web development, and AI. These represent my learning areas, not a claim of expert-level proficiency in every technology.</p></div>
        <div className="skills-grid">{skills.map((skill) => <article className="skill-card" key={skill.name}><small>{skill.category}</small><h3>{skill.name}</h3></article>)}</div>
      </section>

      <section id="project" className="section section-alt">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">Featured project</p><h2>Work in progress</h2></div>
          <article className="project-card">
            <div className="project-grid">
              <div className="project-copy">
                <div className="badges"><span className="badge">AI Platform</span><span className="badge badge-amber">In development</span></div>
                <h3>DIS <span className="gradient-text">AI</span></h3>
                <p style={{ marginTop: 0, fontSize: ".84rem" }}>Deepak IT Solutions AI</p>
                <p>An ambitious long-term project exploring the foundations of an extensible AI platform, with a vision for AI agents, memory, knowledge systems, workflows, and computing infrastructure.</p>
                <a className="button" href="https://github.com/sdeepak20072004-hue" target="_blank" rel="noreferrer" style={{ marginTop: 14 }}>Visit GitHub profile <ArrowUpRight size={17} /></a>
                <p className="note">This is a project vision and ongoing development effort. Not every planned capability is implemented yet. The DIS AI repository is private.</p>
              </div>
              <div className="project-visual">
                <div className="arch-card"><BrainCircuit className="arch-icon" size={24} /><div><strong>AI Agents</strong><small>Specialised task systems</small></div></div>
                <div className="arch-card"><Sparkles size={24} color="#c4b5fd" /><div><strong>Memory &amp; Knowledge</strong><small>Context and information</small></div></div>
                <div className="arch-card"><Cpu className="arch-icon" size={24} /><div><strong>Compute Research</strong><small>Long-term systems exploration</small></div></div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="container section">
        <div className="contact-panel">
          <Rocket size={30} color="#a5f3fc" />
          <p className="eyebrow" style={{ marginTop: 24 }}>Get in touch</p>
          <h2>Have an idea? Let&apos;s connect.</h2>
          <p>I&apos;m interested in learning, collaborating on meaningful projects, and connecting with people who are building useful technology.</p>
          <a className="button button-primary" href="mailto:Sdeepak20072004@gmail.com?subject=Portfolio%20Enquiry" style={{ marginTop: 16 }}><Mail size={18} /> Email Deepak <ArrowUpRight size={17} /></a>
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
