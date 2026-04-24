import { Github, ExternalLink, Link } from "lucide-react";

const ProjectCard = ({ project, onSelect }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
    <div
      className="relative overflow-hidden cursor-pointer"
      onClick={() => {
        onSelect(project);
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
    </div>
  </div>
);

export default ProjectCard;
