import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export const Home = () => {
    return (
      <div className="min-h-screen  bg-background text-foreground overflow-x-hidden">
        <ThemeToggle />
        <StarBackground />
        <Navbar />
        <main>
          <HeroSection />
                <About />
                <Contact/>
        </main>
      </div>
    );
}