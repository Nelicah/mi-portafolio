function EducationSection({ education }) {
  return (
    <section
      id="formacion"
      className="py-20 px-4 bg-gray-900 bg-gradient-to-br from-green-900/10 to-cyan-900/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Formación
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Estudios y certificaciones</p>
        </div>

        <div className="relative border-l-2 border-green-500/40 ml-4 md:ml-6 space-y-10 pl-6 md:pl-8">
          {education.map((item, index) => (
            <article key={index} className="relative">
              <span className=" hidden md:block absolute -left-[40px] top-10 w-4 h-4 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 ring-4 ring-gray-800 z-10" />
              <div className="bg-gray-800/80 p-6 md:p-8 rounded-lg border border-gray-700/50 hover:border-green-500/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    {item.hours && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-900/40 text-green-300 border border-green-700/50">
                        {item.hours}
                      </span>
                    )}
                    <span className="text-sm font-medium text-cyan-400">
                      {item.period}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 font-medium">{item.institution}</p>
                {item.detail && (
                  <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                    {item.detail}
                  </p>
                )}
                {item.stack?.length > 0 && (
                  <div className="mt-4">
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-2">
                      Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.stack.map((c) => (
                        <span
                          key={c}
                          className="px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {item.servicios?.length > 0 && (
                  <div className="mt-4">
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-2">
                      Servicios
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.servicios.map((c) => (
                        <span
                          key={c}
                          className="px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
