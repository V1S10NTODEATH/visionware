import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 gradient-radial opacity-90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4">
            Abdul Rafay
          </h1>
          <p className="text-2xl md:text-4xl font-semibold text-accent glow-text">
            Tech Developer & Innovator
          </p>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Crafting systems that merge software intelligence with hardware innovation. 
            Founder of <span className="text-accent font-semibold">Libregra</span> — a mission 
            to redefine performance and computing freedom.
          </p>
          
          <div className="pt-8">
            <Button
              onClick={handleScrollToProjects}
              size="lg"
              className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg glow hover:glow-pulse transition-all duration-300"
            >
              See Projects
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown className="text-accent/50" size={32} />
      </div>
    </section>
  );
};

export default Hero;
