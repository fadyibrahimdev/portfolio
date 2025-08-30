export default function About() {
  return (
    <section id="about" className="py-24 container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl font-bold mb-8 text-center">About Me</h3>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a frontend engineer with <span className="font-semibold text-blue-600">4+ years of experience</span> building responsive web applications using modern technologies like React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I love turning complex problems into simple, elegant solutions. When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm passionate about creating user experiences that are not only functional but also delightful and accessible to everyone.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-2xl">
            <h4 className="text-xl font-semibold mb-4 text-center">Quick Facts</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Experience:</span>
                <span className="font-semibold">4+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Projects:</span>
                <span className="font-semibold">20+ Completed</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Technologies:</span>
                <span className="font-semibold">15+ Mastered</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Location:</span>
                <span className="font-semibold">Remote / Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
