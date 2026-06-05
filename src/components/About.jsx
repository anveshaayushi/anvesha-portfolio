import { Code, Server, Database, BarChart, Briefcase, Cpu } from "lucide-react";

const skills = [
  { icon: Code, name: "React.js", desc: "Building modern, dynamic, and responsive UI components." },
  { icon: Briefcase, name: "Tailwind CSS", desc: "Creating beautiful, responsive designs using utility-first styling." },
  { icon: Server, name: "FastAPI", desc: "Building fast, scalable backend APIs with Python." },
  { icon: Database, name: "MySQL", desc: "Designing and managing relational databases for robust data storage." },
  
  { icon: BarChart, name: "NumPy & Pandas", desc: "Numerical computing, data handling, and structured dataset analysis." },
  { icon: Cpu, name: "Gemini API", desc: "Integrating LLM-powered features for intelligent, AI-driven applications." },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT: Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold leading-snug">
              Learning, Building, Growing —<br />
              <span className="text-primary">One Line of Code at a Time</span>
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I'm a second-year Computer Science student and full-stack developer focused on
              writing clean, efficient, and scalable code. My stack spans React.js and Tailwind CSS
              on the frontend, FastAPI and MySql on the backend, and Python data libraries like
              NumPy and Pandas for analysis.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I've shipped real projects — a Monte Carlo financial simulation engine, an AI prescription
              analysis platform, and a skill verification system. I strengthen my fundamentals daily
              through DSA practice and am actively expanding into machine learning to build more
              intelligent, real-world applications.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Python", "Java", "C", "React.js", "FastAPI", "MySQL"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: Skill Cards */}
          <div className="grid grid-cols-1 gap-4">
            {skills.map(({ icon: Icon, name, desc }) => (
              <div key={name} className="gradient-border p-5 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-full bg-primary/10 shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-base">{name}</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
