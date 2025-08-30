import { FaDownload } from "react-icons/fa";

export default function Navbar() {
  return (
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
  );
}
