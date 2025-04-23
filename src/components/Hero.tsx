import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-neutral-darkest text-neutral-white py-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-main/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-secondary-main/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">Valentina Garcia Ovies</span>
            <span className="text-primary-light">Business Analytics Portfolio</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-lighter mb-8">
            Transforming data into actionable insights that drive business decisions
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#projects"
              className="bg-primary-main hover:bg-primary-dark text-neutral-white px-8 py-3 rounded-full transition-colors duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-transparent hover:bg-neutral-darker text-neutral-white border border-neutral-light px-8 py-3 rounded-full transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center text-neutral-lighter hover:text-primary-light transition-colors duration-300"
        >
          <span className="mb-2">Explore</span>
          <div className="w-5 h-10 border-2 border-neutral-lighter rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neutral-lighter rounded-full mt-1 animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;