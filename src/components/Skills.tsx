import { FaCode, FaPalette, FaMobile, FaServer } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaCode className="text-2xl" />, level: 90 },
    { name: "TypeScript", icon: <FaCode className="text-2xl" />, level: 85 },
    { name: "Tailwind CSS", icon: <FaPalette className="text-2xl" />, level: 88 },
    { name: "Node.js", icon: <FaServer className="text-2xl" />, level: 75 },
    { name: "Mobile Development", icon: <FaMobile className="text-2xl" />, level: 70 },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h3>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold text-center mb-3">{skill.name}</h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 text-center mt-2">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
