import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Architectural Projects",
      description: "Architectural Projects Academic and Professional with Interiors ",
      image: "/Convention center.png",
      tech: ["Autocad", "Rhino", "Revit", "Sketchup","Lumion", "Photoshop"],
      github: "#",
      live: "#"
    },
    {
      title: "Generative Design",
      description: "Generative Design in-terms of sustainability and automation ",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      tech: ["Grasshopper", "python", "Ladybug", "c#"],
      github: "#",
      live: "#"
    },
    {
      title: "Robotics and Digital Fabrication",
      description: "Leveraging robotic fabrication and digital fabrication",
      image: "/THE PEARL-1.png",
      tech: ["Robots", "ROS2", "Docker", "CNC"],
      github: "#",
      live: "#"

    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-gray-700 hover:bg-white/20 transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-white hover:text-gray-900">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-white hover:text-gray-900">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
