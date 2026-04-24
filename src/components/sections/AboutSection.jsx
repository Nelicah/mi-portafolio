import { User } from "lucide-react";
import foto from "../../images/foto-pixel.png";

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
            <div className="flex justify-center">
              <div className="bg-gray-800 p-8 rounded-lg flex flex-col items-center text-center w-fit mx-auto">
                <img
                  src={foto}
                  alt="foto de perfil"
                  className="w-52 h-52 object-cover rounded-2xl"
                />
                <div className="flex flex-col gap-2 mt-4">
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-white">Nelicah</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Full Stack Developer
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-2 border border-green-500 text-green-400 rounded-full px-3 py-1 text-sm">
                    {/* punto animado */}
                    <span className="relative flex w-2 h-2">
                      <span className="animate-ping absolute inset-0 rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative w-2 h-2 rounded-full bg-green-400"></span>
                    </span>
                    Open to work · Disponibilidad inmediata
                  </span>

                  <span className="inline-flex items-center gap-2 border border-yellow-500 text-yellow-400 rounded-full px-3 py-1 text-sm">
                    {/* punto animado */}
                    <span className="relative flex w-2 h-2">
                      <span className="animate-ping absolute inset-0 rounded-full bg-yellow-400 opacity-75"></span>
                      <span className="relative w-2 h-2 rounded-full bg-yellow-400"></span>
                    </span>
                    Estudiando AWS Cloud Practitioner
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-800 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <User className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-2xl font-bold">Mi historia</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Full Stack Developer con +6 años de experiencia en atención al
                  cliente, cumpliendo el sueño de dedicarme al desarrollo web.
                  Busco un equipo donde aportar código limpio, buenas prácticas
                  y seguir creciendo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
