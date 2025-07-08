import { GraduationCap, School, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function EducationSection() {
  const education = [
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      degree: "Bachelor of Science in Statistics",
      institution: "Shahjalal University of Science and Technology",
      year: "2018 - 2022",
      description: "Comprehensive study in statistical methods, data analysis, and mathematical modeling."
    },
    {
      icon: <School className="w-6 h-6 text-white" />,
      degree: "Higher Secondary Certificate",
      institution: "Rajshahi Govt. City College",
      year: "Science Group - 2017",
      description: "Strong foundation in mathematics, physics, chemistry, and biology."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      degree: "Secondary School Certificate",
      institution: "Boalia Bilateral High School",
      year: "Science Group - 2015",
      description: "Excellence in fundamental scientific and mathematical concepts."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">Education</h2>
          <div className="gradient-border h-1 w-24 mx-auto mb-12 rounded-full"></div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                      <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                      <p className="text-gray-600 mb-2">{edu.year}</p>
                      <p className="text-gray-700">{edu.description}</p>
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
