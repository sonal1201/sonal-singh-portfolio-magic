import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Extracurriculars", href: "#extracurriculars" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5
      }}
    >
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#home" 
            className="text-xl font-heading font-bold text-portfolio-purple"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sonal<span className="text-portfolio-pink">.dev</span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-portfolio-purple transition-colors duration-300 text-sm font-medium"
                onClick={closeMenu}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.3 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
            
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-300"
              aria-label="Toggle theme"
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -30 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-portfolio-purple" />
              )}
            </motion.button>
          </div>

          <div className="flex items-center md:hidden gap-4">
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-300"
              aria-label="Toggle theme"
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-portfolio-purple" />
              )}
            </motion.button>
            
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors duration-300"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div
        className="md:hidden overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-background border-t border-border/50">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="block py-2 text-foreground/80 hover:text-portfolio-purple transition-colors duration-300 font-medium"
              onClick={closeMenu}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: 0.05 * i }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
