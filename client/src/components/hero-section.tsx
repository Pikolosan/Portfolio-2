import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  useEffect(() => {
    // Load GSAP dynamically
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    script.onload = () => {
      if (window.gsap) {
        const tl = window.gsap.timeline();
        tl.to(".hero-title", { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
          .to(".hero-subtitle", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.7")
          .to(".hero-buttons", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.7");
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-float">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
            alt="Professional headshot" 
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-blue-500 shadow-2xl object-cover"
          />
        </div>
        
        <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 opacity-0 translate-y-8">
          <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            Full Stack
          </span>
          <br />
          <span className="text-gray-900 dark:text-white">Developer</span>
        </h1>
        
        <p className="hero-subtitle text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto opacity-0 translate-y-8">
          Crafting innovative digital experiences with cutting-edge AI/ML technologies and modern web development
        </p>
        
        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center opacity-0 translate-y-8">
          <Button 
            onClick={() => scrollToSection("#projects")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </Button>
          <Button 
            variant="outline"
            className="backdrop-blur-sm bg-white/10 dark:bg-black/20 border-white/20 dark:border-gray-700/20 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Download CV
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-2xl text-blue-500" size={32} />
        </div>
      </div>
    </section>
  );
}
