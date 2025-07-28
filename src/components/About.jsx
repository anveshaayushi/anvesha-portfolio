import { Briefcase, Code, User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Learning, Building, Growing — One Line of Code at a Time
            </h3>
            <p className="text-muted-foreground">
              I'm a budding frontend developer passionate about crafting
              responsive, accessible, and visually engaging web interfaces. I
              specialize in HTML, CSS, JavaScript, React.js, and Tailwind
              CSS—building modern applications that balance clean design with
              solid functionality. With a strong foundation in core web
              technologies and a growing portfolio of real-world projects, I'm
              focused on learning deeply, building thoughtfully, and growing
              into a full-stack developer.
            </p>
            <p className="text-muted-foreground"></p>I'm passionate about
            creating elegant solutions to complex problems, and I'm constantly
            learning new technologies and techniques to stay at the forefront of
            the ever-evolving web landscape.
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> React Js</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">HTML-CSS-JS</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Tailwind CSS</h4>
                  <p className="text-muted-foreground">
                    With Tailwind CSS, I turn utility classes into beautiful,
                    responsive designs—fast and fuss-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
