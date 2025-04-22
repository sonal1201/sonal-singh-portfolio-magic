
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <AnimatedSection id="about-section" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="mt-8 grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-foreground/80">
              Hello! I'm Sonal, a passionate Computer Science undergraduate at Lovely Professional University. 
              I thrive on turning complex problems into elegant solutions through code.
            </p>
            <p className="text-lg text-foreground/80">
              As a B.Tech CSE student (2022-2026) with a CGPA of 7.07, I'm constantly pushing myself 
              to learn and grow in the ever-evolving field of technology.
            </p>
            <p className="text-lg text-foreground/80">
              I believe in the power of clean code, efficient algorithms, and collaborative development. 
              When I'm not coding, you'll find me solving LeetCode problems or playing badminton.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden border-2 border-portfolio-purple/20 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/20 to-portfolio-pink/20 backdrop-blur-sm">
                <div className="w-full h-full flex items-center justify-center text-[12rem] font-bold text-white/20">
                  S
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -z-10 w-full h-full top-4 right-4 rounded-2xl bg-portfolio-purple/10"
              animate={{ 
                top: [4, 8, 4],
                right: [4, 8, 4],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
