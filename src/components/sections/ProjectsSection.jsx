import ProjectCard from "../items/ProjectCard";
import { useState, useRef, useEffect, use } from "react";
import gsap from "gsap";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Link,
  ExternalLink,
} from "lucide-react";

function ProjectsSection({ projects }) {
  const [indice, setIndice] = useState(0);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const modalRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      gsap.from(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [proyectoSeleccionado]);

  const proyectosVisibles = projects.slice(indice, indice + 3);

  const anterior = () => {
    gsap.fromTo(
      gridRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
    );
    setIndice(indice - 3);
  };

  const siguiente = () => {
    gsap.fromTo(
      gridRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
    );
    setIndice(indice + 3);
  };

  return (
    <>
      <section id="proyectos" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Proyectos
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Algunos de mis trabajos más destacados
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Click en los proyectos para más información
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* flecha izquierda */}
            {indice > 0 && (
              <button
                className="cursor-pointer hover:text-blue-400 transition-colors"
                onClick={anterior}
              >
                <ChevronLeft />
              </button>
            )}

            {/* grid de proyectos */}
            <div
              ref={gridRef}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {proyectosVisibles.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  onSelect={setProyectoSeleccionado}
                />
              ))}
            </div>
            {/* flecha derecha */}
            {indice + 3 < projects.length && (
              <button
                className="cursor-pointer hover:text-blue-400 transition-colors"
                onClick={siguiente}
              >
                <ChevronRight />
              </button>
            )}
          </div>
        </div>
        {proyectoSeleccionado && (
          <div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
            onClick={() => setProyectoSeleccionado(null)}
          >
            <div
              ref={modalRef}
              className="bg-gray-800 rounded-lg p-8 max-w-lg w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {proyectoSeleccionado.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {proyectoSeleccionado.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proyectoSeleccionado.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {proyectoSeleccionado.github && (
                  <a
                    href={proyectoSeleccionado.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    Código
                  </a>
                )}
                {proyectoSeleccionado.demo && (
                  <a
                    href={proyectoSeleccionado.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
                {proyectoSeleccionado.web && (
                  <a
                    href={proyectoSeleccionado.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Link size={16} />
                    Web de la empresa
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default ProjectsSection;
