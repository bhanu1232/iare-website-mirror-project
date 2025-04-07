
import React from 'react';
import { Award, BookOpen, Users, Check } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-iare-whitegray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About IARE</h2>
          <div className="w-20 h-1 bg-iare-blue mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Institute of Aeronautical Engineering (IARE) was established in 2000, by a devoted group of eminent professionals and industrialists, having a long and outstanding experience in educational system with a mission "Education for Liberation".
            </p>
            <p className="text-gray-700 leading-relaxed">
              IARE is rated as one of the premier engineering institutions in India. It is located in a sprawling campus of 36 acres at Dundigal, Hyderabad, on the way to Warangal from Hyderabad. It is a self-financed institution and is sponsored by Maruthi Educational Society.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Highlights</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-iare-blue mr-2 mt-1" />
                  <span className="text-gray-700">NAAC accredited with 'A++' grade, CGPA of 3.65</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-iare-blue mr-2 mt-1" />
                  <span className="text-gray-700">Accredited by NBA for all eligible B.Tech programs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-iare-blue mr-2 mt-1" />
                  <span className="text-gray-700">Ranked among Top 100 Engineering Colleges by NIRF</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-iare-blue mr-2 mt-1" />
                  <span className="text-gray-700">Strong industry connections with leading companies</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StatCard 
              icon={<Award className="h-10 w-10 text-iare-blue" />}
              title="Established"
              value="2000"
              description="Years of academic excellence"
            />
            <StatCard 
              icon={<BookOpen className="h-10 w-10 text-iare-blue" />}
              title="Programs"
              value="15+"
              description="UG and PG programs"
            />
            <StatCard 
              icon={<Users className="h-10 w-10 text-iare-blue" />}
              title="Students"
              value="5000+"
              description="Current student strength"
            />
            <StatCard 
              icon={<Award className="h-10 w-10 text-iare-blue" />}
              title="Placements"
              value="90%+"
              description="Placement record"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ 
  icon, 
  title, 
  value, 
  description 
}: { 
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-gray-800 font-semibold mb-1">{title}</h3>
      <p className="text-2xl font-bold text-iare-blue mb-1">{value}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default AboutSection;
