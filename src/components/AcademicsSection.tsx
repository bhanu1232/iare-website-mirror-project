
import React from 'react';
import { Briefcase, BookOpen, GraduationCap, Code, Activity, ChevronRight } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: 'Computer Science and Engineering',
    icon: <Code className="h-6 w-6" />,
    description: 'Learn cutting-edge technologies and software development.',
    link: '#'
  },
  {
    id: 2,
    title: 'Mechanical Engineering',
    icon: <Activity className="h-6 w-6" />,
    description: 'Study design, analysis, and manufacturing of mechanical systems.',
    link: '#'
  },
  {
    id: 3,
    title: 'Electronics & Communication',
    icon: <Activity className="h-6 w-6" />,
    description: 'Focus on electronic devices, circuits, and communication systems.',
    link: '#'
  },
  {
    id: 4,
    title: 'Aeronautical Engineering',
    icon: <GraduationCap className="h-6 w-6" />,
    description: 'Specialize in the design and construction of aircraft and spacecraft.',
    link: '#'
  },
  {
    id: 5,
    title: 'Information Technology',
    icon: <BookOpen className="h-6 w-6" />,
    description: 'Study management and application of information using computers.',
    link: '#'
  },
  {
    id: 6,
    title: 'MBA Programs',
    icon: <Briefcase className="h-6 w-6" />,
    description: 'Develop leadership skills and business acumen.',
    link: '#'
  },
];

const AcademicsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Academic Programs</h2>
          <div className="w-20 h-1 bg-iare-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            IARE offers a wide range of undergraduate and postgraduate programs designed to prepare students for successful careers in various fields of engineering and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div key={program.id} className="bg-iare-whitegray rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-iare-blue bg-opacity-10 rounded-full">
                    <div className="text-iare-blue">
                      {program.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 flex-1 ml-3">{program.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <a 
                  href={program.link} 
                  className="inline-flex items-center text-iare-blue hover:text-iare-darkblue font-medium"
                >
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-block bg-iare-blue hover:bg-iare-darkblue text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
          >
            View All Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
