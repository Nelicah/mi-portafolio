import "../styles/tailwind.css";
import {
  Github,
  Linkedin,
  Mail,
  Users,
  Zap,
  Lightbulb,
  Target,
} from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiSass,
  SiMysql,
  SiPhp,
  SiExpress,
  SiGreensock,
  SiGooglechrome,
  SiIntellijidea,
  SiGit,
  SiGithub,
  SiJest,
  SiGnometerminal,
  SiPostgresql,
  SiTypescript,
  SiPostman,
  SiDocker,
  SiMongodb,
  SiPython,
  SiTailwindcss,
  SiNextdotjs,
  SiXampp,
  SiApache,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";

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
import project11 from "../images/catalogo_peliculas.png";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import Navbar from "./sections/NavBar";

function App() {
  const techSkills = [
    {
      name: "HTML",
      icon: SiHtml5,
      color: "text-orange-500",
      description:
        "Etiquetas semánticas y componentes variados, no siempre div",
    },
    {
      name: "CSS",
      icon: SiCss3,
      color: "text-blue-400",
      description:
        "Layouts responsive, Flexbox, Grid, animaciones y diseño puro",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-cyan-400",
      description:
        "Utility-first, diseño responsive rápido y componentes personalizados",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "text-yellow-400",
      description: "Manipulación del DOM, consumo de APIs y lógica asíncrona",
    },
    {
      name: "React",
      icon: SiReact,
      color: "text-cyan-400",
      description:
        "Componentes reutilizables, hooks, gestión de estado y rutas",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "text-green-500",
      description: "Entornos de desarrollo, scripts y servidor backend",
    },
    {
      name: "SASS",
      icon: SiSass,
      color: "text-pink-400",
      description:
        "Variables, mixins, nesting y arquitectura modular de estilos",
    },
    {
      name: "SQL",
      icon: SiMysql,
      color: "text-blue-500",
      description:
        "Consultas, joins, CRUD y diseño de bases de datos relacionales. Experiencia con MySQL",
    },
    {
      name: "PHP",
      icon: SiPhp,
      color: "text-purple-400",
      description:
        "POO, principios SOLID, conexión a base de datos y lógica del servidor",
    },
    {
      name: "Express",
      icon: SiExpress,
      color: "text-gray-300",
      description: "Creación de APIs REST con middlewares y rutas",
    },
    {
      name: "GSAP",
      icon: SiGreensock,
      color: "text-green-400",
      description:
        "Animaciones fluidas, transiciones interactivas y ScrollTrigger",
    },
    {
      name: "DevTools",
      icon: SiGooglechrome,
      color: "text-yellow-300",
      description: "Depuración, análisis de rendimiento y testing en navegador",
    },
    {
      name: "VS Code",
      icon: VscVscode,
      color: "text-blue-400",
      description:
        "Editor principal con extensiones, snippets y atajos personalizados",
    },
    {
      name: "IntelliJ",
      icon: SiIntellijidea,
      color: "text-orange-400",
      description: "IDE para desarrollo backend y proyectos más complejos",
    },
    {
      name: "Git",
      icon: SiGit,
      color: "text-red-500",
      description:
        "Control de versiones, ramas, merge y resolución de conflictos",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      color: "text-white",
      description: "Repositorios, pull requests, issues y trabajo colaborativo",
    },
    {
      name: "Jest",
      icon: SiJest,
      color: "text-red-400",
      description: "Testing unitario y de integración para JavaScript y React",
    },
    {
      name: "Terminal",
      icon: SiGnometerminal,
      color: "text-green-300",
      description:
        "Línea de comandos para gestión de proyectos y automatización",
    },
    {
      name: "Postman",
      icon: SiPostman,
      color: "text-orange-500",
      description: "Testing de APIs, colecciones y documentación de endpoints",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "text-blue-500",
      description:
        "Tipado estático, interfaces y código más robusto y mantenible",
    },
    {
      name: "XAMPP",
      icon: SiXampp,
      color: "text-orange-400",
      description: "Entorno local de desarrollo con Apache, MySQL y PHP",
    },
    {
      name: "Apache",
      icon: SiApache,
      color: "text-red-500",
      description: "Servidor web para despliegue y configuración de proyectos",
    },
  ];

  const learningSkills = [
    { name: "React Native", icon: SiReact, color: "text-cyan-400" },
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
    { name: "Docker", icon: SiDocker, color: "text-blue-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  ];

  const softSkills = [
    {
      name: "Trabajo en equipo",
      icon: Users,
      description:
        "Colaboración efectiva en equipos multidisciplinarios y pair programming",
    },
    {
      name: "Metodologías ágiles",
      icon: Zap,
      description:
        "Experiencia con Scrum: sprints, dailys, retrospectivas y planificación",
    },
    {
      name: "Proactiva y Autónoma",
      icon: Lightbulb,
      description:
        "Capacidad de aprender por cuenta propia y tomar la iniciativa",
    },
    {
      name: "Resolución de problemas",
      icon: Target,
      description: "Análisis, debugging y búsqueda de soluciones eficientes",
    },
  ];

  const projects = [
    {
      title: "Ivanani",
      description:
        "Sitio web para startup desarrollado completamente de forma autónoma como desarrolladora junior, sin mentoría ni supervisión técnica. Aprendí GSAP desde cero mediante documentación oficial para implementar animaciones avanzadas e interactivas. Integré Substack API y Google Sheets API para automatizar la gestión de suscriptores a newsletter. Gestioné el proyecto de principio a fin: análisis de requisitos, desarrollo, comunicación directa con cliente y despliegue en producción.",
      image: project1,
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "GSAP",
        "ScrollTrigger",
        "Substack API",
        "Google Sheets API",
        "XML",
      ],
      demo: "https://ivananirobot.blogspot.com/p/blog-page_3.html",
      web: "https://immersivecreatures.com/",
    },
    {
      title: "Task Manager",
      description:
        "Aplicación para gestión de tareas con CRUD completo. Backend en PHP con MySQL usando PDO y prepared statements para prevenir inyecciones SQL. Incluye filtros por estado y prioridad, búsqueda, estadísticas en tiempo real y notificaciones toast. Diseño responsive con CSS3 puro. Desplegada en producción en Zeabur.",
      image: project2,
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL",
        "PDO",
        "Git",
        "XAMPP",
        "Apache",
      ],
      github: "https://github.com/Nelicah/task-manager",
      demo: "https://nelicah-task-manager.zeabur.app/",
    },
    {
      title: "Anonymous Proxy",
      description:
        "Primera web con maquetación avanzada traducida desde diseño en Zeplin. Implementé layout responsive con Flexbox y CSS Grid, preprocesamiento modular con SCSS usando variables para gestión centralizada, y animaciones CSS fluidas para mejorar la experiencia de usuario sin sacrificar rendimiento.",
      image: project3,
      tech: ["HTML", "Sass", "Node.js", "Flexbox", "CSS Grid", "Git", "GitHub"],
      github: "https://github.com/Nelicah/Anonymous-proxy",
      demo: "https://nelicah.github.io/Anonymous-proxy/",
    },
    {
      title: "Buscador animes",
      description:
        "Aplicación frontend con búsqueda de títulos y gestión de favoritos. Sistema de añadir/eliminar favoritos con persistencia, consumo de API externa y diseño amigable. Proyecto final del módulo JavaScript demostrando sólida base en Vanilla JS y arquitectura modular.",
      image: project4,
      tech: [
        "HTML",
        "SASS",
        "JavaScript (Vanilla)",
        "Node.js",
        "Vite",
        "Git",
        "GitHub",
      ],
      github: "https://github.com/Nelicah/Buscador-animes",
      demo: "https://nelicah.github.io/Buscador-animes/",
    },
    {
      title: "Harry Potter",
      description:
        "Aplicación React para explorar personajes de la saga con búsqueda y filtros múltiples. Implementé filtrado por casa de Hogwarts, estado de vida y categoría (estudiante/staff), con visualización detallada al hacer clic. Por iniciativa propia, añadí sistema de colores temáticos para cada casa (Gryffindor, Slytherin, Hufflepuff, Ravenclaw), mejorando la experiencia visual más allá del diseño inicial propuesto.",
      image: project5,
      tech: ["React", "Node.js", "Sass", "Git", "GitHub"],
      github: "https://github.com/Nelicah/mi-web-sobre-Harry-Potter",
      demo: "https://nelicah.github.io/mi-web-sobre-Harry-Potter/",
    },
    {
      title: "API Rest Simpsons",
      description:
        "API completa sobre frases de Los Simpson con base de datos relacional. Implementé endpoints RESTful (GET, POST, PUT, DELETE) para gestionar frases, personajes y capítulos. Diseñé estructura de tres tablas relacionadas con timestamps, sinopsis y datos de personajes. Sistema CRUD documentado para consumo con Postman.",
      image: project6,
      tech: [
        "JavaScript",
        "Node.js",
        "Express",
        "MySQL",
        "Postman",
        "Git",
        "GitHub",
      ],
      github: "https://github.com/Nelicah/API-rest-Simpson.git",
    },
    {
      title: "Piedra, papel o tijeras",
      description:
        "Juego interactivo desarrollado con JavaScript vanilla. Sistema de puntuación hasta 10 rondas, jugadas aleatorias de la computadora y declaración automática de ganador. Implementé manipulación del DOM con querySelector, control de eventos con addEventListener, funciones puras y actualización dinámica de interfaz. Diseño responsive y colorido.",
      image: project7,
      tech: ["HTML", "CSS", "JavaScript", "Git"],
      github: "https://github.com/Nelicah/juego-piedra-papel-tijeras.git",
      demo: "https://game-js.zeabur.app/",
    },
    {
      title: "Agenda de contactos",
      description:
        "Aplicación React para gestión de contactos. Implementé búsqueda que normaliza tildes, sistema de favoritos con sincronización entre listas, y persistencia mediante Local Storage. Enfoque en componentización y separación de responsabilidades.",
      image: project8,
      tech: ["React", "Node.js", "SASS", "Vite", "Local Storage", "Git"],
      github: "https://github.com/Nelicah/agenda-de-contactos.git",
      demo: "https://nelicah.github.io/agenda-de-contactos/",
    },
    {
      title: "Dragon Ball Universe",
      description: `Aplicación React que consume API de Dragon Ball. Resolví el reto de normalizar valores de Ki en formatos mixtos ("5 Billion", "60.000.000") creando un parser que interpreta magnitudes en inglés y convierte formatos europeos. Implementé búsqueda instantánea, lazy loading de imágenes y arquitectura modular con componentes reutilizables.`,
      image: project9,
      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "SASS",
        "Fetch API",
        "lucide-react",
        "Git",
      ],
      github: "https://github.com/Nelicah/dragon-ball-universe",
      demo: "https://nelicah.github.io/dragon-ball-universe/",
    },
    {
      title: "Proyecto Molón 2.0 (en grupo)",
      description:
        "Aplicación web colaborativa para crear tarjetas personalizadas de proyectos. Desarrollada en equipo aplicando metodologías ágiles con separación entre frontend (React, SCSS) y backend (Node.js, Express, EJS). Permite diseñar tarjetas visuales con texto, imágenes y enlaces de forma dinámica.",
      image: project10,
      tech: [
        "React",
        "SCSS",
        "Node.js",
        "MySQL",
        "Express",
        "EJS",
        "Git",
        "GitHub",
      ],
      github: "https://github.com/Nelicah/Proyecto-molon-2.0.git",
      demo: "https://proyecto-molon-2-0-sgwe.onrender.com/",
    },
    {
      title: "Catálogo de Películas",
      description:
        "Proyecto de aprendizaje de TypeScript con búsqueda y filtrado. Implementé interfaces personalizadas, tipado fuerte, type assertions para manejo seguro del DOM, y optional chaining para acceso seguro a propiedades. Demuestra mi transición de JavaScript a TypeScript. En fase de mejora.",
      image: project11,
      tech: ["TypeScript", "HTML5", "Boostrap 5", "Git"],
      github: "https://github.com/Nelicah/aprendiendo-typescript",
      demo: "https://nelicah.github.io/aprendiendo-typescript/",
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

      <SkillsSection
        techSkills={techSkills}
        softSkills={softSkills}
        learningSkills={learningSkills}
      />

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
