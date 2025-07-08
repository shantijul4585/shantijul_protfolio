import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: (data: typeof formData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your message has been sent successfully. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Create CV download data
  const cvData = `Shantijul Islam
Contact: +8801609034021
E-mail: shantijulislam4585@gmail.com
GitHub: https://github.com/shantijul4585
LinkedIn: https://www.linkedin.com/in/shantijul-islam/

CAREER OBJECTIVE
Passionately seeking a challenging role to harness my energy, analytical prowess, and unwavering commitment to excellence, with the aim of driving success for the institution and delivering top-notch service to clients.

EDUCATIONAL QUALIFICATIONS
1. BACHELOR OF SCIENCE
   University: Shahjalal University of Science and Technology
   Major: Statistics
   Passing Year: 2022

2. HIGHER SECONDARY CERTIFICATE
   Institute: Rajshahi Govt. City College
   Group: Science
   Passing Year: 2017

3. SECONDARY SCHOOL CERTIFICATE
   Institute: Boalia Bilateral High School
   Group: Science
   Passing Year: 2015

EXPERIENCES
1. IT Secretary | SUST Science Arena | 16th Executive Committee
   Duration: 2020 - 2022

2. Assistant General Secretary | Save The Tomorrow Foundation | 1st Executive Committee
   Duration: 2020 - 2021

3. General Member | RoboSUST

SKILLS
• MS Excel
• Power BI
• DAX
• Power Query
• MS Word
• MS PowerPoint

LANGUAGE PROFICIENCY
• Bangla - Native
• English - Conversational

PERSONAL INFORMATION
Date of Birth: 9 January, 1999
Permanent Address: Nowdapara, Boalia, Gomostapur, Chapai Nawabganj`;

  const downloadCV = () => {
    const element = document.createElement('a');
    const file = new Blob([cvData], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Shantijul_Islam_CV.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">Get In Touch</h2>
          <div className="gradient-border h-1 w-24 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-10 h-10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Email</p>
                    <p className="text-gray-900 font-medium">shantijulislam4585@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-10 h-10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Phone</p>
                    <p className="text-gray-900 font-medium">+880 1609 034021</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-10 h-10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Location</p>
                    <p className="text-gray-900 font-medium">Sylhet, Bangladesh</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/shantijul4585"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/shantijul-islam/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="mailto:shantijulislam4585@gmail.com"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button
                    onClick={downloadCV}
                    className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white"
                  >
                    <Download className="mr-2 w-4 h-4" />
                    Download CV
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Contact Form */}
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Message Subject"
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
