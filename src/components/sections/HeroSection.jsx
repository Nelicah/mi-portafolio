import { ChevronDown } from "lucide-react";
import logo from "../../images/mi-logo.png";

function HeroSection({ scrollToSection }) {
  return (
    <>
      <section
        id="inicio"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="text-center z-10 px-4">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
              <img
                src={logo}
                alt="Logo personal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Desarrolladora
            </span>
            <br />
            <span className="text-white">Full Stack</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button
              onClick={() => scrollToSection("proyectos")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Proyectos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Contactar
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
