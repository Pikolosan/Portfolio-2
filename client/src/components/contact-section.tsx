import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: data.message,
      });
      form.reset();
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate on your next project.
          </p>
        </div>
        
        <Card className="backdrop-blur-sm bg-white/10 dark:bg-black/20 border-white/20 dark:border-gray-700/20 rounded-2xl">
          <CardContent className="p-8 md:p-12">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-emerald-500 mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your Name" 
                              {...field}
                              className="bg-white/10 dark:bg-black/10 backdrop-blur-sm border-white/20 dark:border-gray-600 focus:border-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="your@email.com" 
                              {...field}
                              className="bg-white/10 dark:bg-black/10 backdrop-blur-sm border-white/20 dark:border-gray-600 focus:border-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Project Discussion" 
                            {...field}
                            className="bg-white/10 dark:bg-black/10 backdrop-blur-sm border-white/20 dark:border-gray-600 focus:border-blue-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={6}
                            placeholder="Tell me about your project..." 
                            {...field}
                            className="bg-white/10 dark:bg-black/10 backdrop-blur-sm border-white/20 dark:border-gray-600 focus:border-blue-500 resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                    <Send className="ml-2" size={20} />
                  </Button>
                </form>
              </Form>
            )}
            
            <div className="mt-12 text-center">
              <div className="flex justify-center space-x-6">
                <a 
                  href="#" 
                  className="text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={28} />
                </a>
                <a 
                  href="#" 
                  className="text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={28} />
                </a>
                <a 
                  href="#" 
                  className="text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={28} />
                </a>
                <a 
                  href="mailto:contact@example.com" 
                  className="text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={28} />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
