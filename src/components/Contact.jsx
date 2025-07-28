import { ArrowRight, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
      <a
        href="https://drive.google.com/file/d/1Mgfh2O-kSC1YWYmD61LN_TYvZMF2wPag/view?usp=drivesdk"
        target="_blank"
        className="cosmic-button flex items-center gap-2"
      >
        Get Resume <ArrowRight size={16} />
      </a>

      <a
        href="https://github.com/anveshaayushi"
        target="_blank"
        className="cosmic-button flex items-center gap-2"
      >
        GitHub <Github size={18} />
      </a>

      <a
        href="https://www.linkedin.com/in/anvesha-ayushi-548688355"
        target="_blank"
        className="cosmic-button flex items-center gap-2"
      >
        LinkedIn <Linkedin size={18} />
      </a>
    </div>
  );
};
