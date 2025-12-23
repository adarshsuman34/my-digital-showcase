import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/10 rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">Available for opportunities</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Hi, I'm <span className="text-gradient">Aadarsh</span>
        </h1>

        <div className="font-mono text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-primary">{'<'}</span>
          <span className="text-foreground">CS Student</span>
          <span className="text-primary">{' />'}</span>
          <span className="mx-3 text-border">•</span>
          <span className="text-primary">{'<'}</span>
          <span className="text-foreground">AI Enthusiast</span>
          <span className="text-primary">{' />'}</span>
          <span className="mx-3 text-border">•</span>
          <span className="text-primary">{'<'}</span>
          <span className="text-foreground">Developer</span>
          <span className="text-primary">{' />'}</span>
        </div>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          First-year Computer Science student passionate about AI development and automation tools. 
          Building innovative solutions and always learning.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity glow-primary"
            asChild
          >
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-border hover:bg-secondary hover:border-primary/50 transition-all"
            asChild
          >
            <a href="#about">Learn More</a>
          </Button>
        </div>

        <div className="flex justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <a 
            href="https://www.linkedin.com/in/aadarsh-suman" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-primary/10 hover:border-primary/50 transition-all group"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-primary/10 hover:border-primary/50 transition-all group"
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="mailto:aadarshsuman4275@gmail.com"
            className="p-3 rounded-full glass hover:bg-primary/10 hover:border-primary/50 transition-all group"
          >
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        <a 
          href="#about" 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
