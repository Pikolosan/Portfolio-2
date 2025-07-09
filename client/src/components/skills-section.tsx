import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Brain } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    color: "text-blue-500",
    skills: [
      { name: "React/Next.js", level: 100 },
      { name: "TypeScript", level: 85 },
      { name: "Three.js", level: 80 },
    ],
  },
  {
    icon: Server,
    title: "Backend Development", 
    color: "text-emerald-500",
    skills: [
      { name: "Node.js/Express", level: 100 },
      { name: "Python/Django", level: 85 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
  {
    icon: Brain,
    title: "AI/ML & Data",
    color: "text-blue-500",
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "OpenAI API", level: 100 },
    ],
  },
];

export function SkillsSection() {
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
          
          window.gsap.utils.toArray('.skill-card').forEach((card: any, i: number) => {
            window.gsap.fromTo(card, 
              { opacity: 0, y: 50 },
              { 
                opacity: 1, 
                y: 0, 
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
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expertise across the full technology stack with specialized focus on AI/ML integration
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="skill-card backdrop-blur-sm bg-white/10 dark:bg-black/20 border-white/20 dark:border-gray-700/20 hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className={`${skillGroup.color} text-4xl mb-4`}>
                  <skillGroup.icon size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{skillGroup.title}</h3>
                <div className="space-y-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex justify-between items-center">
                      <span className="text-sm">{skill.name}</span>
                      <div className="w-24 bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ${
                            skillGroup.color.includes('blue') ? 'bg-blue-500' : 'bg-emerald-500'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
