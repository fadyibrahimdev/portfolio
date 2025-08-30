import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
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
  );
}
