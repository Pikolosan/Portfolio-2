import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
              <p>
                I'm a passionate Full Stack Developer with expertise in AI/ML integration, dedicated to creating innovative digital solutions that push the boundaries of what's possible on the web.
              </p>
              <p>
                With over 5 years of experience, I specialize in building scalable applications that seamlessly integrate artificial intelligence and machine learning capabilities with modern web technologies.
              </p>
              <p>
                My approach combines technical excellence with creative problem-solving, ensuring that every project not only meets functional requirements but also delivers exceptional user experiences.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-8">
              <Card className="text-center backdrop-blur-sm bg-white/10 dark:bg-black/20 border-white/20 dark:border-gray-700/20">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                    50+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="text-center backdrop-blur-sm bg-white/10 dark:bg-black/20 border-white/20 dark:border-gray-700/20">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                    5+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
              alt="Professional development workspace setup" 
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
            
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center animate-float">
              <span className="text-white text-2xl">&lt;/&gt;</span>
            </div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '-2s'}}>
              <span className="text-white text-xl">🎨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
