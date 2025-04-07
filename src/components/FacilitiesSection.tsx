
import React from 'react';
import { Library, Server, Coffee, BookOpen, Users, Activity } from 'lucide-react';

const facilities = [
  {
    icon: <Library className="h-6 w-6" />,
    title: 'Central Library',
    description: 'State-of-the-art library with extensive collection of books, journals, and digital resources.'
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: 'Computer Labs',
    description: 'Modern computer labs equipped with the latest hardware and software for practical learning.'
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: 'Research Facilities',
    description: 'Advanced research centers and labs for cutting-edge innovation and development.'
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Auditorium',
    description: 'Spacious auditorium for conferences, seminars, and cultural events.'
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: 'Cafeteria',
    description: 'Hygienic cafeteria serving nutritious meals and snacks for students and staff.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Sports Complex',
    description: 'Comprehensive sports facilities including indoor and outdoor sports for overall development.'
  }
];

const FacilitiesSection = () => {
  return (
    <section className="py-16 bg-iare-whitegray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Campus Facilities</h2>
          <div className="w-20 h-1 bg-iare-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            IARE offers world-class facilities to provide an optimal learning environment and enhance the overall educational experience of students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-3 bg-iare-blue bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <div className="text-iare-blue">
                  {facility.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-block bg-iare-blue hover:bg-iare-darkblue text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
          >
            Virtual Campus Tour
          </a>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
