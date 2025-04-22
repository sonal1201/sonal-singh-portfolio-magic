
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center relative">
      {/* Background elements */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 bg-portfolio-purple/10 rounded-full blur-3xl -z-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-64 h-64 bg-portfolio-pink/10 rounded-full blur-3xl -z-10"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div 
            className="flex-1 order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Sonal Singh
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-foreground/80 mb-8 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Engineer | Builder | Problem Solver
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.a 
                href="https://linkedin.com/in/sonalsingh1201" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin />
              </motion.a>
              <motion.a 
                href="https://github.com/sonal1201" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github />
              </motion.a>
              <motion.a 
                href="mailto:sonal1201kumar@gmail.com" 
                className="social-icon"
                aria-label="Email"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail />
              </motion.a>
            </motion.div>
            
            <motion.a 
              href="#contact" 
              className="button-primary w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's connect!
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="flex-1 order-1 md:order-2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-portfolio-purple/30 to-portfolio-pink/30 
                        flex items-center justify-center relative overflow-hidden border-4 border-white/30 shadow-xl"
              animate={{ 
                boxShadow: [
                  "0 10px 30px rgba(139, 92, 246, 0.2)", 
                  "0 10px 30px rgba(244, 114, 182, 0.2)", 
                  "0 10px 30px rgba(139, 92, 246, 0.2)"
                ] 
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Profile image placeholder */}
              <div className="absolute inset-2 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-8xl text-gray-400">S</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <span className="text-sm font-medium text-foreground/60">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-portfolio-purple" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
