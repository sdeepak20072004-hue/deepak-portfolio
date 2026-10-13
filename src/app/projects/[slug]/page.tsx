import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
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

export default async function ProjectCaseStudy({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="case-page">
      <header className="site-header">
        <nav className="container nav case-nav" aria-label="Project navigation">
          <Link href="/" className="brand">
            <span className="brand-mark">DS</span>
            <span><span className="brand-name">Deepak Saini</span><br /><small className="brand-sub muted">Project case study</small></span>
          </Link>
          <Link className="button" href="/#projects"><ArrowLeft size={16} /> All projects</Link>
        </nav>
      </header>

      <section className="container case-hero">
        <p className="eyebrow">{project.category}</p>
        <div className="case-title-row">
          <h1>{project.title}</h1>
          <span className="status-pill">{project.status}</span>
        </div>
        <p className="case-summary">{project.summary}</p>
        <div className="tech-tags case-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <p className="case-visibility">{project.repositoryVisibility}. {project.repositoryVisibility === "Private source" ? "The code is intentionally not linked publicly." : "The public repository is available below."}</p>
        {project.repoUrl && <a className="button button-primary case-repo-link" href={project.repoUrl} target="_blank" rel="noreferrer">View public repository <ArrowUpRight size={16} /></a>}
      </section>

      <section className="container case-body">
        <article className="case-panel case-overview">
          <p className="eyebrow">Overview</p>
          <h2>What this project explores</h2>
          <p>{project.overview}</p>
          {project.safetyNote && <p className="case-warning">{project.safetyNote}</p>}
        </article>

        <div className="case-columns">
          <article className="case-panel">
            <p className="eyebrow">Repository evidence</p>
            <h2>What is present</h2>
            <ul>{project.evidence.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="case-panel">
            <p className="eyebrow">Honest status</p>
            <h2>Limitations to verify</h2>
            <ul>{project.limitations.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>

        <article className="case-panel case-next">
          <p className="eyebrow">Next milestones</p>
          <h2>How I plan to make this stronger</h2>
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
