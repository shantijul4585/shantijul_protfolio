import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const technicalSkills = [
    { name: "MS Excel", level: 95 },
    { name: "Power BI", level: 90 },
    { name: "DAX", level: 85 },
    { name: "Power Query", level: 80 },
    { name: "MS PowerPoint", level: 85 },
    { name: "MS Word", level: 90 }
  ];

  const languages = [
    { name: "Bangla", level: "Native" },
    { name: "English", level: "Conversational" }
  ];

  const specialQualifications = [
    "Handling high-pressure situations",
    "Continuous improvement mindset",
    "Analytical problem solving",
    "Detail-oriented approach"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">Skills & Expertise</h2>
          <div className="gradient-border h-1 w-24 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {technicalSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Language & Soft Skills */}
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">Languages & Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Language Proficiency</h4>
                    <div className="space-y-3">
                      {languages.map((lang, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-700">{lang.name}</span>
                          <Badge 
                            variant={lang.level === "Native" ? "default" : "secondary"}
                            className={lang.level === "Native" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}
                          >
                            {lang.level}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Special Qualifications</h4>
                    <div className="space-y-3">
                      {specialQualifications.map((qualification, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                          <span className="text-gray-700">{qualification}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
