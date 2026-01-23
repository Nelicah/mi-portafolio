import ProjectCard from "../items/ProjectCard";

function ProjectsSection({ projects }) {
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
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsSection;
