import { Laptop, Users, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  const experiences = [
    {
      icon: <Laptop className="w-6 h-6 text-white" />,
      title: "IT Secretary",
      organization: "SUST Science Arena - 16th Executive Committee",
      period: "2020 - 2022",
      description: "Managed IT infrastructure, coordinated digital initiatives, and supported technological advancement for the organization."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Assistant General Secretary",
      organization: "Save The Tomorrow Foundation - 1st Executive Committee",
      period: "2020 - 2021",
      description: "Assisted in organizational management, coordinated community initiatives, and supported administrative operations."
    },
    {
      icon: <Bot className="w-6 h-6 text-white" />,
      title: "General Member",
      organization: "RoboSUST",
      period: "Active Member",
      description: "Participated in robotics projects, contributed to technical discussions, and engaged in STEM education initiatives."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">Experience</h2>
          <div className="gradient-border h-1 w-24 mx-auto mb-12 rounded-full"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gray-50 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                      <p className="text-blue-600 font-medium mb-2">{exp.organization}</p>
                      <p className="text-gray-600 mb-3">{exp.period}</p>
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
