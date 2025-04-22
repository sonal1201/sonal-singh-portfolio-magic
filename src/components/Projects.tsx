
import { Database, Server, Cpu, GitBranch, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ 
  title, 
  description, 
  techStack, 
  githubLink,
  imageUrl,
  index
}: { 
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  imageUrl?: string;
  index: number;
}) => {
  return (
    <motion.div 
      className="project-card" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <motion.div 
        className="h-48 bg-muted relative overflow-hidden"
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-portfolio-purple/20 to-portfolio-pink/20">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <motion.div 
              className="text-7xl text-muted-foreground opacity-50"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Server className="w-16 h-16" />
            </motion.div>
          )}
        </div>
      </motion.div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground/70 mb-4 flex-grow">{description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, techIndex) => (
              <motion.span 
                key={tech} 
                className="badge"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + techIndex * 0.05 }}
                whileHover={{ y: -2, scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          {githubLink && (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button-outline w-full justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <GitBranch className="w-4 h-4" />
              <span>View on GitHub</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Coding Platform Backend System",
      description: "Microservices-based code submission platform with real-time feedback using WebSockets.",
      techStack: ["Node.js", "Express", "TypeScript", "Fastify", "MongoDB", "Redis", "Docker"],
      githubLink: "https://github.com/sonal1201/coding-platform",
    },
    {
      title: "Uber Ride Booking Backend",
      description: "Real-time driver matching with geospatial queries and radius-based ride allocation. JWT + RBAC-based Auth.",
      techStack: ["Node.js", "Express", "MongoDB", "Redis", "Socket.io"],
      githubLink: "https://github.com/sonal1201/uber-booking",
    },
    {
      title: "Mall Customer Segmentation (ML)",
      description: "K-Means clustering and PCA-based behavior analysis for customer segmentation.",
      techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      githubLink: "https://github.com/sonal1201/customer-segmentation",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="section-title mx-auto"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
