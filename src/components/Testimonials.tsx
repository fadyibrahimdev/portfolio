import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonials = [
    {
      name: "Mohamed Ibrahim",
      title: "Co-Founder & CEO, Rubikal",
      initials: "MI",
      color: "blue",
      text: 
        `I had the pleasure of working with Fady during his time as a Frontend Engineer at Rubikal, 
        where he consistently demonstrated exceptional technical skills and a strong work ethic. 
        Fady participated in multiple projects, each with its own set of challenges, 
        and he excelled in every one of them.\\n\\n
        Fady's ability to deliver high-quality work on time is truly commendable. 
        He has a keen eye for detail, ensuring that the user interfaces he developed were not only visually appealing but also highly functional and user-friendly. 
        His code is clean, well-documented, and adheres to best practices, making it easy for others to collaborate with him.\\n\\n
        In addition to his technical expertise, Fady is an excellent team player. 
        He communicates effectively, proactively shares his knowledge, 
        and is always willing to lend a hand to solve complex problems. 
        His dedication to meeting project deadlines without compromising on quality has been a key factor in the success of the projects he has worked on.\\n\\n
        I highly recommend Fady for any future endeavors. 
        He will be a valuable asset to any team, and I look forward to seeing his continued success.`,
      rating: 5
    },
    {
      name: "Mustafa Abdelmoneim",
      title: "Co-Founder & CFO, iSchool",
      initials: "MA",
      color: "green",
      text: 
        `Working with Fady, a senior software engineer from the Rubikal team, was a remarkable experience. 
        Fady played a crucial role in enhancing the iSchool platform, demonstrating exceptional skill in front-end technologies. 
        His work was consistently top-notch, turning complex requirements into a seamless user experience.\\n\\n
        Fady's proactive problem-solving and collaborative spirit were key to the success of our project. 
        He was not only technically adept but also a great team player, always ready to go the extra mile.\\n\\n
        I highly recommend Fady for any front-end development role. 
        His contributions to the iSchool platform were invaluable, and I'm confident he'll excel in any future projects.`,
      rating: 5
    },
    {
      name: "Nada Akmal",
      title: "HR Manager, Rubikal",
      initials: "NA",
      color: "pink",
      text: 
        `I had the pleasure of working with Fady for more than two years at Rubikal, 
        where he's consistently demonstrated exceptional talent and dedication as a Front-End Engineer.
        What truly sets Fady apart is his collaborative spirit and proactive attitude. 
        He's always willing to go the extra mile to ensure the success of a project.\\n\\n
        Fady is also highly dependable and consistently delivers high-quality work on time, 
        despite tight deadlines. his contributions have been integral to the success of several key projects at Rubikal, 
        and his positive attitude makes him a joy to work with.\\n\\n
        I highly recommend Fady for any opportunity that requires not just technical skill, 
        but also a commitment to excellence and teamwork.`,
      rating: 5
    },
    {
      name: "Muhammad Gawish",
      title: "Co-Founder & CEO, iSchool",
      initials: "MG",
      color: "purple",
      text: 
        `I had the pleasure of working with Fady at iSchool, 
        where he proved to be an excellent Senior Front End Engineer.\\n\\n
        With over 4 years of experience in React/Node development, 
        he combines technical knowledge with a strong growth attitude. 
        Consistently provides high-quality solutions and understands how to integrate his efforts with business objectives. \\n\\n
        Fady is an excellent addition to any team, bringing both skill and strategic thinking to the table. 
        And I hope he will continue to shine brightly in his future pursuits.`,
      rating: 5
    },
    {
      name: "Andy Kaminski",
      title: "CEO, RunnerCity",
      initials: "AK",
      color: "indigo",
      text: 
        `Fady is a professional and high level engineer. 
        He helped build my platform www.runnercity.com look, feel, and function like a mobile app using clever UX. \\n\\n
        He has also provided the best monthly tech support I have ever had and I have worked with many software engineers. \\n\\n
        If you are looking for someone with professional skills, creativity, and reliability, Fady is the one. Highly recommend!`,
      rating: 5
    },
    {
      name: "Rana Ebada",
      title: "Project Practice Lead, Rubikal",
      initials: "RE",
      color: "pink",
      text: 
        `I had the pleasure of working with Fady on a project. 
        He's a highly resourceful Frontend Engineer with great Time Management skills. \\n\\n
        He can easily manage working on multiple fronts at the same time, delivering all with outstanding quality. 
        He's also quick to help out the rest of the team whenever anyone needs a helping hand. \\n\\n
        Another great quality in Fady is that he's proactive and is committed to getting things done. 
        He's a great asset to any team and I'd love to work with him again.`,
      rating: 5
    },
    {
      name: "Mohamad Hussein",
      title: "Product Owner, Tadarab",
      initials: "MH",
      color: "green",
      text: 
        `I had the pleasure of working closely with Fady. 
        his expertise in JavaScript and React is exceptional, delivering high-quality solutions. \\n\\n
        Known for his proactive problem-solving and clear communication style, 
        he is a valuable asset to any development team.`,
      rating: 5
    },
    {
      name: "Fady Gamal",
      title: "Automation Engineer, Amazon UK",
      initials: "FG",
      color: "teal",
      text: 
        `Fady is a self developing engineer, 
        He is a fast learner who has the ability to improve in at a timely fashion. \\n\\n
        Fady is a great person who is always responsible and has a great potential for expanding his personal and technical skills. \\n\\n
        I'd always recommend Fady he will always add value to any entity.`,
      rating: 5
    },
    {
      name: "Youssef Marzouk",
      title: "Software Engineer II, Dell Technologies",
      initials: "YM",
      color: "blue",
      text: 
        `Fady is a leader, he knows how to lead a team specially throw hard times.
        He is very talented in many aspects of software development. \\n\\n
        For example, Node.js, React, React-Native, Postgres, and AWS.`,
      rating: 5
    },
    {
      name: "Michael Abdelmalek",
      title: "Frontend Engineer, Rackspace Technology",
      initials: "MA",
      color: "green",
      text: 
        `Fady is one of the talented engineers who can adapt easily to any new technology and always willing to go for the extra mile. \\n\\n
        He is very passionate about learning new skills and ensuring good practices are met.`,
      rating: 5
    },
    {
      name: "Wagdy Samih",
      title: "Frontend Engineer, Coinpass LTD",
      initials: "WS",
      color: "purple",
      text: 
        `Fady is one of the most skilled software engineers I have worked with, \\n\\n
        Fady is very talented and knowledgeable in the backend, Node.js, Express, Postgres, and AWS. \\n\\n
        He is very passionate and willing to learn new technologies.`,
      rating: 5
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => 
      prev >= testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => 
      prev <= 0 ? testimonials.length - 1 : prev - 1
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
    <section className="py-24 pb-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold mb-12 text-center">What People Say</h3>
        <div className="max-w-6xl mx-auto relative overflow-hidden">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-gray-600 text-xl" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10 cursor-pointer"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-gray-600 text-xl" />
          </button>

          {/* Testimonials Container */}
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full max-w-4xl mx-auto min-h-[500px]">
                  <div className="flex items-start mb-6">
                    <div className={`w-16 h-16 ${getColorClasses(testimonial.color)} rounded-full flex items-center justify-center font-bold text-2xl mr-6 flex-shrink-0`}>
                      {testimonial.initials}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">{testimonial.name}</h4>
                      <p className="text-gray-500 mb-4">{testimonial.title}</p>
                      <p className="text-lg text-gray-600 italic leading-relaxed">
                        {testimonial.text.split('\\n\\n').map((paragraph, paraIndex) => (
                          <span key={paraIndex}>
                            {paraIndex > 0 && <><br /><br /></>}
                            {paragraph}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flex text-yellow-400 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Counter */}
          <div className="flex justify-center space-x-2 mt-8 mb-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonialIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
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
