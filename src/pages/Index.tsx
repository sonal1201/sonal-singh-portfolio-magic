
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Extracurriculars from "@/components/Extracurriculars";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <AnimatedSection id="about-section">
          <About />
        </AnimatedSection>
        <AnimatedSection id="skills-section">
          <Skills />
        </AnimatedSection>
        <AnimatedSection id="projects-section" delay={0.1}>
          <Projects />
        </AnimatedSection>
        <AnimatedSection id="certifications-section" delay={0.2}>
          <Certifications />
        </AnimatedSection>
        <AnimatedSection id="extracurriculars-section" delay={0.3}>
          <Extracurriculars />
        </AnimatedSection>
        <AnimatedSection id="education-section" delay={0.2}>
          <Education />
        </AnimatedSection>
        <AnimatedSection id="contact-section" delay={0.1}>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
