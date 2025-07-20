import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolios = () => {
  const portfolios = [
    {
      title: "Architectural Portfolio",
      description: "Architectural Projects Academic and Professional with Interiors ",
      image: "/Convention center.png",
      tech: ["Autocad", "Rhino", "Revit", "Sketchup","Lumion", "Photoshop"],
      linkTo: "portfolio/0"
    },
    {
      title: "Generative Design",
      description: "Generative Design in-terms of sustainability and automation ",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      tech: ["Grasshopper", "python", "Ladybug", "c#"],
      linkTo: "portfolio/1"
    },
    {
      title: "Robotics and Digital Fabrication",
      description: "Leveraging robotic fabrication and digital fabrication",
      image: "/THE PEARL-1.png",
      tech: ["Robots", "ROS2", "Docker", "CNC"],
      linkTo: "portfolio/2"
    }
  ];

  return (
    <section id="portfolios" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Portfolios
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map((portfolio, index) => (
            <Link key={index} to={portfolio.linkTo} style={{textDecoration: 'none'}}>
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-gray-700 hover:bg-white/20 transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={portfolio.image} 
                    alt={portfolio.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{portfolio.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {portfolio.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {portfolio.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
