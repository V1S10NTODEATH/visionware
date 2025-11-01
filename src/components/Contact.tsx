import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Get in <span className="text-accent">Touch</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-2xl p-12 text-center glow">
            <Mail className="w-16 h-16 text-accent mx-auto mb-6" />
            <p className="text-xl text-foreground/80 mb-8">
              Have a project in mind or want to discuss collaboration? 
              I'd love to hear from you.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg glow hover:glow-pulse transition-all duration-300"
            >
              <a href="mailto:gearrev967@gmail.com">
                Email Me
              </a>
            </Button>
            <p className="text-foreground/60 mt-6">
              gearrev967@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 mt-24 text-center">
        <p className="text-foreground/60">
          © {new Date().getFullYear()} Abdul Rafay. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
