import { useState } from "react";

const TechCard = ({ tech }) => {
  const [flipped, setFlipped] = useState(false);
  const Icon = tech.icon;

  return (
    <div
      className="w-44 h-52 cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Frontal */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-gray-700 hover:bg-gray-600 hover:scale-105 transition-all duration-300 shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Icon size={56} className={tech.color} />
          <span className="mt-3 text-gray-200 font-semibold text-base">
            {tech.name}
          </span>
        </div>

        {/* Trasera */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-gray-600 p-4 shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Icon size={28} className={tech.color} />
          <p className="mt-2 text-gray-200 text-xs text-center leading-relaxed">
            {tech.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
