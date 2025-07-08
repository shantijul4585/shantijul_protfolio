import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <Avatar className="w-32 h-32 mx-auto border-4 border-blue-500/30">
              <AvatarFallback className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                SI
              </AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hello, I'm <span className="gradient-text">Shantijul Islam</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Statistics Graduate & Aspiring Data Analyst
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Passionate about transforming data into actionable insights using Excel, Power BI, and statistical analysis. 
            Skilled in data visualization and business intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              size="lg"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-900 px-8 py-6 text-lg font-semibold rounded-lg transition-all"
              size="lg"
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/shantijul4585"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/shantijul-islam/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:shantijulislam4585@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce">
            <Button
              onClick={() => scrollToSection('about')}
              variant="ghost"
              size="icon"
              className="text-white hover:text-blue-400"
            >
              <ChevronDown className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
