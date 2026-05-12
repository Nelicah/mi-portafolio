import TechCard from "../items/TechCard";
import SoftSkillCard from "../items/SoftSkillCard";
import { useState, useRef } from "react";
import gsap from "gsap";

const TABS = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "herramientas", label: "Herramientas" },
];

function SkillsSection({ techSkills, softSkills, learningSkills }) {
  const [tabActiva, setTabActiva] = useState("frontend");
  const gridRef = useRef(null);

  const cambiarTab = (nuevaTab) => {
    if (nuevaTab === tabActiva) return;
    gsap.fromTo(
      gridRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );
    setTabActiva(nuevaTab);
  };

  const skillsFiltradas = techSkills.filter((s) => s.category === tabActiva);

  return (
    <>
      {/* Sección 1: Tech Skills con tabs */}
      <section id="habilidades" className="min-h-screen py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Habilidades
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Tecnologías que domino</p>
            <p className="text-gray-500 text-sm mt-2">Toca las tarjetas para descubrir más</p>
          </div>

          <div className="flex justify-center gap-2 mb-10">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => cambiarTab(tab.key)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  tabActiva === tab.key
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "bg-gray-700 text-gray-400 hover:text-white hover:bg-gray-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div ref={gridRef} className="flex flex-wrap justify-center gap-6">
            {skillsFiltradas.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Sección 2: Aprendiendo + Habilidades profesionales */}
      <section className="py-20 px-4 bg-gray-900 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Aprendiendo
              </span>
            </h3>
            <p className="text-gray-400 text-sm mb-8">Próximas tecnologías en mi stack</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-20 max-w-2xl mx-auto">
            {learningSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 px-5 py-3 rounded-full bg-gray-700/50 border border-gray-600 hover:border-green-400/50 transition-all duration-300"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                  </span>
                  <Icon size={24} className={skill.color} />
                  <span className="text-gray-200 font-medium text-sm">{skill.name}</span>
                </div>
              );
            })}
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Habilidades profesionales
              </span>
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {softSkills.map((skill, index) => (
              <SoftSkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsSection;
