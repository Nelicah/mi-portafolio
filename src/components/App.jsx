import "../styles/tailwind.css";
import { Github, Linkedin, Mail } from "lucide-react";

import project1 from "../images/ivanani_web.png";
import project2 from "../images/task-manager.png";
import project3 from "../images/anonymous-proxy.png";
import project4 from "../images/buscador-animes.png";
import project5 from "../images/harry-potter.png";
import project6 from "../images/the-simpsons-logo.png";
import project7 from "../images/screenshot.png";
import project8 from "../images/agenda_contactos1.png";
import project9 from "../images/dragon-ball1.png";
import project10 from "../images/proyecto-molon2.png";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import Navbar from "./sections/NavBar";

function App() {
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
      title: "Ivanani",
      description: "página web animada para la empresa Immersive Creatures",
      image: project1,
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://ivananirobot.blogspot.com/p/blog-page_3.html",
      web: "https://immersivecreatures.com/",
    },
    {
      title: "Task Manager",
      description: "pequeña app para registrar tareas",
      image: project2,
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/Nelicah/task-manager",
      demo: "https://nelicah-task-manager.zeabur.app/",
    },
    {
      title: "Anonymous Proxy",
      description: "Mi primera web hecho con maquetación",
      image: project3,
      tech: ["HTML", "SASS", "Node.js"],
      github: "https://github.com/Nelicah/Anonymous-proxy",
      demo: "https://nelicah.github.io/Anonymous-proxy/",
    },
    {
      title: "Buscador animes",
      description:
        "Aplicación web para buscar animes y añadir a una lista los animes favoritos",
      image: project4,
      tech: ["HTML", "SASS", "JavaScript", "Node.js"],
      github: "https://github.com/Nelicah/Buscador-animes",
      demo: "https://nelicah.github.io/Buscador-animes/",
    },
    {
      title: "Harry Potter",
      description:
        "Aplicación web sobre los personajes del mundo de Harry Potter, con buscador y filtros y página de detalles del personaje.",
      image: project5,
      tech: ["React", "Node.js", "SASS"],
      github: "https://github.com/Nelicah/mi-web-sobre-Harry-Potter",
      demo: "https://nelicah.github.io/mi-web-sobre-Harry-Potter/",
    },
    {
      title: "API Rest Simpsons",
      description: "API sobre frases de Los Simpsons",
      image: project6,
      tech: ["JavaScript", "Node.js", "Express", "MySQL"],
      github: "https://github.com/Nelicah/API-rest-Simpson.git",
    },
    {
      title: "Piedra, papel o tijeras",
      description: "pequeño juego mítico hecho con JavaScript",
      image: project7,
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Nelicah/juego-piedra-papel-tijeras.git",
    },
    {
      title: "Agenda de contactos",
      description: `Agenda de contactos creada para demostrar mis conocimientos con React para un ejercicio técnico de "roleplay"`,
      image: project8,
      tech: ["React", "Node.js", "SASS"],
      github: "https://github.com/Nelicah/agenda-de-contactos.git",
      demo: "https://nelicah.github.io/agenda-de-contactos/",
    },
    {
      title: "Dragon Ball Universe",
      description: `Web interactiva sobre el universo de Dragon Ball para demostrar mis conocimientos con React para un ejercicio técnico de "roleplay"`,
      image: project9,
      tech: ["React", "Node.js", "SASS"],
      github: "https://github.com/Nelicah/dragon-ball-universe",
      demo: "https://nelicah.github.io/dragon-ball-universe/",
    },
    {
      title: "Proyecto Molón 2.0 (en grupo)",
      description:
        "Aplicación web para crear tarjetas sobre proyectos personales con API propia integrada",
      image: project10,
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
      <Navbar />

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
