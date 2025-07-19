import { User, Code, Zap } from "lucide-react";

function AboutSection() {
  return (
    <>
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
                  <h3 className="text-2xl font-bold">Mi historia</h3>
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
    </>
  );
}

export default AboutSection;
