import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioDetails = () => {
  const { portfolioId } = useParams<{ portfolioId: string }>();
  
  const portfolios = [
    {
      title: "Architectural Portfolio",
      description: "Architectural Projects Academic and Professional with Interiors ",
      image: "/Convention center.png",
      tech: ["Autocad", "Rhino", "Revit", "Sketchup","Lumion", "Photoshop"],
      fullDescription: "Comprehensive architectural design projects spanning both academic and professional work. These projects focus on creating functional and aesthetically pleasing spaces with detailed interior design elements. The work encompasses residential, commercial, and institutional buildings with emphasis on sustainable design principles and modern architectural practices."
    },
    {
      title: "Generative Design",
      description: "Generative Design in-terms of sustainability and automation ",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      tech: ["Grasshopper", "python", "Ladybug", "c#"],
      fullDescription: "Advanced generative design workflows that leverage computational tools to create sustainable and efficient design solutions. This work explores the intersection of parametric design, environmental analysis, and automation to generate optimized building forms and systems that respond to environmental conditions and performance criteria."
    },
    {
      title: "Robotics and Digital Fabrication",
      description: "Leveraging robotic fabrication and digital fabrication",
      image: "/THE PEARL-1.png",
      tech: ["Robots", "ROS2", "Docker", "CNC"],
      fullDescription: "Cutting-edge exploration of robotic fabrication techniques and digital manufacturing processes. This work involves programming industrial robots for construction tasks, developing custom fabrication workflows, and integrating digital design tools with physical production methods to create innovative architectural elements and structures."
    }
  ];

  const portfolioIndex = parseInt(portfolioId || "0");
  const portfolio = portfolios[portfolioIndex];

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="aspect-video overflow-hidden rounded-lg">
            <img 
              src={portfolio.image} 
              alt={portfolio.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {portfolio.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {portfolio.description}
              </p>
              <p className="text-foreground leading-relaxed">
                {portfolio.fullDescription}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {portfolio.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;