import "../styles/tailwind.css";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Zap,
  User,
  PawPrint,
  Shirt,
} from "lucide-react";

import project1 from "../images/anonymous-proxy.png";
import project2 from "../images/buscador-animes.png";
import project3 from "../images/harry-potter.png";

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
    { name: "React", level: 60, color: "bg-blue-500" },
    { name: "JavaScript", level: 50, color: "bg-blue-400" },
    { name: "Node.js", level: 40, color: "bg-blue-700" },
    { name: "CSS/Tailwind", level: 60, color: "bg-purple-500" },
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
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas con funcionalidades colaborativas",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tech: ["React", "Redux", "Express", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas con funcionalidades colaborativas",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tech: ["React", "Redux", "Express", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas con funcionalidades colaborativas",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tech: ["React", "Redux", "Express", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas con funcionalidades colaborativas",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tech: ["React", "Redux", "Express", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas con funcionalidades colaborativas",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tech: ["React", "Redux", "Express", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.github}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <Github size={16} />
            Código
          </a>
          <a
            href={project.demo}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ExternalLink size={16} />
            Demo
          </a>
        </div>
      </div>
    </div>
  );

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

      {/* Hero Section */}
      <section
        id="inicio"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="text-center z-10 px-4">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
              TN
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Desarrolladora
            </span>
            <br />
            <span className="text-white">Full Stack</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Junior
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Ver Proyectos
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300">
              Contactar
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mí" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Sobre Mí
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Conoce más sobre mi experiencia y pasión por el desarrollo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-800 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <User className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-2xl font-bold">Mi Historia</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Soy una desarrolladora Full Stack cumpliendo el sueño de
                  trabajar en el mundo Tech. Actualmente como Full Stack, sólo
                  cuento con la experiencia que he adquirido en el bootcamp que
                  he realizado pero aprendo rápido y me adapto a todo tipo de
                  situaciones.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Me considero una persona proactiva, adaptativa, polivalente y
                  responsable.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex items-center mb-4">
                  <Code className="text-blue-400 mr-3" size={20} />
                  <h4 className="text-xl font-semibold">Desarrollo Frontend</h4>
                </div>
                <p className="text-gray-300">
                  React, JavaScript, Tailwind CSS, Next.js
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex items-center mb-4">
                  <Zap className="text-purple-400 mr-3" size={20} />
                  <h4 className="text-xl font-semibold">Desarrollo Backend</h4>
                </div>
                <p className="text-gray-300">Node.js, Express, MySQL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Habilidades
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Tecnologías y herramientas que domino
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">
                Habilidades Técnicas
              </h3>
              {skills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">
                Otras experiencias
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-700 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <PawPrint className="text-blue-400 mr-3" size={20} />
                    <h4 className="text-xl font-semibold">
                      Auxiliar Clínico Veterinario
                    </h4>
                  </div>
                  <p className="text-gray-300 mb-2">
                    VidaVet • 02/2023 - 10/2024
                  </p>
                  <p className="text-gray-400">
                    Auxiliar veterinario y dependienta de productos y
                    alimentación para perros y gatos.
                  </p>
                </div>

                <div className="bg-gray-700 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Shirt className="text-purple-400 mr-3" size={20} />
                    <h4 className="text-xl font-semibold">Retail Assistant</h4>
                  </div>
                  <p className="text-gray-300 mb-2">
                    Primark • 12/2016 - 10/2021
                  </p>
                  <p className="text-gray-400">Atención al cliente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Proyectos
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Algunos de mis trabajos más destacados y otros en colaboración con
              mis compañeras del bootcamp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Contacto
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-blue-400 mr-4" size={20} />
                  <span className="text-gray-300">candezmr2@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Github className="text-pink-400 mr-4" size={20} />
                  <span className="text-gray-300">github.com/Nelicah</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="text-blue-500 mr-4" size={20} />
                  <span className="text-gray-300">
                    linkedin.com/in/cande-zamora-125301349
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                />
                <textarea
                  placeholder="Mensaje"
                  rows="5"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                />
                <button
                  onClick={() => alert("Mensaje enviado! (Funcionalidad demo)")}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Nelicah. Todos los derechos reservados.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https:www.github.com/Nelicah"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https:www.linkedin.com/in/cande-zamora-125301349"
              className="text-gray-400 hover:text-white transition-colors"
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
