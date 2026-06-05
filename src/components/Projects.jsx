import { useState } from "react";
import { X, Github, ExternalLink, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MonteFi",
    subtitle: "Financial Analytics & Simulation Engine",
    description:
      "A production-grade financial simulation platform powered by Monte Carlo methods. Built for portfolio risk analysis with LLM-powered insights.",
    tech: ["FastAPI", "Python", "NumPy", "Pandas", "SQLite", "LangChain", "Gemini"],
    github: "https://github.com/anveshaayushi/montefi",
    live: "https://montefi-zeuk.vercel.app/",
    bullets: [
      "Engineered a high-performance Monte Carlo simulation engine executing 1000+ runs for portfolio forecasting using multivariate distributions.",
      "Implemented financial risk metrics including Sharpe Ratio, Value-at-Risk (95/99 confidence), Beta, and Maximum Drawdown.",
      "Integrated real-time market data via yfinance and persisted simulation results using SQLite with Peewee ORM.",
      "Developed LLM-powered portfolio insights using LangChain and Gemini APIs for intelligent, contextual investment recommendations.",
    ],
    accent: "#7c5cbf",
    tag: "FullStack · AI · Finance",
  },
  {
    id: 2,
    title: "MedMitra",
    subtitle: "AI Prescription Analysis Platform",
    description:
      "An AI-driven healthcare platform that analyzes medical prescriptions, extracts entities, and surfaces drug interaction risks using NLP.",
    tech: ["FastAPI", "React.js", "TypeScript", "NLP", "Gemini API"],
    github: "https://github.com/anveshaayushi/medmitra-full-stack",
    live: null,
    bullets: [
      "Built an AI-driven healthcare platform to analyze prescriptions and detect medication risks using NLP techniques.",
      "Designed scalable backend services with FastAPI for structured medical data processing and API-first workflows.",
      "Implemented medical entity extraction and drug interaction analysis for automated risk scoring and clinical recommendations.",
      "Developed a responsive frontend with React.js and TypeScript for clear, accessible visualization of prescription insights.",
    ],
    accent: "#3b82f6",
    tag: "Full-Stack · AI · Healthcare",
  },
  {
    id: 3,
    title: "SkillTrust",
    subtitle: "Skill Verification Platform",
    description:
      "A platform enabling users to validate and showcase their technical skills through structured profiles and verification workflows.",
    tech: ["JavaScript", "React.js", "Tailwind CSS"],
    github: "https://github.com/anveshaayushi/SkillTrust",
    live: null,
    bullets: [
      "Developed a platform to validate and showcase user skills through structured profiles and verification workflows.",
      "Built responsive UI components using React.js and Tailwind CSS for a polished, accessible user experience.",
      "Implemented modular component architecture and dynamic data handling patterns for long-term scalability.",
    ],
    accent: "#10b981",
    tag: "Backend · React",
  },
  {
    id: 4,
    title: "Aftermath",
    subtitle: "Interactive Web Application",
    description:
      "A dynamic web application focused on fluid UI behavior, user engagement, and responsive client-side performance.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/anveshaayushi/aftermath",
    live: null,
    bullets: [
      "Built an interactive web application centered on dynamic UI behavior and high user engagement.",
      "Implemented responsive layouts and optimized client-side performance using modern JavaScript practices.",
      "Contributed feature enhancements and UI improvements driven by real user interaction patterns.",
    ],
    accent: "#f59e0b",
    tag: "Frontend · React JS",
  },
];

export const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          A selection of things I've built — each one a step deeper into real-world engineering.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelected(project)}
              className="gradient-border p-6 card-hover text-left group cursor-pointer w-full transition-all duration-300 focus:outline-none"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full mb-2 inline-block"
                    style={{ backgroundColor: project.accent + "22", color: project.accent }}
                  >
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium mt-0.5">
                    {project.subtitle}
                  </p>
                </div>
                <ChevronRight
                  className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-1 shrink-0"
                />
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-medium"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-muted-foreground font-medium">
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setSelected(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

          {/* Panel */}
          <div
            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full mb-3 inline-block"
                style={{ backgroundColor: selected.accent + "22", color: selected.accent }}
              >
                {selected.tag}
              </span>
              <h3 className="text-2xl font-bold text-foreground">{selected.title}</h3>
              <p className="text-muted-foreground font-medium mt-1">{selected.subtitle}</p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed">{selected.description}</p>

            {/* Bullets */}
            <div className="mb-6 space-y-3">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                What I built
              </h4>
              {selected.bullets.map((b, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: selected.accent }}
                  />
                  <p className="text-sm text-muted-foreground leading-relaxed">{b}</p>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selected.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full border font-medium"
                    style={{ borderColor: selected.accent + "66", color: selected.accent }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3">
              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button flex items-center gap-2 text-sm"
              >
                <Github size={16} /> View on GitHub
              </a>
              {selected.live && (
                <a
                  href={selected.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors font-medium"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
