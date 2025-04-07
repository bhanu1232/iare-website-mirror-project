
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About IARE</h3>
            <p className="text-gray-400 mb-4">
              Institute of Aeronautical Engineering (IARE) is one of the premier engineering colleges in India. Established in 2000, it offers a wide range of undergraduate and postgraduate programs.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-800 hover:bg-iare-blue p-2 rounded-full transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-iare-blue p-2 rounded-full transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-iare-blue p-2 rounded-full transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-iare-blue p-2 rounded-full transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" /> About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" /> Admissions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" /> Academics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" /> Research
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" /> Placements
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" /> Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 text-iare-blue mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  Dundigal, Hyderabad, Telangana - 500043, India
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-iare-blue mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 9876543210</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-iare-blue mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@iare.ac.in</span>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 text-iare-blue mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  Monday - Saturday: 9:00 AM - 5:00 PM
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Map Location</h3>
            <div className="rounded-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3967961486387!2d78.42829261744385!3d17.49747710000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f06e86d0b33%3A0x582a67a2a3ca7190!2sInstitute%20of%20Aeronautical%20Engineering!5e0!3m2!1sen!2sin!4v1642777117718!5m2!1sen!2sin" 
                width="100%" 
                height="160" 
                style={{ border: 0 }} 
                loading="lazy"
                title="IARE Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Institute of Aeronautical Engineering. All Rights Reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white">Privacy Policy</a> | 
            <a href="#" className="hover:text-white mx-2">Terms of Service</a> | 
            <a href="#" className="hover:text-white">Sitemap</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
