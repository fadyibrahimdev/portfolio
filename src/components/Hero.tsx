interface HeroProps {
  isVisible: boolean;
}

export default function Hero({ isVisible }: HeroProps) {
  return (
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
  );
}
