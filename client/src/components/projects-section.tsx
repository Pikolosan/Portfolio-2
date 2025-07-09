import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Development Tool",
    description: "Intelligent code assistant that leverages machine learning to provide contextual suggestions and automated refactoring capabilities.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["React", "Python", "TensorFlow", "OpenAI"],
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Interactive data visualization platform with real-time updates, featuring advanced filtering and predictive analytics capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Next.js", "D3.js", "Node.js", "MongoDB"],
  },
  {
    title: "Machine Learning Platform",
    description: "End-to-end ML pipeline platform enabling data scientists to build, train, and deploy models with automated monitoring and scaling.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Python", "FastAPI", "Docker", "AWS"],
  },
  {
    title: "Cross-Platform Mobile App",
    description: "Feature-rich mobile application with offline capabilities, real-time synchronization, and advanced UI animations.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["React Native", "TypeScript", "Firebase", "Redux"],
  },
];

export function ProjectsSection() {
  useEffect(() => {
    // Load GSAP and ScrollTrigger
    const script1 = document.createElement("script");
    script1.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    
    const script2 = document.createElement("script");
    script2.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
    
    script1.onload = () => {
      script2.onload = () => {
        if (window.gsap && window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger);
          
          window.gsap.utils.toArray('.project-card').forEach((card: any, i: number) => {
            window.gsap.fromTo(card, 
              { opacity: 0, scale: 0.8 },
              { 
                opacity: 1, 
                scale: 1, 
                duration: 0.8,
                delay: i * 0.2,
                scrollTrigger: {
                  trigger: card,
                  start: 'top 80%',
                  end: 'bottom 20%',
                  toggleActions: 'play none none reverse'
                }
              }
            );
          });
        }
      };
      document.head.appendChild(script2);
    };
    document.head.appendChild(script1);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions that blend creativity with technical excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card backdrop-blur-sm bg-white/10 dark:bg-black/20 border-white/20 dark:border-gray-700/20 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        tagIndex % 2 === 0 
                          ? 'bg-blue-500/20 text-blue-500' 
                          : 'bg-emerald-500/20 text-emerald-500'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600">
                    <Github size={16} className="mr-2" />
                    View Code
                  </Button>
                  <Button variant="ghost" size="sm" className="text-emerald-500 hover:text-emerald-600">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
