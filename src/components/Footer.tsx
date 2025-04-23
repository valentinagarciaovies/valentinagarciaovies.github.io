import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-darkest text-neutral-light py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-neutral-white hover:text-primary-light transition-colors">
              VGO
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            <a href="#home" className="hover:text-primary-light transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-primary-light transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-primary-light transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-primary-light transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-primary-light transition-colors">
              Contact
            </a>
          </div>
          
          <div>
            <p>&copy; {currentYear} Valentina Garcia Ovies. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;