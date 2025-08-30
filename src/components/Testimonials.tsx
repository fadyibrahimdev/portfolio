import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      title: "Product Manager, TechCorp",
      initials: "JD",
      color: "blue",
      text: "Fady delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and user experience expertise made all the difference.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      title: "CEO, StartupXYZ",
      initials: "SJ",
      color: "green",
      text: "Working with Fady was a game-changer for our startup. He built a robust task management system that our team uses daily. Highly recommend!",
      rating: 5
    },
    {
      name: "Mike Kim",
      title: "Senior Developer, DevStudio",
      initials: "MK",
      color: "purple",
      text: "Fady's code quality and problem-solving skills are outstanding. He consistently delivers clean, maintainable solutions that scale well.",
      rating: 5
    },
    {
      name: "Emily Chen",
      title: "UX Designer, DesignHub",
      initials: "EC",
      color: "pink",
      text: "Fady's understanding of user experience and ability to translate design into functional code is remarkable. A true professional!",
      rating: 5
    },
    {
      name: "David Rodriguez",
      title: "CTO, InnovationLab",
      initials: "DR",
      color: "indigo",
      text: "We've worked with many developers, but Fady stands out for his technical expertise and collaborative approach. Exceptional work!",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      title: "Project Manager, AgileCorp",
      initials: "LT",
      color: "teal",
      text: "Fady consistently delivers projects on time and exceeds quality expectations. His communication and technical skills are top-notch.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => 
      prev >= testimonials.length - 3 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => 
      prev <= 0 ? testimonials.length - 3 : prev - 1
    );
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      pink: "bg-pink-100 text-pink-600",
      indigo: "bg-indigo-100 text-indigo-600",
      teal: "bg-teal-100 text-teal-600"
    };
    return colorMap[color] || "bg-gray-100 text-gray-600";
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold mb-12 text-center">What People Say</h3>
        <div className="max-w-6xl mx-auto relative overflow-hidden">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-gray-600 text-xl" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-gray-600 text-xl" />
          </button>

          {/* Testimonials Container */}
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonialIndex * 33.333}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-4">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${getColorClasses(testimonial.color)} rounded-full flex items-center justify-center font-bold text-lg mr-4`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Counter */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonialIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonialIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
