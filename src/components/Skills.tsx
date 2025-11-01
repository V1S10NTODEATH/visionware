const skills = [
  "Python",
  "Flask",
  "PyQt5",
  "Server Management",
  "OS Development",
  "Automation",
  "Hardware Research",
  "System Engineering",
  "UI/UX Design",
  "Brand Strategy",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Core <span className="text-accent">Skills</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass rounded-xl p-4 text-center hover:glow hover:scale-105 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-foreground font-semibold">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
