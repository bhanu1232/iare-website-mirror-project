
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-iare-blue text-white py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center mb-2 md:mb-0">
            <Phone className="h-4 w-4 mr-1" />
            <span className="mr-4">+91 9871234567</span>
            <Mail className="h-4 w-4 mr-1" />
            <span>info@iare.ac.in</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Alumni</a>
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`bg-white py-4 shadow-md transition-all ${isScrolled ? 'sticky top-0 z-50' : ''}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://www.iare.ac.in/sites/default/files/IARE-Logonew.png" 
              alt="IARE Logo" 
              className="h-16" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <NavItem title="About" links={[
              'Vision & Mission', 'Governing Body', 'Chairman', 'Principal', 'Administration'
            ]} />
            <NavItem title="Academics" links={[
              'Programs', 'Departments', 'Academic Calendar', 'Regulations'
            ]} />
            <NavItem title="Admissions" links={[
              'UG Admissions', 'PG Admissions', 'Fee Structure', 'Scholarships'
            ]} />
            <NavItem title="Research" links={[
              'Research Centers', 'Publications', 'Patents', 'Funded Projects'
            ]} />
            <NavItem title="Campus Life" links={[
              'Clubs', 'Events', 'Sports', 'Facilities'
            ]} />
            <div className="flex items-center ml-4">
              <button className="text-iare-blue hover:text-iare-darkblue">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-iare-blue"
            onClick={toggleMenu}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-6">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://www.iare.ac.in/sites/default/files/IARE-Logonew.png" 
                  alt="IARE Logo" 
                  className="h-12" 
                />
              </Link>
              <button
                className="text-iare-blue"
                onClick={toggleMenu}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <MobileNavItem title="About" links={[
                'Vision & Mission', 'Governing Body', 'Chairman', 'Principal', 'Administration'
              ]} />
              <MobileNavItem title="Academics" links={[
                'Programs', 'Departments', 'Academic Calendar', 'Regulations'
              ]} />
              <MobileNavItem title="Admissions" links={[
                'UG Admissions', 'PG Admissions', 'Fee Structure', 'Scholarships'
              ]} />
              <MobileNavItem title="Research" links={[
                'Research Centers', 'Publications', 'Patents', 'Funded Projects'
              ]} />
              <MobileNavItem title="Campus Life" links={[
                'Clubs', 'Events', 'Sports', 'Facilities'
              ]} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ title, links }: { title: string, links: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center text-gray-800 hover:text-iare-blue font-medium">
        {title}
        <ChevronDown className="h-4 w-4 ml-1" />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50">
          <div className="py-2">
            {links.map((link, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-iare-blue hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MobileNavItem = ({ title, links }: { title: string, links: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="flex items-center justify-between w-full py-2 text-gray-800 font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pl-4 mt-2 space-y-2">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="block py-2 text-sm text-gray-700 hover:text-iare-blue"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
