
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be connected to a backend in a real implementation
    console.log("Form submitted:", formState);
    // Reset form
    setFormState({ name: "", email: "", message: "" });
    // Show success message (in a real app, you might use a toast)
    alert("Thanks for reaching out! This form is a demo and not connected to a real backend.");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="section-title mx-auto"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Let's connect!</h3>
            <p className="text-foreground/70 mb-8">
              I'm always open to new opportunities, collaborations, or just a friendly chat about tech.
              Feel free to reach out through any of these platforms.
            </p>
            
            <div className="space-y-4">
              <motion.a 
                href="mailto:sonal1201kumar@gmail.com"
                className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50 hover:border-portfolio-purple/30 transition-all duration-300"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <motion.div 
                  className="p-2 bg-portfolio-purple/10 rounded-md"
                  whileHover={{ rotate: [-5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail className="w-6 h-6 text-portfolio-purple" />
                </motion.div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-foreground/70">sonal1201kumar@gmail.com</p>
                </div>
              </motion.a>
              
              <motion.a 
                href="https://linkedin.com/in/sonalsingh1201" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50 hover:border-portfolio-purple/30 transition-all duration-300"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div 
                  className="p-2 bg-portfolio-purple/10 rounded-md"
                  whileHover={{ rotate: [-5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Linkedin className="w-6 h-6 text-portfolio-purple" />
                </motion.div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <p className="text-foreground/70">sonalsingh1201</p>
                </div>
              </motion.a>
              
              <motion.a 
                href="https://github.com/sonal1201" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50 hover:border-portfolio-purple/30 transition-all duration-300"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div 
                  className="p-2 bg-portfolio-purple/10 rounded-md"
                  whileHover={{ rotate: [-5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Github className="w-6 h-6 text-portfolio-purple" />
                </motion.div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <p className="text-foreground/70">sonal1201</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="bg-card p-6 rounded-xl border border-border/50 shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6">Send a message</h3>
              
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="name" className="block text-foreground/70 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-portfolio-purple/50"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="email" className="block text-foreground/70 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-portfolio-purple/50"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <label htmlFor="message" className="block text-foreground/70 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-portfolio-purple/50"
                    required
                  ></textarea>
                </motion.div>
                
                <motion.button 
                  type="submit" 
                  className="button-primary w-full justify-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
