
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Hero = () => {

  const scrollToSection = (section: string) => {
  const projectsSection = document.getElementById(section);
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Vasista Monavarthy 
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Generative Designer | Computational Architect | Digital & Robotic Fabrication Specialist | Interior Designer
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            onClick={() => scrollToSection('portfolios')}
            size="lg" 
            className="px-8 py-3 rounded-full"
          >
            View My Work
          </Button>
          <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg" className="px-8 py-3 rounded-full">
            Get In Touch
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/Leelavasi"target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/vasista-movarvarthy/" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

