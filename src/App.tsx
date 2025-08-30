import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaPalette, FaMobile, FaServer } from "react-icons/fa";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "React", icon: <FaCode className="text-2xl" />, level: 90 },
    { name: "TypeScript", icon: <FaCode className="text-2xl" />, level: 85 },
    { name: "Tailwind CSS", icon: <FaPalette className="text-2xl" />, level: 88 },
    { name: "Node.js", icon: <FaServer className="text-2xl" />, level: 75 },
    { name: "Mobile Development", icon: <FaMobile className="text-2xl" />, level: 70 },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/fadyattia/ecommerce",
      live: "https://ecommerce-demo.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/fadyattia/task-manager",
      live: "https://task-manager-demo.com",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my work and skills. Built with React and Tailwind CSS.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com/fadyattia/portfolio",
      live: "https://fadyattia.com",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Navbar */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">Fady Attia</h1>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600 transition-colors duration-200">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors duration-200">Skills</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors duration-200">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">Contact</a>
          </nav>
          <a 
            href="/resume.pdf" 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
          >
            <FaDownload className="text-sm" />
            Resume
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className={`container mx-auto px-6 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Fady</span> 👋
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-600 leading-relaxed">
            A passionate <span className="font-semibold text-blue-600">Frontend Developer</span> crafting fast, accessible, and beautiful websites that users love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 text-lg font-semibold"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About */}
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

      {/* Skills */}
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

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Featured Projects</h3>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      className="flex-1 bg-gray-800 text-white text-center py-2 rounded-lg hover:bg-gray-900 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a 
                      href={project.live} 
                      className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">Get In Touch</h3>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            I'm currently open to <span className="font-semibold text-blue-600">freelance opportunities</span> and exciting full-time positions. Let's build something amazing together!
          </p>
          <div className="flex justify-center space-x-8 text-3xl mb-8">
            <a 
              href="mailto:fady@example.com" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
              title="Email me"
            >
              <FaEnvelope />
            </a>
            <a 
              href="https://github.com/fadyattia" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
              target="_blank" 
              rel="noopener noreferrer"
              title="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/fadyattia" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
              target="_blank" 
              rel="noopener noreferrer"
              title="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto">
            <h4 className="text-xl font-semibold mb-4">Let's Connect!</h4>
            <p className="text-gray-600 mb-4">
              Ready to start your next project? I'd love to hear from you!
            </p>
            <a 
              href="mailto:fady@example.com"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-block"
            >
              Send Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Fady Attia. All rights reserved.</p>
          <p className="text-sm mt-2">Built with ❤️ using React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
