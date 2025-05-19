import React from "react";
import { NavLink } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-white border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 bg-sky-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-700">
                AutoLead Systems
              </h2>
            </div>
            <p className="text-gray-600 max-w-md">
              We build AI-powered automation systems that generate leads 24/7 —
              no charge, no commitment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 font-medium mb-4 pb-2 border-b border-blue-100">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About
                </NavLink>
              </li>
              <li>
                <a
                  href="https://wa.me/918431818662?text=Hi%20AutoLead%20team%2C%20I'm%20interested%20in%20your%20AI%20lead%20generation%20system!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-800 font-medium mb-4 pb-2 border-b border-blue-100">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-600">
                <Phone size={16} className="text-blue-600" />
                <span>+91 8431818662</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail size={16} className="text-blue-600" />
                <span>prahladh416@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-100 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AutoLead Systems. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
              Terms of Service
            </a> */}

            <p className="text-gray-500 text-sm">
              Deveoped by{" "}
              <a
                href="https://jwswebservices.netlify.app/"
                target="_blank"
                className="text-gray-500 hover:text-blue-600 text-sm transition-colors hover:underline"
              >
                JWS
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
