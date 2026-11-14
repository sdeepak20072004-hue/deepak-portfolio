import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft, ArrowUpRight, CheckCircle2, CircleDot, Clock3,
  GitBranch, Layers3, Workflow,
} from "lucide-react";
import { projects } from "@/lib/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found | Deepak Saini" };
  return {
    title: project.title + " | Deepak Saini Portfolio",
    description: project.summary,
  };
}

function stateLabel(state: string) {
  if (state === "repository evidence") return "Repository evidence";
  if (state === "prototype / verify") return "Prototype / verify";
  return "Planned next step";
}

function StateIcon({ state }: { state: string }) {
  if (state === "repository evidence") return <CheckCircle2 size={15} />;
  if (state === "prototype / verify") return <CircleDot size={15} />;
  return <Clock3 size={15} />;
}

export default async function ProjectCaseStudy({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="case-page case-page-advanced">
      <header className="site-header">
        <nav className="container nav case-nav" aria-label="Project navigation">
          <Link href="/" className="brand">
            <span className="brand-mark">DS<span className="brand-mark-dot" /></span>
            <span><span className="brand-name">Deepak Saini</span><br /><small className="brand-sub muted">Project case study</small></span>
          </Link>
          <Link className="button button-ghost" href="/#projects"><ArrowLeft size={16} /> All projects</Link>
        </nav>
      </header>

      <section className="container case-hero case-hero-advanced">
        <div className="case-hero-meta"><span className="eyebrow">PROJECT DOSSIER / {project.category}</span><span className="case-dossier-index">DS / CASE STUDY</span></div>
        <div className="case-title-row">
          <h1>{project.title}</h1>
          <span className="status-pill">{project.status}</span>
        </div>
        <p className="case-summary">{project.summary}</p>
        <div className="tech-tags case-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="case-meta-row">
          <span><GitBranch size={15} /> {project.repositoryVisibility}</span>
          <span><Layers3 size={15} /> {project.tools.length} documented tools</span>
          <span><Workflow size={15} /> {project.pipeline.length} pipeline stages</span>
        </div>
        <p className="case-visibility">{project.repositoryVisibility === "Private source" ? "The code is intentionally not linked publicly. This page shares only safe, high-level project evidence." : "The public repository is available for source inspection."}</p>
        {project.repoUrl && <a className="button button-primary case-repo-link" href={project.repoUrl} target="_blank" rel="noreferrer">View public repository <ArrowUpRight size={16} /></a>}
      </section>

      <section className="container case-body case-body-advanced">
        <article className="case-panel case-overview case-panel-featured">
          <p className="eyebrow">01 / Project overview</p>
          <h2>What this project is building</h2>
          <p>{project.overview}</p>
        </article>

        <article className="case-panel architecture-panel">
          <div className="case-section-head">
            <div><p className="eyebrow">02 / Architecture</p><h2>How the pieces fit together</h2></div>
            <span className="architecture-label">HIGH-LEVEL FLOW</span>
          </div>
          <div className="architecture-flow">
            {project.architecture.split(" → ").map((part, index, all) => (
              <div className="architecture-node-wrap" key={part + index}>
                <div className="architecture-node"><span>{String(index + 1).padStart(2, "0")}</span><strong>{part}</strong></div>
                {index < all.length - 1 && <div className="architecture-arrow"><ArrowUpRight size={17} /></div>}
              </div>
            ))}
          </div>
          <p className="architecture-caption">Conceptual system view. The detailed stage list below identifies repository evidence separately from steps that still need verification.</p>
        </article>

        <section className="case-tools-section">
          <div className="case-section-head">
            <div><p className="eyebrow">03 / Technology & tools</p><h2>What each tool contributes</h2></div>
            <span className="architecture-label">{project.tools.length} TOOLS DOCUMENTED</span>
          </div>
          <div className="case-tools-grid">
            {project.tools.map((tool, index) => (
              <article className="case-tool-card" key={tool.name}>
                <div className="case-tool-top"><span>{String(index + 1).padStart(2, "0")}</span><span className={"evidence-label " + (tool.evidence === "declared in repository" ? "evidence-confirmed" : tool.evidence === "documented foundation" ? "evidence-foundation" : "evidence-review")}>{tool.evidence}</span></div>
                <h3>{tool.name}</h3>
                <p>{tool.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-pipeline-section">
          <div className="case-section-head">
            <div><p className="eyebrow">04 / Implementation pipeline</p><h2>Step-by-step system flow</h2></div>
            <span className="architecture-label">PIPELINE MAP</span>
          </div>
          <div className="pipeline-list">
            {project.pipeline.map((stage, index) => (
              <article className="pipeline-stage" key={stage.step}>
                <div className="pipeline-stage-marker"><span>{stage.step}</span>{index < project.pipeline.length - 1 && <i />}</div>
                <div className="pipeline-stage-card">
                  <div className="pipeline-stage-head"><h3>{stage.title}</h3><span className={"pipeline-state pipeline-" + (stage.state === "repository evidence" ? "confirmed" : stage.state === "prototype / verify" ? "review" : "planned")}><StateIcon state={stage.state} />{stateLabel(stage.state)}</span></div>
                  <p>{stage.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="case-columns">
          <article className="case-panel case-evidence-panel">
            <p className="eyebrow">05 / Repository evidence</p>
            <h2>What is present</h2>
            <ul>{project.evidence.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="case-panel case-limitations-panel">
            <p className="eyebrow">06 / Limitations & validation</p>
            <h2>What still needs proof</h2>
            <ul>{project.limitations.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>

        <article className="case-panel case-next case-next-advanced">
          <div><p className="eyebrow">07 / Roadmap</p><h2>Next engineering milestones</h2><p className="case-next-intro">The next steps that would make this project more complete, testable, and easier to evaluate.</p></div>
          <ol>{project.nextMilestones.map((item) => <li key={item}>{item}</li>)}</ol>
        </article>
      </section>

      <footer className="case-footer container">
        <Link className="text-link" href="/#projects"><ArrowLeft size={16} /> Back to all projects</Link>
        <Link className="text-link" href="/#contact">Discuss a collaboration <ArrowUpRight size={16} /></Link>
      </footer>
    </main>
  );
}
