import SkillBar from "../items/SkillBar";

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
            <p className="text-gray-400 text-lg">Tecnologías que domino</p>
          </div>

          <div className="flex flex-wrap justify-center gap-12">
            <div className="w-full max-w-3xl">
              {skills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsSection;
