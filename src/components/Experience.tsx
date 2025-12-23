import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experience = [
    {
      type: "work",
      title: "AI Automation",
      organization: "Career Craft Cafe",
      period: "October 2025 - November 2025",
      duration: "2 months",
      location: "Ludhiana",
      description: "Worked on AI automation projects, developing tools to streamline digital processes and enhance efficiency."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science",
      institution: "I. K. Gujral Punjab Technical University (IKGPTU)",
      period: "August 2025 - Present",
      current: true
    },
    {
      degree: "Intermediate",
      field: "Higher Secondary",
      institution: "Bihar School Examination Board (BSEB)",
      location: "Muzaffarpur",
      period: "May 2023 - April 2025"
    },
    {
      degree: "Secondary",
      field: "Matriculation",
      institution: "Bihar School Examination Board (BSEB)",
      location: "Sitamarhi",
      period: "May 2022 - May 2023"
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">// journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div 
                  key={index}
                  className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-gradient-primary" />
                  <div className="p-6 rounded-xl glass hover:border-primary/30 transition-all">
                    <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                    <p className="text-primary font-medium mb-3">{exp.organization}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="relative pl-8 border-l-2 border-border hover:border-accent transition-colors"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-gradient-accent" />
                  <div className="p-6 rounded-xl glass hover:border-accent/30 transition-all">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                        <p className="text-accent font-medium">{edu.field}</p>
                      </div>
                      {edu.current && (
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mt-2">{edu.institution}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
