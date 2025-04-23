import React from 'react';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-neutral-lightest">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full aspect-square bg-neutral-darker rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4064835/pexels-photo-4064835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Valentina Garcia Ovies"
                  className="w-full h-full object-cover opacity-85"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-main rounded-lg"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-main rounded-lg"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-neutral-darkest">
              About Me
            </h2>
            
            <p className="text-neutral-darker mb-6">
              Hello! I'm Valentina Garcia Ovies, a business analytics professional with a passion for transforming complex data into strategic insights. With expertise in data visualization, statistical analysis, and business intelligence, I help organizations make data-driven decisions.
            </p>
            
            <p className="text-neutral-darker mb-6">
              My background combines strong analytical skills with business acumen, allowing me to bridge the gap between technical analysis and practical business applications. I specialize in creating comprehensive dashboards and predictive models that drive operational improvements and business growth.
            </p>
            
            <p className="text-neutral-darker mb-8">
              Whether it's optimizing supply chains, improving financial performance, or identifying market opportunities, I'm committed to delivering actionable insights that create real value.
            </p>
            
            <a
              href="#projects"
              className="inline-flex items-center text-primary-main hover:text-primary-dark transition-colors"
            >
              <span className="mr-2">View my projects</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;