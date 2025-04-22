
import { School, MapPin, Calendar, GraduationCap, Book } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="section-title mx-auto"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        
        <div className="mt-12">
          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-portfolio-purple/30 transform md:-translate-x-1/2"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            
            {/* University Education */}
            <div className="relative pl-8 md:pl-0 md:ml-[50%] md:pr-4 pb-12">
              {/* Timeline dot */}
              <motion.div 
                className="absolute left-0 md:left-0 top-0 w-6 h-6 rounded-full bg-portfolio-purple transform md:-translate-x-1/2 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <motion.div 
                  className="w-3 h-3 rounded-full bg-white"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              
              <motion.div 
                className="md:max-w-lg bg-card rounded-xl p-6 border border-border/50 shadow-lg ml-4 md:-ml-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center gap-2 text-portfolio-purple mb-1">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <School className="w-5 h-5" />
                  </motion.div>
                  <span className="font-medium">University</span>
                </div>
                
                <h3 className="text-xl font-bold">Lovely Professional University</h3>
                <p className="text-lg font-medium text-foreground/80">B.Tech Computer Science & Engineering</p>
                
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 text-foreground/60 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Aug 2022 – July 2026</span>
                  </div>
                  <div className="hidden sm:block">•</div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Punjab, India</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">CGPA</span>
                    <span className="font-bold text-lg">7.07</span>
                  </div>
                  <motion.div 
                    className="mt-2 w-full bg-background rounded-full h-2"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <motion.div 
                      className="bg-portfolio-purple h-2 rounded-full" 
                      style={{ width: "70.7%" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "70.7%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* 12th Grade */}
            <div className="relative pl-8 md:pl-0 md:ml-[50%] md:pr-4 pb-12">
              <motion.div 
                className="absolute left-0 md:left-0 top-0 w-6 h-6 rounded-full bg-portfolio-purple transform md:-translate-x-1/2 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <motion.div 
                  className="w-3 h-3 rounded-full bg-white"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              
              <motion.div 
                className="md:max-w-lg bg-card rounded-xl p-6 border border-border/50 shadow-lg ml-4 md:-ml-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center gap-2 text-portfolio-purple mb-1">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GraduationCap className="w-5 h-5" />
                  </motion.div>
                  <span className="font-medium">12th Grade</span>
                </div>
                
                <h3 className="text-xl font-bold">Kendriya Vidyalaya</h3>
                <p className="text-lg font-medium text-foreground/80">CBSE | Science Stream</p>
                
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 text-foreground/60 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>2020 – 2022</span>
                  </div>
                  <div className="hidden sm:block">•</div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Punjab, India</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Percentage</span>
                    <span className="font-bold text-lg">87.6%</span>
                  </div>
                  <motion.div 
                    className="mt-2 w-full bg-background rounded-full h-2"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <motion.div 
                      className="bg-portfolio-purple h-2 rounded-full" 
                      style={{ width: "87.6%" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "87.6%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* 10th Grade */}
            <div className="relative pl-8 md:pl-0 md:ml-[50%] md:pr-4 pb-12">
              <motion.div 
                className="absolute left-0 md:left-0 top-0 w-6 h-6 rounded-full bg-portfolio-purple transform md:-translate-x-1/2 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <motion.div 
                  className="w-3 h-3 rounded-full bg-white"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              
              <motion.div 
                className="md:max-w-lg bg-card rounded-xl p-6 border border-border/50 shadow-lg ml-4 md:-ml-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center gap-2 text-portfolio-purple mb-1">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Book className="w-5 h-5" />
                  </motion.div>
                  <span className="font-medium">10th Grade</span>
                </div>
                
                <h3 className="text-xl font-bold">Kendriya Vidyalaya</h3>
                <p className="text-lg font-medium text-foreground/80">CBSE</p>
                
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 text-foreground/60 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>2018 – 2020</span>
                  </div>
                  <div className="hidden sm:block">•</div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Punjab, India</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Percentage</span>
                    <span className="font-bold text-lg">92.4%</span>
                  </div>
                  <motion.div 
                    className="mt-2 w-full bg-background rounded-full h-2"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <motion.div 
                      className="bg-portfolio-purple h-2 rounded-full" 
                      style={{ width: "92.4%" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "92.4%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
