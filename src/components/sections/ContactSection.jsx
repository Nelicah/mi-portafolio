import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import axios from "axios";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState(""); // estado para mostrar mensaje
  const [statusType, setStatusType] = useState(""); // "success" o "error"

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://mi-portafolio-api.onrender.com/api/contact",
        formData
      );
      setStatusMessage("¡Mensaje enviado correctamente!");
      setStatusType("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      setStatusMessage("Hubo un problema al enviar el mensaje.");
      setStatusType("error");
    }
  };
  return (
    <>
      <section id="contacto" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Contacto
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              ¿Tienes un proyecto en mente o encajo en tu equipo? ¡Hablemos!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-blue-400 mr-4" size={20} />
                  <span className="text-gray-300">candezmr2@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Github className="text-pink-400 mr-4" size={20} />
                  <span className="text-gray-300">github.com/Nelicah</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="text-blue-500 mr-4" size={20} />
                  <span className="text-gray-300">
                    linkedin.com/in/cande-zamora-125301349
                  </span>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Nombre"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mensaje"
                  rows="5"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Enviar Mensaje
                </button>
              </form>
              {/* Aquí mostramos el mensaje */}
              {statusMessage && (
                <p
                  style={{
                    color: statusType === "success" ? "green" : "red",
                    marginTop: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  {statusMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
