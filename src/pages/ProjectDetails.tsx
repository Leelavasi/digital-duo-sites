import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectDetails = () => {
  const { portfolioId, projectId } = useParams<{ portfolioId: string; projectId: string }>();
  
  const portfolios = [
    {
      title: "Convention Center",
      description: "Architectural Projects Academic and Professional with Interiors ",
      image: "/Convention center.png",
      tech: ["Autocad", "Rhino", "Revit", "Sketchup","Lumion", "Photoshop"],
      projects: [
        {
          title: "Modern Convention Center",
          description: "A contemporary convention center with flexible spaces and sustainable design features",
          image: "/Convention center.png",
          year: "2023",
          location: "Downtown District",
          fullDescription: "This modern convention center represents a new paradigm in flexible event spaces. The design emphasizes sustainability with integrated green technologies, natural lighting systems, and energy-efficient climate control. The building features modular spaces that can be reconfigured for various event types, from large conferences to intimate meetings.",
          features: ["Sustainable design", "Flexible modular spaces", "Advanced AV systems", "Green roof technology", "Natural lighting optimization"]
        },
        {
          title: "Residential Complex",
          description: "Multi-family housing with integrated green spaces and modern amenities",
          image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
          year: "2022",
          location: "Urban Center",
          fullDescription: "A comprehensive residential development that balances urban density with quality of life. The complex features integrated green spaces, community areas, and modern amenities while maintaining sustainable design principles throughout.",
          features: ["Green integration", "Community spaces", "Modern amenities", "Sustainable materials", "Urban planning"]
        },
        {
          title: "Corporate Headquarters",
          description: "Sustainable office building with biophilic design principles",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
          year: "2023",
          location: "Business District",
          fullDescription: "A corporate headquarters that reimagines the modern workplace through biophilic design principles. The building integrates natural elements throughout, creating a healthier and more productive work environment while maintaining high sustainability standards.",
          features: ["Biophilic design", "Natural integration", "Workplace wellness", "Energy efficiency", "Modern workspace"]
        }
      ]
    },
    {
      title: "Generative Design",
      description: "Generative Design in-terms of sustainability and automation ",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      tech: ["Grasshopper", "python", "Ladybug", "c#"],
      projects: [
        {
          title: "Parametric Facade System",
          description: "Adaptive facade that responds to environmental conditions using algorithmic design",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
          year: "2023",
          location: "Research Lab",
          fullDescription: "An innovative facade system that dynamically responds to environmental conditions through parametric design algorithms. The system optimizes for solar gain, natural lighting, and thermal performance while maintaining aesthetic appeal.",
          features: ["Adaptive response", "Environmental optimization", "Algorithmic design", "Thermal performance", "Dynamic aesthetics"]
        },
        {
          title: "Climate-Responsive Structure",
          description: "Building form generated through environmental analysis and optimization algorithms",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
          year: "2022",
          location: "Academic Project",
          fullDescription: "A building design generated through comprehensive environmental analysis and multi-objective optimization. The form responds to local climate conditions, maximizing comfort while minimizing energy consumption.",
          features: ["Climate analysis", "Form optimization", "Energy efficiency", "Environmental response", "Computational design"]
        },
        {
          title: "Optimization Framework",
          description: "Custom tools for multi-objective optimization in architectural design",
          image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80",
          year: "2023",
          location: "Software Development",
          fullDescription: "A comprehensive optimization framework that enables multi-objective design optimization in architecture. The tool integrates various performance metrics to guide design decisions towards optimal solutions.",
          features: ["Multi-objective optimization", "Performance metrics", "Design guidance", "Computational tools", "Decision support"]
        }
      ]
    },
    {
      title: "Robotics and Digital Fabrication",
      description: "Leveraging robotic fabrication and digital fabrication",
      image: "/THE PEARL-1.png",
      tech: ["Robots", "ROS2", "Docker", "CNC"],
      projects: [
        {
          title: "The Pearl Installation",
          description: "Robotic fabrication of complex geometries using additive manufacturing techniques",
          image: "/THE PEARL-1.png",
          year: "2023",
          location: "Fabrication Lab",
          fullDescription: "An artistic installation showcasing the potential of robotic fabrication in creating complex architectural geometries. The project demonstrates advanced additive manufacturing techniques and precision robotic control.",
          features: ["Robotic fabrication", "Complex geometries", "Additive manufacturing", "Precision control", "Artistic expression"]
        },
        {
          title: "Automated Construction System",
          description: "Robotic assembly system for modular building components",
          image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80",
          year: "2022",
          location: "Research Facility",
          fullDescription: "A comprehensive robotic system for automated construction of modular building components. The system demonstrates how robotics can revolutionize construction processes and improve precision and efficiency.",
          features: ["Automated assembly", "Modular construction", "Robotic systems", "Construction innovation", "Precision engineering"]
        },
        {
          title: "Digital Timber Framework",
          description: "CNC fabricated timber joints with precision assembly protocols",
          image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
          year: "2023",
          location: "Workshop",
          fullDescription: "A digital fabrication approach to traditional timber construction, using CNC technology to create precise joints and assembly protocols. The project bridges traditional craftsmanship with modern digital tools.",
          features: ["CNC fabrication", "Timber construction", "Precision joints", "Digital craftsmanship", "Traditional methods"]
        }
      ]
    }
  ];

  const portfolioIndex = parseInt(portfolioId || "0");
  const projectIndex = parseInt(projectId || "0");
  
  const portfolio = portfolios[portfolioIndex];
  const project = portfolio?.projects[projectIndex];

  if (!portfolio || !project) {
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
        <Link to={`/portfolio/${portfolioIndex}`} className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {portfolio.title}
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="aspect-video overflow-hidden rounded-lg">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="text-sm text-muted-foreground mb-2">{portfolio.title}</div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {project.description}
              </p>
              <p className="text-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Year:</span>
                <div className="text-foreground font-medium">{project.year}</div>
              </div>
              <div>
                <span className="text-muted-foreground">Location:</span>
                <div className="text-foreground font-medium">{project.location}</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
              <div className="space-y-2">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
