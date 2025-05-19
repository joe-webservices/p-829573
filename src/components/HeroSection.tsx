
import React, { useEffect, useRef } from 'react';
import { MoveRight, Sparkles, Speaker, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      backgroundRef.current.style.transform = `translate(${x * -15}px, ${y * -15}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-white to-blue-50">
      {/* Background Elements */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-0 transition-transform duration-500 ease-out"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-50 rounded-full blur-3xl"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-20 hidden lg:block">
        <Speaker className="h-12 w-12 text-blue-200" />
      </div>
      <div className="absolute bottom-1/4 right-20 hidden lg:block">
        <Music className="h-16 w-16 text-blue-200" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          <div className="max-w-2xl">
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 text-blue-700 rounded-full px-4 py-1 text-sm font-medium inline-flex items-center">
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                AI-Powered Lead Generation
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-800">
              Turn Conversations into <span className="text-blue-600">Paying Customers</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              We build AI-powered automation systems that generate leads 24/7 — no charge, no commitment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918431818662?text=Hi%20AutoLead%20team%2C%20I'm%20interested%20in%20your%20AI%20lead%20generation%20system!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Chat on WhatsApp
                <MoveRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                to="/services"
                className="bg-transparent border border-blue-500 text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
