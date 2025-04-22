
import {
  Code2,
  Database,
  FileCode,
  FileCode2,
  GitBranch,
  Globe,
  Clock,
  MessagesSquare,
  BrainCircuit,
  Code,
  ServerCog,
  Network,
  TerminalSquare,
  Workflow,
  Cpu,
  Users,
  Lightbulb,
  Award
} from "lucide-react";
import { motion } from "framer-motion";

const SkillCard = ({ skill, index }: { skill: { name: string; icon: JSX.Element }; index: number }) => {
  return (
    <motion.div 
      className="skill-card group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        {skill.icon}
      </motion.div>
      <span className="font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
        {skill.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: <Code2 className="skill-icon" /> },
        { name: "Python", icon: <FileCode className="skill-icon" /> },
        { name: "JavaScript", icon: <FileCode2 className="skill-icon" /> },
        { name: "TypeScript", icon: <Code className="skill-icon" /> },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "HTML & CSS", icon: <Globe className="skill-icon" /> },
        { name: "React", icon: <Code2 className="skill-icon" /> },
        { name: "Node.js", icon: <ServerCog className="skill-icon" /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <Database className="skill-icon" /> },
        { name: "MySQL", icon: <Database className="skill-icon" /> },
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "Algorithm Analysis", icon: <Workflow className="skill-icon" /> },
        { name: "Operating Systems", icon: <Cpu className="skill-icon" /> },
        { name: "DBMS", icon: <Database className="skill-icon" /> },
        { name: "Networking", icon: <Network className="skill-icon" /> },
        { name: "Data Structures", icon: <BrainCircuit className="skill-icon" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Linux", icon: <TerminalSquare className="skill-icon" /> },
        { name: "Git", icon: <GitBranch className="skill-icon" /> },
        { name: "Docker", icon: <Code2 className="skill-icon" /> },
        { name: "Bash", icon: <TerminalSquare className="skill-icon" /> },
        { name: "VS Code", icon: <Code className="skill-icon" /> },
        { name: "Prompt Engineering", icon: <BrainCircuit className="skill-icon" /> },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem-Solving", icon: <Lightbulb className="skill-icon" /> },
        { name: "Teamwork", icon: <Users className="skill-icon" /> },
        { name: "Leadership", icon: <Award className="skill-icon" /> },
        { name: "Communication", icon: <MessagesSquare className="skill-icon" /> },
        { name: "Time Management", icon: <Clock className="skill-icon" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="section-title mx-auto"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        
        <div className="mt-12 space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground/90">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    index={skillIndex} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
