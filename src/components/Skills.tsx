const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", level: 70 },
        { name: "C", level: 65 },
      ]
    },
    {
      title: "Platforms & Tools",
      skills: [
        { name: "Google Cloud", level: 75 },
        { name: "Google Workspace", level: 85 },
        { name: "Google AI Studio", level: 70 },
      ]
    },
    {
      title: "Focus Areas",
      skills: [
        { name: "AI Development", level: 60 },
        { name: "Automation", level: 65 },
        { name: "Problem Solving", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">// my skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex}
              className="p-6 rounded-xl glass"
            >
              <h3 className="font-mono text-primary text-sm mb-6">
                {'{'} {category.title} {'}'}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="font-mono text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-mono text-muted-foreground text-sm mb-6">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Google Cloud Certified", "Google Workspace Certified", "Google AI Certified", "Hackathon Participant"].map((cert, index) => (
              <span 
                key={index}
                className="px-4 py-2 rounded-full glass text-sm font-medium hover:border-primary/50 transition-all cursor-default"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
