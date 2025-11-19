import { Briefcase, Code, User } from "lucide-react";
import { Database, Server, BarChart } from "lucide-react"; // extra icons

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT SECTION */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Learning, Building, Growing — One Line of Code at a Time
            </h3>

            <p className="text-muted-foreground">
              I'm a budding full-stack developer with a strong focus on writing
              clean, efficient, and scalable code. I work with HTML, CSS,
              JavaScript, React.js, and Tailwind CSS to build modern,
              responsive interfaces, while also developing backend applications
              using FastAPI and PostgreSQL. I also use Python libraries like
              NumPy and Pandas for data handling and analysis.
            </p>

            <p className="text-muted-foreground">
              I actively strengthen my problem-solving abilities through Data
              Structures and Algorithms (DSA), constantly improving my logic and
              coding patterns. I'm also planning to expand into machine learning
              soon to deepen my technical range and build more intelligent,
              real-world applications.
            </p>
          </div>

          {/* RIGHT SKILL CARDS */}
          <div className="grid grid-cols-1 gap-6">
            {/* React */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">React.js</h4>
                  <p className="text-muted-foreground">
                    Building modern, dynamic, and responsive UI components.
                  </p>
                </div>
              </div>
            </div>

            {/* Tailwind CSS */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Tailwind CSS</h4>
                  <p className="text-muted-foreground">
                    Creating beautiful, responsive designs using utility-first
                    styling.
                  </p>
                </div>
              </div>
            </div>

            {/* FastAPI */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">FastAPI</h4>
                  <p className="text-muted-foreground">
                    Building fast, scalable backend APIs with Python.
                  </p>
                </div>
              </div>
            </div>

            {/* PostgreSQL */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">PostgreSQL</h4>
                  <p className="text-muted-foreground">
                    Managing and querying relational databases efficiently.
                  </p>
                </div>
              </div>
            </div>

            {/* NumPy */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">NumPy</h4>
                  <p className="text-muted-foreground">
                    Performing numerical computing and array-based operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Pandas */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Pandas</h4>
                  <p className="text-muted-foreground">
                    Handling, cleaning, and analyzing structured datasets.
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

