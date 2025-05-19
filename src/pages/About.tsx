
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Check, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              About <span className="text-blue-600">AutoLead Systems</span>
            </h1>
            
            <p className="text-xl max-w-2xl animate-fade-in animation-delay-100 text-gray-600">
              Young innovators crafting effective marketing solutions for local businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 px-6 md:px-12 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Meet Titus & Prahladh</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Two 18-year-old marketers from Bangalore with a passion for technology and business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="glassmorphism p-8 rounded-xl">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-blue-500/10 rounded-full mb-6 flex items-center justify-center">
                  <span className="text-5xl font-bold text-blue-600">T</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Titus</h3>
                <p className="text-blue-600 mb-4">
                  Digital Marketing Specialist
                </p>
                <p className="text-gray-600 text-sm">
                  Passionate about automation and AI integration in marketing workflows. Titus focuses on developing strategies that deliver measurable results for businesses of all sizes.
                </p>
              </div>
            </div>
            
            <div className="glassmorphism p-8 rounded-xl">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-blue-500/10 rounded-full mb-6 flex items-center justify-center">
                  <span className="text-5xl font-bold text-blue-600">P</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Prahladh</h3>
                <p className="text-blue-600 mb-4">
                  AI & Automation Expert
                </p>
                <p className="text-gray-600 text-sm">
                  With a deep interest in leveraging technology for business growth, Prahladh develops AI-powered systems that create efficient marketing funnels and lead generation processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Philosophy</h2>
              <p className="text-gray-600 mb-6">
                We believe in keeping marketing simple, effective, and results-focused. Too often, businesses get caught up in complex strategies that don't deliver tangible outcomes. At AutoLead Systems, we cut through the noise with clear, performance-driven solutions.
              </p>
              <p className="text-gray-600 mb-6">
                Our approach combines cutting-edge AI technology with straightforward marketing principles to create systems that consistently generate quality leads and conversions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Check className="text-blue-600 mt-1" size={18} />
                  <span className="text-gray-600">Focus on measurable results, not vanity metrics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-blue-600 mt-1" size={18} />
                  <span className="text-gray-600">Continuously optimize for better performance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-blue-600 mt-1" size={18} />
                  <span className="text-gray-600">Transparent reporting and communication</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="text-blue-600 mt-1" size={18} />
                  <span className="text-gray-600">Technology that works for you, not the other way around</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <div className="glassmorphism p-8 rounded-xl h-full flex flex-col justify-center">
                <div className="bg-blue-100 text-blue-600 p-4 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  <Zap size={28} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Simple. Effective. Focused.</h3>
                <p className="text-gray-600">
                  Our marketing solutions don't rely on complex jargon or unnecessary processes. We've stripped everything back to what matters most: generating quality leads and converting them into paying customers. 
                </p>
                <p className="text-gray-600 mt-4">
                  By focusing on automation and AI-driven optimization, we create systems that work around the clock to grow your business while freeing up your time to focus on what you do best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Ethic Section */}
      <section className="py-16 px-6 md:px-12 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Work Ethic</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We believe in putting our money where our mouth is. That's why we operate differently from traditional marketing agencies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glassmorphism p-8 text-center card-hover">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-xl mb-3 font-semibold text-gray-800">Performance First</h3>
              <p className="text-gray-600">
                We focus on results that matter to your business - qualified leads and paying customers, not just clicks or impressions.
              </p>
            </div>
            
            <div className="glassmorphism p-8 text-center card-hover">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">1-Month Free Trial</h3>
              <p className="text-gray-600">
                Start with a full month of free service. See the results before making any financial commitment.
              </p>
            </div>
            
            <div className="glassmorphism p-8 text-center card-hover">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">No Upfront Payment</h3>
              <p className="text-gray-600">
                We operate on a performance-based model. You only pay when we deliver results that grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-10 md:p-16 rounded-xl text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-800">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Get started with our no-risk, 1-month free trial and see the results for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/918431818662?text=Hi%20AutoLead%20team%2C%20I'm%20interested%20in%20your%20AI%20lead%20generation%20system!"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Chat on WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default About;
