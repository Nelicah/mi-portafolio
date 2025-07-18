import SkillBar from "../items/SkillBar";
import { PawPrint, Shirt } from "lucide-react";

function SkillsSection({ skills }) {
  return (
    <>
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
    </>
  );
}

export default SkillsSection;
