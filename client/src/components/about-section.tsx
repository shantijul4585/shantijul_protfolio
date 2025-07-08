import { TrendingUp, BarChart3, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Data Analysis",
      description: "Expert in statistical analysis and data interpretation"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Data Visualization",
      description: "Creating compelling dashboards and reports"
    },
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "Business Intelligence",
      description: "Transforming data into actionable insights"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="gradient-border h-1 w-24 mx-auto mb-12 rounded-full"></div>
          
          <Card className="bg-gray-50 border-none shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Career Objective</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Passionately seeking a challenging role to harness my energy, analytical prowess, and 
                unwavering commitment to excellence, with the aim of driving success for the institution 
                and delivering top-notch service to clients.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
