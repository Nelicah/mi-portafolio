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
                  Full Stack Developer en transición al mundo Tech tras +6 años
                  de experiencia profesional en atención al cliente y trabajo en
                  equipo. Mi trayectoria en comercio y como auxiliar veterinaria
                  me ha dado habilidades transferibles clave: comunicación
                  efectiva, resolución de problemas bajo presión, empatía con
                  usuarios finales y profesionalismo. Estas competencias ahora
                  las aplico en desarrollo web para crear soluciones que
                  realmente respondan a necesidades reales.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Formación: Bootcamp Full Stack Developer en Adalab (255 horas,
                  2025). Especialización en JavaScript, React, Node.js, MySQL y
                  metodologías ágiles (Scrum, trabajo en equipo, sprints).
                  Aprendizaje autodidacta: PHP (vanilla, POO, APIs REST),
                  TypeScript, GSAP y otras tecnologías según necesidades de
                  proyectos.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Experiencia desarrollando proyectos reales desplegados en
                  producción, incluyendo trabajo freelance autónomo gestionado
                  de principio a fin. Busco un equipo donde crecer
                  profesionalmente y contribuir con código limpio, buenas
                  prácticas y muchas ganas.
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
                  HTML, CSS, Tailwind CSS, SASS, JavaScript, TypeScript, React,
                  GSAP
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
                  <h4 className="text-xl font-semibold">
                    Herramientas y entorno
                  </h4>
                </div>
                <p className="text-gray-300">
                  Git, GitHub, VS Code, IntelliJ, DevTools, Terminal, Jest,
                  Postman, Vite, XAMPP, Apache
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
