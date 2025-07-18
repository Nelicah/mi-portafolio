const SkillBar = ({ skill }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-gray-300 font-medium">{skill.name}</span>
      <span className="text-gray-400">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div
        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);

export default SkillBar;
