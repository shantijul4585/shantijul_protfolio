import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Amazon Product Analytics",
      description: "Comprehensive Power BI dashboard analyzing Amazon product sales data with YTD and QTD metrics tracking.",
      technologies: ["Power BI", "DAX", "Power Query"],
      link: "https://github.com/shantijul4585/Amazon-Product-Analytics-PowerBI",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      gradient: "from-blue-400 to-purple-600"
    },
    {
      title: "Mobile Sales Intelligence",
      description: "Interactive Power BI dashboard for mobile phone sales analysis with advanced data cleaning and insights.",
      technologies: ["Power BI", "Data Cleaning", "Business Intelligence"],
      link: "https://github.com/shantijul4585/Mobile-Sales-Intelligence-Report-PowerBI",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      gradient: "from-green-400 to-blue-600"
    },
    {
      title: "Sales Performance Analysis",
      description: "Interactive Excel dashboard featuring slicers, multiple charts, and comprehensive data analysis.",
      technologies: ["Excel", "Dashboard", "Data Visualization"],
      link: "https://github.com/shantijul4585/Sales-Performance-Analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      gradient: "from-purple-400 to-pink-600"
    },
    {
      title: "Road Accident Analysis",
      description: "Interactive dashboard analyzing road accident data from 2021-2022 to support road safety improvements.",
      technologies: ["Safety Analytics", "Dashboard", "Data Insights"],
      link: "https://github.com/shantijul4585/Road-Accident-Analysis-Dashboard",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      gradient: "from-red-400 to-orange-600"
    },
    {
      title: "Stock Analysis Project",
      description: "Comprehensive Excel-based stock analysis focusing on Asian Paints and DMart historical performance.",
      technologies: ["Financial Analysis", "Excel", "Stock Market"],
      link: "https://github.com/shantijul4585/Stock-Analysis-AsianPaints-DMart",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      gradient: "from-yellow-400 to-orange-600"
    }
  ];

  const getTechBadgeColor = (tech: string) => {
    const colors = {
      "Power BI": "bg-blue-100 text-blue-800",
      "DAX": "bg-purple-100 text-purple-800",
      "Power Query": "bg-green-100 text-green-800",
      "Excel": "bg-green-100 text-green-800",
      "Dashboard": "bg-blue-100 text-blue-800",
      "Data Visualization": "bg-orange-100 text-orange-800",
      "Data Cleaning": "bg-yellow-100 text-yellow-800",
      "Business Intelligence": "bg-purple-100 text-purple-800",
      "Safety Analytics": "bg-red-100 text-red-800",
      "Data Insights": "bg-green-100 text-green-800",
      "Financial Analysis": "bg-yellow-100 text-yellow-800",
      "Stock Market": "bg-blue-100 text-blue-800"
    };
    return colors[tech as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">Featured Projects</h2>
          <div className="gradient-border h-1 w-24 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-50 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} className={getTechBadgeColor(tech)}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold">
              <a href="https://github.com/shantijul4585" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 w-5 h-5" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
