
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { GiMechanicalArm } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
import {BsBuildings  } from "react-icons/bs"

const About = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          
          {/* Profile Image Section */}
          <div className="flex justify-center mb-8">
            <Avatar className="w-32 h-32 md:w-40 md:h-40 ring-4 ring-blue-400/30 hover:ring-blue-400/50 transition-all duration-300">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face" 
                alt="Profile picture"
                className="object-cover"
              />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-2xl font-bold">
                YN
              </AvatarFallback>
            </Avatar>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm an architect with a strong foundation in design and technical innovation, I did a Master's in Robotics for Advanced Architecture. Experienced in digital fabrication, site coordination, and computational tools such as Rhino, Grasshopper, and ROS. Skilled in managing architectural projects from concept to execution with a focus on precision and efficiency
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-gray-700 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <BsBuildings className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Architectural and Interior Design</h3>
              <p className="text-gray-300">
                Writing maintainable, scalable code that follows best practices and modern standards.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-gray-700 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <LuBrainCircuit className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Computational & Generative Design</h3>
              <p className="text-gray-300">
                Creating intuitive user experiences with attention to detail and modern design principles.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-gray-700 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <GiMechanicalArm className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Robotic Manufacturing and Digital Fabrication</h3>
              <p className="text-gray-300">
                Optimizing applications for speed, accessibility, and exceptional user experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
