
import { Github, Trophy, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const ExtracurricularCard = ({
  icon,
  title,
  description,
  index,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div 
      className="bg-card rounded-xl p-6 border border-border/50 shadow-sm hover:shadow-md hover:border-portfolio-purple/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 }
      }}
    >
      <motion.div 
        className="mb-4 p-3 bg-portfolio-purple/10 w-fit rounded-lg"
        whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <motion.h3 
        className="text-lg font-semibold mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 + 0.1 * index }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-foreground/70"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 + 0.1 * index }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const Extracurriculars = () => {
  const activities = [
    {
      icon: <Github className="w-6 h-6 text-portfolio-purple" />,
      title: "GitHub Student Club",
      description: "Active member, contributed to 5+ open-source projects and participated in community events.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-portfolio-purple" />,
      title: "Competitive Programming",
      description: "350+ LeetCode Problems solved, regular contest participant with strong problem-solving skills.",
    },
    {
      icon: <Trophy className="w-6 h-6 text-portfolio-purple" />,
      title: "Sports",
      description: "Active in college tournaments, district-level badminton champion demonstrating discipline and teamwork.",
    },
  ];

  return (
    <section id="extracurriculars" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="section-title mx-auto"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Extracurriculars
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {activities.map((activity, index) => (
            <ExtracurricularCard
              key={activity.title}
              icon={activity.icon}
              title={activity.title}
              description={activity.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars;
