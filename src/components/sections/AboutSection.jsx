import { User, Code, Zap, Wrench } from "lucide-react";

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
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Desarrolladora Full Stack con experiencia en proyectos
                  remunerados, personales y de formación. Trabajo tanto en
                  frontend como en backend, aplicando principios SOLID y
                  metodologías ágiles (Scrum).
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Proactiva, autónoma y con mentalidad de mejora continua: siempre
                  estoy aprendiendo nuevas tecnologías para aportar más valor al
                  equipo. Actualmente ampliando conocimientos en React Native,
                  TypeScript, Docker y más.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Busco un equipo donde crecer profesionalmente y contribuir con
                  código limpio, buenas prácticas y muchas ganas.
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
                  HTML, CSS, Tailwind CSS, SASS, JavaScript, TypeScript, React, GSAP
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex items-center mb-4">
                  <Zap className="text-purple-400 mr-3" size={20} />
                  <h4 className="text-xl font-semibold">Desarrollo Backend</h4>
                </div>
                <p className="text-gray-300">
                  Node.js, Express, PHP, SQL, MySQL
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex items-center mb-4">
                  <Wrench className="text-green-400 mr-3" size={20} />
                  <h4 className="text-xl font-semibold">Herramientas y entorno</h4>
                </div>
                <p className="text-gray-300">
                  Git, GitHub, VS Code, IntelliJ, DevTools, Terminal, Jest, Postman, Vite, XAMPP, Apache
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
