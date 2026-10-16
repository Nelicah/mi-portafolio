import { ExternalLink, Github } from "lucide-react";

function TimelineLinks({ links }) {
  if (!links) return null;
  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {links.web && (
        <a
          href={links.web}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ExternalLink size={16} />
          Web de la empresa
        </a>
      )}
      {links.demo && (
        <a
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ExternalLink size={16} />
          Link
        </a>
      )}
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          <Github size={16} />
          GitHub
        </a>
      )}
    </div>
  );
}

function ExperienceSection({ experience }) {
  return (
    <section id="experiencia" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experiencia
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Trayectoria profesional</p>
        </div>

        <div className="relative border-l-2 border-blue-500/40 ml-4 md:ml-6 space-y-10 pl-6 md:pl-8">
          {experience.map((item, index) => (
            <article key={index} className="relative">
              <span className="hidden md:block absolute -left-[40px] top-10 w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 ring-4 ring-gray-800 z-10" />
              <div className="bg-gray-900/80 p-6 md:p-8 rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <span className="text-sm font-medium text-purple-400 shrink-0">
                    {item.period}
                  </span>
                </div>
                <p className="text-blue-300 font-medium mb-1">{item.company}</p>
                {item.location && (
                  <p className="text-gray-500 text-sm mb-4">{item.location}</p>
                )}
                <ul className="space-y-2 text-gray-300 text-sm md:text-base leading-relaxed list-disc list-inside marker:text-blue-400">
                  {item.highlights.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
                {item.tech?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-300 border border-gray-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <TimelineLinks links={item.links} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
