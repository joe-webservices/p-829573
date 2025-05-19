import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Cpu, Globe, MessageSquare, ShieldCheck, Smartphone, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Service Card Component
const ServiceCard = ({
  icon,
  title,
  description
}) => {
  return <div className="glassmorphism p-6 rounded-xl card-hover">
      <div className="bg-blue-500/10 text-blue-500 p-3 rounded-full w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>;
};

// Feature Card Component
const FeatureCard = ({
  icon,
  title,
  description
}) => {
  return <div className="flex space-x-4 items-start">
      <div className="bg-blue-500/10 text-blue-500 p-3 rounded-full flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1 text-gray-900">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>;
};
const Home = () => {
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
              Turn Conversations into <span className="text-blue-500">Paying Customers</span> — On Autopilot
            </h1>
            
            <p className="text-xl max-w-2xl animate-fade-in animation-delay-100 text-gray-800">
              We build AI-powered automation systems that generate leads 24/7 — no charge, no commitment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in animation-delay-200">
              <a href="https://wa.me/918431818662?text=Hi%20AutoLead%20team%2C%20I'm%20interested%20in%20your%20AI%20lead%20generation%20system!" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-6 px-8 rounded-lg transition-all duration-300 flex items-center justify-center text-lg w-full sm:w-auto btn-glow">
                Chat on WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-6 md:px-12 bg-sky-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What We Do</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              We leverage AI technology to automate your customer acquisition process, allowing you to focus on what matters - growing your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <FeatureCard icon={<Globe size={24} />} title="AI-Driven Facebook Ads" description="Our AI algorithms identify your ideal customers and optimize ad spend for maximum ROI, delivering qualified leads directly to your business." />
            
            <FeatureCard icon={<Cpu size={24} />} title="Automated Lead Generation" description="We build customized workflows that qualify, nurture, and convert leads automatically through intelligent conversation systems." />
            
            <FeatureCard icon={<Zap size={24} />} title="Performance-Based Model" description="No upfront payments. We operate on a performance basis - you only pay when we deliver results. Your success is our success." />
            
            <FeatureCard icon={<ShieldCheck size={24} />} title="Free Demo" description="Start with a free demo to see the system in action. No contracts, no commitments, just real results you can measure." />
          </div>
        </div>
      </section>

      {/* Services We Offer Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services We Offer</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Comprehensive automation solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard icon={<Smartphone size={24} />} title="WhatsApp Automation" description="Engage with leads instantly through automated WhatsApp messaging systems that qualify and nurture prospects." />
            
            <ServiceCard icon={<MessageSquare size={24} />} title="AI Chatbots" description="Intelligent conversation systems that engage website visitors 24/7, answering questions and qualifying leads." />
            
            <ServiceCard icon={<Globe size={24} />} title="Facebook Ad Strategy" description="Data-driven approaches to targeting, creative development, and campaign optimization for maximum ROAS." />
            
            <ServiceCard icon={<Cpu size={24} />} title="CRM Integration" description="Seamlessly connect your lead generation workflow with your existing CRM for streamlined operations." />
            
            <ServiceCard icon={<BarChart3 size={24} />} title="Real-Time Reporting" description="Transparent dashboards showing campaign performance, lead quality, and conversion metrics in real-time." />
            
            <ServiceCard icon={<Zap size={24} />} title="Conversion Optimization" description="Continuous improvement of your sales funnel through A/B testing and data-driven refinements." />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="max-w-2xl mx-auto font-normal text-gray-700">
              Young, innovative, and results-focused - we bring a fresh approach to digital marketing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glassmorphism p-8 text-center card-hover">
              <div className="bg-blue-500/10 text-blue-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Privacy First</h3>
              <p className="text-gray-700">
                Your data and customer information remain secure and private. We follow strict data protection protocols.
              </p>
            </div>
            
            <div className="glassmorphism p-8 text-center card-hover">
              <div className="bg-blue-500/10 text-blue-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Cpu size={28} />
              </div>
              <h3 className="text-xl mb-3 font-semibold text-gray-800">AI Automation</h3>
              <p className="text-gray-700">
                Cutting-edge AI technology that learns and adapts to maximize your marketing performance over time.
              </p>
            </div>
            
            <div className="glassmorphism p-8 text-center card-hover">
              <div className="bg-blue-500/10 text-blue-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Growth Focused</h3>
              <p className="text-gray-700">
                We're committed to your growth. Our systems are designed for scalability as your business expands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-10 md:p-16 rounded-xl text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Ready to Automate Your Customer Acquisition?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Chat with us on WhatsApp to learn more about how we can help your business grow.
            </p>
            <div className="flex justify-center">
              <a href="https://wa.me/918431818662?text=Hi%20AutoLead%20team%2C%20I'm%20interested%20in%20your%20AI%20lead%20generation%20system!" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-6 px-8 rounded-lg transition-all duration-300 flex items-center justify-center text-lg btn-glow">
                Chat on WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;