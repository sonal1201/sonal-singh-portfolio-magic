
import { Cloud, BookText, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: JSX.Element;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Nov 2024",
      icon: <Cloud className="w-10 h-10 text-portfolio-purple" />,
    },
    {
      title: "Design & Analysis of Algorithms",
      issuer: "Coursera",
      date: "May 2024",
      icon: <BookText className="w-10 h-10 text-portfolio-purple" />,
    },
    {
      title: "Generative AI for Everyone",
      issuer: "Coursera",
      date: "May 2024",
      icon: <Lightbulb className="w-10 h-10 text-portfolio-purple" />,
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="section-title mx-auto"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>
        
        <div className="mt-12 space-y-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.title} 
              className="certificate-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="p-3 bg-background rounded-lg shadow-sm border border-border/50"
                whileHover={{ rotate: [-2, 2, -2, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {cert.icon}
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-foreground/60 text-sm">{cert.issuer} • {cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
