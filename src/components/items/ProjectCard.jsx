import { Github, ExternalLink } from "lucide-react";

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
        {project.demo && (
          <a
            href={project.demo}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ExternalLink size={16} />
            Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
