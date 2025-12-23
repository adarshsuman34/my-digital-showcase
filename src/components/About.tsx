import { Code2, Cpu, Trophy, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Trophy,
      title: "4+ Hackathons",
      description: "Participated in first month of college"
    },
    {
      icon: Cpu,
      title: "AI Focused",
      description: "Passionate about artificial intelligence"
    },
    {
      icon: Code2,
      title: "Python & C",
      description: "Core programming languages"
    },
    {
      icon: Rocket,
      title: "Automation",
      description: "Building smarter digital processes"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">// about me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Who I <span className="text-gradient">Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Aadarsh Suman</span>, a first-year 
              Computer Science Engineering student at I. K. Gujral Punjab Technical University. 
              I'm passionate about programming and artificial intelligence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm currently learning C and Python and enjoy exploring how technology can solve 
              real-world problems. Within my first month of college, I've already participated 
              in <span className="text-primary font-semibold">four hackathons</span>, gaining 
              hands-on experience in problem-solving, teamwork, and creative coding.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm especially interested in <span className="text-gradient-accent font-semibold">AI development</span> and 
              automation tools that make digital processes smarter and more efficient. Always 
              open to learning, collaborating, and building innovative projects!
            </p>

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 font-mono text-sm">
                <span className="text-muted-foreground">Location:</span>
                <span className="text-foreground">Ludhiana, Punjab, India</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl glass hover:border-primary/30 transition-all group cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:glow-primary transition-all">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
