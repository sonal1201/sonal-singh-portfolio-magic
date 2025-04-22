
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-portfolio-purple">
              Sonal<span className="text-portfolio-pink">.dev</span>
            </h3>
            <p className="text-foreground/60 text-sm mt-1">Engineer | Builder | Problem Solver</p>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-1 text-foreground/60 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span>Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-portfolio-pink" />
            </motion.div>
            <span>by Sonal Singh © {currentYear}</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
