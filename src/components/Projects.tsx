import { Server, Cpu, Terminal, Wrench } from "lucide-react";

const projects = [
  {
    title: "Libregra",
    description:
      "Next-generation hardware brand building enterprise-grade servers, OS-level performance tools, and research-backed computing hardware.",
    icon: Server,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "VPS Control Suite",
    description:
      "Fully functional VPS control system built with Flask and PyQt5. Supports PayPal & Crypto payments, real VPS API integration, and user management.",
    icon: Terminal,
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "OS Core Research",
    description:
      "Experimental kernel designs based on IBM Power8/Power9, focused on low-level optimization and custom instruction handling for high-efficiency systems.",
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Automation Tools",
    description:
      "Custom Python/Bash-based tools for deployment pipelines, server orchestration, and performance benchmarking.",
    icon: Wrench,
    color: "from-pink-500 to-cyan-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Featured <span className="text-accent">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="glass rounded-2xl p-8 card-3d group cursor-pointer hover:glow transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6 text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View details →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
