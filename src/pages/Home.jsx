import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

export const Home = () => {
    return (
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle />
        <StarBackground />
        <Navbar />
        <main>
          <HeroSection />
          <About />
          <Projects />
          <section id="contact" className="py-20 px-4 relative">
            <div className="container mx-auto max-w-2xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's <span className="text-primary">Connect</span>
              </h2>
              <p className="text-muted-foreground mb-10 max-w-md mx-auto">
                Open to internships, collaborations, and interesting conversations. Reach out anytime.
              </p>
              <Contact />
            </div>
          </section>
        </main>
      </div>
    );
}
