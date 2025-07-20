
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    if(!formRef) return; 
    e.preventDefault();
    console.log('Email', new FormData(formRef.current));
  }
  
  return (
    <section id="contact" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-300">Email</p>
                  <p className="text-white font-semibold">ar.vasistamonavarthy252gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-300">Phone</p>
                  <p className="text-white font-semibold">+34 674058445</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-gray-300">Location</p>
                  <p className="text-white font-semibold">Barcelona, Spain</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-gray-700">
            <CardContent className="p-8">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    name="name"
                    placeholder="Your Name" 
                    className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  <Input 
                    name="email"
                    placeholder="Your Email" 
                    type="email"
                    className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <Input 
                  name="subject"
                  placeholder="Subject" 
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                />
                <Textarea 
                  name="body"
                  placeholder="Your Message" 
                  rows={6}
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                />
                <Button type="submit" className="w-full py-3 rounded-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
