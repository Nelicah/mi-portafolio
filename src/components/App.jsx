import "../styles/tailwind.css";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

import project1 from "../images/anonymous-proxy.png";
import project2 from "../images/buscador-animes.png";
import project3 from "../images/harry-potter.png";
import project4 from "../images/the-simpsons-logo.png";
import project5 from "../images/screenshot.png";
import project6 from "../images/proyecto-molon2.png";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "React", level: 40, color: "bg-blue-500" },
    { name: "JavaScript", level: 30, color: "bg-blue-400" },
    { name: "Node.js", level: 30, color: "bg-blue-700" },
    { name: "CSS/Tailwind", level: 50, color: "bg-purple-500" },
    { name: "SQL", level: 40, color: "bg-pink-500" },
    { name: "HTML", level: 60, color: "bg-pink-400" },
  ];

  const projects = [
    {
      title: "Anonymous Proxy",
      description: "Mi primera web hecho con maquetación",
      image: project1,
      tech: ["HTML", "SASS", "Node.js"],
      github: "https://github.com/Nelicah/Anonymous-proxy",
      demo: "https://nelicah.github.io/Anonymous-proxy/",
    },
    {
      title: "Buscador animes",
      description:
        "Aplicación web para buscar animes y añadir a una lista los animes favoritos",
      image: project2,
      tech: ["HTML", "SASS", "JavaScript", "Node.js"],
      github: "https://github.com/Nelicah/Buscador-animes",
      demo: "https://nelicah.github.io/Buscador-animes/",
    },
    {
      title: "Harry Potter",
      description:
        "Aplicación web sobre los personajes del mundo de Harry Potter, con buscador y filtros y página de detalles del personaje.",
      image: project3,
      tech: ["React", "Node.js", "Express", "SASS"],
      github: "https://github.com/Nelicah/mi-web-sobre-Harry-Potter",
      demo: "https://nelicah.github.io/mi-web-sobre-Harry-Potter/",
    },
    {
      title: "API Rest Simpsons",
      description: "API sobre frases de Los Simpsons",
      image: project4,
      tech: ["JavaScript", "Node.js", "Express", "MySQL"],
      github: "https://github.com/Nelicah/API-rest-Simpson.git",
    },
    {
      title: "Piedra, papel o tijeras",
      description: "pequeño juego mítico hecho con JavaScript",
      image: project5,
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Nelicah/juego-piedra-papel-tijeras.git",
    },
    {
      title: "Proyecto Molón (en grupo)",
      description:
        "Aplicación web para crear tarjetas sobre proyectos personales con API propia integrada",
      image: project6,
      tech: ["React", "Node.js", "MySQL", "Express", "SASS"],
      github: "https://github.com/Nelicah/Proyecto-molon-2.0.git",
      demo: "https://proyecto-molon-2-0-sgwe.onrender.com/",
    },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Nelicah
            </h1>
            <div className="hidden md:flex space-x-8">
              {[
                "Inicio",
                "Sobre mí",
                "Habilidades",
                "Proyectos",
                "Contacto",
              ].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <HeroSection scrollToSection={scrollToSection} />

      <AboutSection />

      <SkillsSection skills={skills} />

      <ProjectsSection projects={projects} />

      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Nelicah. Todos los derechos reservados.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.github.com/Nelicah"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/cande-zamora-125301349"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:candezmr2@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
