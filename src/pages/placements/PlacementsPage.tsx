
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Briefcase, TrendingUp, Building, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlacementsPage = () => {
  const placementLinks = [
    {
      title: 'Overview',
      description: 'Learn about our placement process, training programs, and achievements.',
      icon: <Briefcase className="h-10 w-10 text-iare-blue" />,
      link: '/placements/overview'
    },
    {
      title: 'Statistics',
      description: 'Discover our placement records, salary packages, and company-wise recruitment data.',
      icon: <TrendingUp className="h-10 w-10 text-iare-blue" />,
      link: '/placements/statistics'
    },
    {
      title: 'Companies',
      description: 'Explore the top companies that recruit from our institute every year.',
      icon: <Building className="h-10 w-10 text-iare-blue" />,
      link: '/placements/companies'
    },
    {
      title: 'Training Programs',
      description: 'Know about our career development and pre-placement training initiatives.',
      icon: <BookOpen className="h-10 w-10 text-iare-blue" />,
      link: '/placements/training'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Banner */}
      <div className="bg-gradient-to-r from-iare-blue to-iare-darkblue py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Placements</h1>
          <p className="text-lg">Transforming careers through robust placement opportunities and industry connections</p>
        </div>
      </div>
      
      {/* Placement Links Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementLinks.map((item, index) => (
              <Link 
                to={item.link} 
                key={index}
                className="bg-white rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full bg-iare-lightgray">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Placement Highlights */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Placement Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-iare-blue mb-2">100+</div>
              <p className="text-gray-700">Companies visit annually</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-iare-blue mb-2">90%+</div>
              <p className="text-gray-700">Placement rate</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-iare-blue mb-2">₹18 LPA</div>
              <p className="text-gray-700">Highest package offered</p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 mb-6">
              The Training and Placement Cell at IARE is dedicated to providing exceptional career 
              opportunities to our students. We maintain strong relationships with leading companies 
              across various sectors and prepare our students through comprehensive training programs.
            </p>
            
            <Link 
              to="/placements/overview" 
              className="inline-block px-6 py-3 bg-iare-blue text-white font-medium rounded-md hover:bg-iare-darkblue transition-colors"
            >
              Learn More About Placements
            </Link>
          </div>
        </div>
      </div>
      
      {/* Top Recruiters */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Top Recruiters</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                <div className="w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 font-medium">
                  Company Logo
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/placements/companies" 
              className="inline-block px-6 py-2 border border-iare-blue text-iare-blue font-medium rounded-md hover:bg-iare-blue hover:text-white transition-colors"
            >
              View All Recruiters
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PlacementsPage;
