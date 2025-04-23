import React, { useState } from 'react';
import { Send, Mail, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-neutral-darkest text-neutral-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-40 w-96 h-96 rounded-full bg-primary-main/10 blur-3xl"></div>
        <div className="absolute -bottom-20 left-20 w-80 h-80 rounded-full bg-secondary-main/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-neutral-light max-w-2xl mx-auto">
              Interested in working together or have questions about my analytics services? Feel free to reach out, and I'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/5">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <p className="text-neutral-light mb-6">
                  Let's discuss how I can help you leverage data to drive business decisions and growth.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="mailto:contact@valentinago.com"
                    className="flex items-center text-neutral-light hover:text-primary-light transition-colors"
                  >
                    <Mail className="mr-3" size={20} />
                    <span>contact@valentinago.com</span>
                  </a>
                  
                  <a
                    href="#"
                    className="flex items-center text-neutral-light hover:text-primary-light transition-colors"
                  >
                    <Linkedin className="mr-3" size={20} />
                    <span>linkedin.com/in/valentinago</span>
                  </a>
                  
                  <a
                    href="#"
                    className="flex items-center text-neutral-light hover:text-primary-light transition-colors"
                  >
                    <Twitter className="mr-3" size={20} />
                    <span>@valentinago_analytics</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5">
              {submitted ? (
                <div className="bg-success-dark/20 border border-success-main rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p>Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-light mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-darker border border-neutral-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-main text-neutral-white"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-light mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-darker border border-neutral-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-main text-neutral-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-light mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-neutral-darker border border-neutral-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-main text-neutral-white resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-neutral-white transition-colors duration-300 ${
                      isSubmitting
                        ? 'bg-primary-dark cursor-not-allowed'
                        : 'bg-primary-main hover:bg-primary-dark'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;