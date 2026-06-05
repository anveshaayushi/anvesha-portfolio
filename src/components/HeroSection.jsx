import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Anvesha~
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
            Full-stack developer building with React, FastAPI, and Python. I
            engineer things that work — from Monte Carlo simulation engines to
            AI-powered healthcare platforms. Always learning, always shipping.
          </p>

          <ul className="mt-4 text-left max-w-2xl mx-auto space-y-2 list-disc list-inside text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3 leading-relaxed">
            <li>Solved 200+ DSA problems across LeetCode and CodeChef (2⋆)</li>
            <li>Selected among Top 100 female candidates in India for LinkedIn CoachIn Program</li>
            <li>Finalist in LinkedIn CoachIn Hackathon – Top 8 teams nationwide</li>
            <li>Semi-finalist at Devcation Hack ‘N’ Solve, IIT Delhi (2026)</li>
            <li>Reliance Foundation Scholar (2024)</li>
            <li>INSPIRE Awards– MANAK NLEPC Finalist (2020)</li>
          </ul>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="https://github.com/anveshaayushi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors font-medium text-sm"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
