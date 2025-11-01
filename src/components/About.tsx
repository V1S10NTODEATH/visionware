const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="glass rounded-2xl p-8 md:p-12 glow">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              I'm a systems developer and tech founder passionate about building the 
              next generation of computing infrastructure. My work spans from low-level 
              OS development to full-stack applications, always with a focus on performance, 
              innovation, and user experience.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              As the founder of <span className="text-accent font-semibold">Libregra</span>, 
              I'm working to create enterprise-grade hardware and software solutions that 
              challenge the status quo and empower developers and organizations to achieve more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
