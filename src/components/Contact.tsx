import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aadarshsuman4275@gmail.com",
      href: "mailto:aadarshsuman4275@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/aadarsh-suman",
      href: "https://www.linkedin.com/in/aadarsh-suman"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ludhiana, Punjab, India",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">// get in touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl glass text-center hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:glow-primary transition-all">
                  <info.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="font-mono text-xs text-muted-foreground mb-1">{info.label}</p>
                {info.href ? (
                  <a 
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm font-medium hover:text-primary transition-colors break-all"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity glow-primary gap-2"
              asChild
            >
              <a href="mailto:aadarshsuman4275@gmail.com">
                <Send className="w-4 h-4" />
                Send me a message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
