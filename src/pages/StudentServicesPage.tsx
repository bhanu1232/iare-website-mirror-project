
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Briefcase, Home, Bus, GraduationCap } from 'lucide-react';

const StudentServicesPage = () => {
  const services = [
    {
      title: 'Examination',
      description: 'Semester exams, rules, regulations, results and evaluation procedures.',
      icon: <GraduationCap className="h-10 w-10 text-iare-blue" />,
      link: '/student-services/examination'
    },
    {
      title: 'Library',
      description: 'Digital library, e-books, journals, magazines and library resources.',
      icon: <BookOpen className="h-10 w-10 text-iare-blue" />,
      link: '/student-services/library'
    },
    {
      title: 'Placements',
      description: 'Campus placement, training programs, recruitment and career guidance.',
      icon: <Briefcase className="h-10 w-10 text-iare-blue" />,
      link: '/placements'
    },
    {
      title: 'Hostel',
      description: 'Hostel facilities, amenities, policies and accommodation details.',
      icon: <Home className="h-10 w-10 text-iare-blue" />,
      link: '/student-services/hostel'
    },
    {
      title: 'Transportation',
      description: 'Bus routes, schedules and transportation services for students.',
      icon: <Bus className="h-10 w-10 text-iare-blue" />,
      link: '/student-services/transportation'
    },
    {
      title: 'Scholarships',
      description: 'Merit, economically backward and government scholarship schemes.',
      icon: <Award className="h-10 w-10 text-iare-blue" />,
      link: '/student-services/scholarships'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Banner */}
      <div className="bg-gradient-to-r from-iare-blue to-iare-darkblue py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Student Services</h1>
          <p className="text-lg">Support services for students to enhance their academic journey</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                to={service.link}
                key={index}
                className="bg-white rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full bg-iare-lightgray">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Student Support */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Student Support at IARE</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4 text-gray-700">
              IARE is committed to providing comprehensive support services to enhance the academic, personal, and professional growth of our students. We believe in nurturing not just academic excellence but also overall personality development.
            </p>
            <p className="mb-4 text-gray-700">
              Our student services are designed to ensure that students have access to all the resources they need to succeed in their academic endeavors and prepare for their future careers. From state-of-the-art library facilities to career counseling, we provide all the necessary support.
            </p>
            <p className="text-gray-700">
              We encourage students to take full advantage of these services to make the most of their time at IARE and prepare themselves for a successful future.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StudentServicesPage;
