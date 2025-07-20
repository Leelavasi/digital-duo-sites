import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PortfolioDetails = () => {
  const { portfolioId } = useParams<{ portfolioId: string }>();
  
  const portfolios = [
    {
      title: "Convention Center",
      description: "Architectural Projects Academic and Professional with Interiors ",
      image: "/Convention center.png",
      tech: ["Autocad", "Rhino", "Revit", "Sketchup","Lumion", "Photoshop"],
      fullDescription: "Comprehensive architectural design projects spanning both academic and professional work. These projects focus on creating functional and aesthetically pleasing spaces with detailed interior design elements. The work encompasses residential, commercial, and institutional buildings with emphasis on sustainable design principles and modern architectural practices.",
      projects: [
        {
          title: "Modern Convention Center",
          description: "A contemporary convention center with flexible spaces and sustainable design features",
          image: "/Convention center.png",
          year: "2023",
          
          location: "Downtown District"
        },
        {
          title: "Residential Complex",
          description: "Multi-family housing with integrated green spaces and modern amenities",
          image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
          year: "2022",
          location: "Urban Center"
        },
        {
          title: "Corporate Headquarters",
          description: "Sustainable office building with biophilic design principles",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
          year: "2023",
          location: "Business District"
        }
      ]
    },
    {
      title: "Generative Design",
      description: "Generative Design in-terms of sustainability and automation ",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      tech: ["Grasshopper", "python", "Ladybug", "c#"],
      fullDescription: "Advanced generative design workflows that leverage computational tools to create sustainable and efficient design solutions. This work explores the intersection of parametric design, environmental analysis, and automation to generate optimized building forms and systems that respond to environmental conditions and performance criteria.",
      projects: [
        {
          title: "Parametric Facade System",
          description: "Adaptive facade that responds to environmental conditions using algorithmic design",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
          year: "2023",
          location: "Research Lab"
        },
        {
          title: "Climate-Responsive Structure",
          description: "Building form generated through environmental analysis and optimization algorithms",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
          year: "2022",
          location: "Academic Project"
        },
        {
          title: "Optimization Framework",
          description: "Custom tools for multi-objective optimization in architectural design",
          image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80",
          year: "2023",
          location: "Software Development"
        }
      ]
    },
    {
      title: "Robotics and Digital Fabrication",
      description: "Leveraging robotic fabrication and digital fabrication",
      image: "/THE PEARL-1.png",
      tech: ["Robots", "ROS2", "Docker", "CNC"],
      fullDescription: "Cutting-edge exploration of robotic fabrication techniques and digital manufacturing processes. This work involves programming industrial robots for construction tasks, developing custom fabrication workflows, and integrating digital design tools with physical production methods to create innovative architectural elements and structures.",
      projects: [
        {
          title: "The Pearl Installation",
          description: "Robotic fabrication of complex geometries using additive manufacturing techniques",
          image: "/THE PEARL-1.png",
          year: "2023",
          location: "Fabrication Lab"
        },
        {
          title: "Automated Construction System",
          description: "Robotic assembly system for modular building components",
          image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80",
          year: "2022",
          location: "Research Facility"
        },
        {
          title: "Digital Timber Framework",
          description: "CNC fabricated timber joints with precision assembly protocols",
          image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
          year: "2023",
          location: "Workshop"
        }
      ]
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
          
          <div className="flex flex-wrap gap-2">
            {portfolio.tech.map((tech, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border-gray-600 px-4 py-2 text-sm hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 hover:scale-105"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.projects.map((project, index) => (
              <Link key={index} to={`/project/${portfolioIndex}/${index}`} style={{ textDecoration: 'none' }}>
                <Card className="bg-card border-border hover:bg-card/80 transition-colors">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-foreground">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{project.year}</span>
                      <span>{project.location}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;