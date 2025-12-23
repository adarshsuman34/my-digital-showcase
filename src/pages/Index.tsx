import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Aadarsh Suman | CS Student & AI Enthusiast";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Aadarsh Suman - First-year Computer Science student passionate about AI development and automation. Explore my projects, skills, and experience.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Aadarsh Suman - First-year Computer Science student passionate about AI development and automation. Explore my projects, skills, and experience.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
