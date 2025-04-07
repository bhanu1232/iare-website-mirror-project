
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

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
    <header className="w-full z-40">
      {/* Top Bar */}
      <div className="bg-iare-blue text-white py-1">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="flex items-center mb-1 md:mb-0">
            <Phone className="h-3 w-3 mr-1" />
            <span className="mr-4">+91 9871234567</span>
            <Mail className="h-3 w-3 mr-1" />
            <span>info@svucecse.com</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Alumni</a>
            <a href="#" className="hover:underline">Careers</a>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`bg-white py-2 shadow-md transition-all ${isScrolled ? 'sticky top-0 z-50' : ''}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h1 className='font-bold text-2xl text-[#005bab]'>SVUCE</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            <NavItem title="About" to="/about" links={[
              { name: 'Vision & Mission', url: '/about/vision-mission' },
              { name: 'Governing Body', url: '/about/governing-body' },
              { name: 'Chairman', url: '/about/chairman' },
              { name: 'Principal', url: '/about/principal' },
              { name: 'Administration', url: '/about/administration' }
            ]} />
            <NavItem title="Academics" to="/academics" links={[
              { name: 'Programs', url: '/academics#programs' },
              { name: 'Departments', url: '/academics#departments' },
              { name: 'Academic Calendar', url: '/academics#calendar' },
              { name: 'Regulations', url: '/academics#regulations' }
            ]} />
            <NavItem title="Admissions" to="/admissions" links={[
              { name: 'UG Admissions', url: '/admissions#ug' },
              { name: 'PG Admissions', url: '/admissions#pg' },
              { name: 'Fee Structure', url: '/admissions#fees' },
              { name: 'Scholarships', url: '/admissions#scholarships' }
            ]} />
            <NavItem title="Research" to="/research" links={[
              { name: 'Research Centers', url: '/research#centers' },
              { name: 'Publications', url: '/research#publications' },
              { name: 'Patents', url: '/research#patents' },
              { name: 'Funded Projects', url: '/research#projects' }
            ]} />
            <NavItem title="Placements" to="/placements" links={[
              { name: 'Overview', url: '/placements/overview' },
              { name: 'Statistics', url: '/placements/statistics' },
              { name: 'Companies', url: '/placements/companies' },
              { name: 'Training Programs', url: '/placements/training' }
            ]} />
            <NavItem title="Student Services" to="/student-services" links={[
              { name: 'Examination', url: '/student-services/examination' },
              { name: 'Library', url: '/student-services/library' },
              { name: 'Hostel', url: '/student-services/hostel' },
              { name: 'Transportation', url: '/student-services/transportation' },
              { name: 'Scholarships', url: '/student-services/scholarships' }
            ]} />
            <NavItem title="Campus Life" to="/campus-life" links={[
              { name: 'Clubs', url: '/campus-life#clubs' },
              { name: 'Events', url: '/campus-life#events' },
              { name: 'Sports', url: '/campus-life#sports' },
              { name: 'Facilities', url: '/campus-life#facilities' }
            ]} />
            <div className="flex items-center ml-2">
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
              <Link to="/" className="flex items-center" onClick={toggleMenu}>
                <img
                  src="https://www.iare.ac.in/sites/default/files/IARE-Logonew.png"
                  alt="IARE Logo"
                  className="h-10"
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
              <MobileNavItem
                title="About"
                to="/about"
                links={[
                  { name: 'Vision & Mission', url: '/about/vision-mission' },
                  { name: 'Governing Body', url: '/about/governing-body' },
                  { name: 'Chairman', url: '/about/chairman' },
                  { name: 'Principal', url: '/about/principal' },
                  { name: 'Administration', url: '/about/administration' }
                ]}
                closeMenu={toggleMenu}
              />
              <MobileNavItem
                title="Academics"
                to="/academics"
                links={[
                  { name: 'Programs', url: '/academics#programs' },
                  { name: 'Departments', url: '/academics#departments' },
                  { name: 'Academic Calendar', url: '/academics#calendar' },
                  { name: 'Regulations', url: '/academics#regulations' }
                ]}
                closeMenu={toggleMenu}
              />
              <MobileNavItem
                title="Admissions"
                to="/admissions"
                links={[
                  { name: 'UG Admissions', url: '/admissions#ug' },
                  { name: 'PG Admissions', url: '/admissions#pg' },
                  { name: 'Fee Structure', url: '/admissions#fees' },
                  { name: 'Scholarships', url: '/admissions#scholarships' }
                ]}
                closeMenu={toggleMenu}
              />
              <MobileNavItem
                title="Research"
                to="/research"
                links={[
                  { name: 'Research Centers', url: '/research#centers' },
                  { name: 'Publications', url: '/research#publications' },
                  { name: 'Patents', url: '/research#patents' },
                  { name: 'Funded Projects', url: '/research#projects' }
                ]}
                closeMenu={toggleMenu}
              />
              <MobileNavItem
                title="Placements"
                to="/placements"
                links={[
                  { name: 'Overview', url: '/placements/overview' },
                  { name: 'Statistics', url: '/placements/statistics' },
                  { name: 'Companies', url: '/placements/companies' },
                  { name: 'Training Programs', url: '/placements/training' }
                ]}
                closeMenu={toggleMenu}
              />
              <MobileNavItem
                title="Student Services"
                to="/student-services"
                links={[
                  { name: 'Examination', url: '/student-services/examination' },
                  { name: 'Library', url: '/student-services/library' },
                  { name: 'Hostel', url: '/student-services/hostel' },
                  { name: 'Transportation', url: '/student-services/transportation' },
                  { name: 'Scholarships', url: '/student-services/scholarships' }
                ]}
                closeMenu={toggleMenu}
              />
              <MobileNavItem
                title="Campus Life"
                to="/campus-life"
                links={[
                  { name: 'Clubs', url: '/campus-life#clubs' },
                  { name: 'Events', url: '/campus-life#events' },
                  { name: 'Sports', url: '/campus-life#sports' },
                  { name: 'Facilities', url: '/campus-life#facilities' }
                ]}
                closeMenu={toggleMenu}
              />
              <Link
                to="/contact"
                className="block py-2 text-iare-blue font-medium"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLink {
  name: string;
  url: string;
}

const NavItem = ({ title, to, links }: { title: string, to: string, links: NavLink[] }) => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(url);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link to={to} className="flex items-center text-gray-800 hover:text-iare-blue font-medium px-2 py-1">
        {title}
        <ChevronDown className="h-4 w-4 ml-1" />
      </Link>
      {isHovering && (
        <div
          className="absolute left-0 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="py-2">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-iare-blue hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface MobileNavItemProps {
  title: string;
  to: string;
  links: NavLink[];
  closeMenu: () => void;
}

const MobileNavItem = ({ title, to, links, closeMenu }: MobileNavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMainLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
    closeMenu();
  };

  const handleSubLinkClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(url);
    closeMenu();
  };

  return (
    <div>
      <div className="flex items-center justify-between w-full py-2">
        <Link to={to} className="text-gray-800 font-medium" onClick={handleMainLinkClick}>{title}</Link>
        <button
          className="text-gray-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
        </button>
      </div>
      {isOpen && (
        <div className="pl-4 mt-2 space-y-2">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              className="block py-2 text-sm text-gray-700 hover:text-iare-blue"
              onClick={(e) => handleSubLinkClick(link.url, e)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
