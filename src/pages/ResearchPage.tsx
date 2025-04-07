
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home, BookOpen, Award, Lightbulb, FileText, BookMarked } from 'lucide-react';

const ResearchPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4 mr-1" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/research">Research</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-3xl font-bold text-iare-blue mb-8">Research at IARE</h1>
        
        <div className="mb-12 bg-white rounded-lg shadow-md p-6">
          <p className="text-lg text-gray-700 mb-6">
            The Institute of Aeronautical Engineering is committed to advancing knowledge through innovative research across various disciplines. Our research centers provide state-of-the-art facilities and support for faculty and students to explore new ideas and develop solutions to real-world problems.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-iare-blue p-3 rounded-full">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-center text-lg font-semibold mb-2">Research Vision</h3>
              <p className="text-gray-700 text-center">
                To become a center of excellence in research and innovation, contributing to technological advancement and societal development.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-iare-blue p-3 rounded-full">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-center text-lg font-semibold mb-2">Recognition</h3>
              <p className="text-gray-700 text-center">
                IARE is recognized by various government agencies for its contribution to research and development.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-iare-blue p-3 rounded-full">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-center text-lg font-semibold mb-2">Publications</h3>
              <p className="text-gray-700 text-center">
                Our faculty and students have published over 500 research papers in national and international journals.
              </p>
            </div>
          </div>
        </div>
        
        <div id="centers" className="mb-12">
          <h2 className="text-2xl font-semibold text-iare-blue mb-6">Research Centers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-iare-blue to-blue-700 h-3"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Center for AI and Machine Learning</h3>
                <p className="text-gray-700 mb-4">
                  The Center focuses on developing innovative AI solutions for complex problems in various domains including healthcare, transportation, and cybersecurity.
                </p>
                <div className="text-sm text-gray-600">
                  <p><strong>Head:</strong> Dr. Rajesh Kumar</p>
                  <p><strong>Established:</strong> 2018</p>
                  <p><strong>Location:</strong> Block A, 3rd Floor</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-iare-blue to-blue-700 h-3"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Aerospace Research and Innovation Center</h3>
                <p className="text-gray-700 mb-4">
                  This center focuses on research in aircraft design, propulsion systems, and aerospace materials to advance the field of aeronautical engineering.
                </p>
                <div className="text-sm text-gray-600">
                  <p><strong>Head:</strong> Dr. Anand Singh</p>
                  <p><strong>Established:</strong> 2010</p>
                  <p><strong>Location:</strong> Block B, Ground Floor</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-iare-blue to-blue-700 h-3"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Robotics and Automation Research Lab</h3>
                <p className="text-gray-700 mb-4">
                  The lab is dedicated to advancing the field of robotics through research in areas such as autonomous systems, human-robot interaction, and industrial automation.
                </p>
                <div className="text-sm text-gray-600">
                  <p><strong>Head:</strong> Dr. Priya Sharma</p>
                  <p><strong>Established:</strong> 2015</p>
                  <p><strong>Location:</strong> Block C, 2nd Floor</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-iare-blue to-blue-700 h-3"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Center for Renewable Energy Research</h3>
                <p className="text-gray-700 mb-4">
                  This center conducts research on sustainable energy solutions, including solar, wind, and biomass energy, to address global energy challenges.
                </p>
                <div className="text-sm text-gray-600">
                  <p><strong>Head:</strong> Dr. Sunil Patel</p>
                  <p><strong>Established:</strong> 2016</p>
                  <p><strong>Location:</strong> Block D, 1st Floor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="publications" className="mb-12">
          <h2 className="text-2xl font-semibold text-iare-blue mb-6">Recent Publications</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Title</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Authors</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Journal/Conference</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-sm">Machine Learning Approaches for Predictive Maintenance in Aviation</td>
                    <td className="py-3 px-4 text-sm">Dr. Rajesh Kumar, Dr. Aruna Singh</td>
                    <td className="py-3 px-4 text-sm">International Journal of Aerospace Engineering</td>
                    <td className="py-3 px-4 text-sm">2023</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-sm">Design and Analysis of Lightweight Materials for Aircraft Structures</td>
                    <td className="py-3 px-4 text-sm">Dr. Anand Singh, S. Venkat, P. Reddy</td>
                    <td className="py-3 px-4 text-sm">Journal of Materials Science and Engineering</td>
                    <td className="py-3 px-4 text-sm">2023</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-sm">Advanced Control Systems for Autonomous Drones</td>
                    <td className="py-3 px-4 text-sm">Dr. Priya Sharma, Dr. Neeraj Verma</td>
                    <td className="py-3 px-4 text-sm">IEEE Conference on Robotics and Automation</td>
                    <td className="py-3 px-4 text-sm">2022</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-sm">Solar Energy Integration with Smart Grid: Challenges and Solutions</td>
                    <td className="py-3 px-4 text-sm">Dr. Sunil Patel, K. Mehta</td>
                    <td className="py-3 px-4 text-sm">Renewable Energy Journal</td>
                    <td className="py-3 px-4 text-sm">2022</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm">Efficient Algorithms for Air Traffic Management</td>
                    <td className="py-3 px-4 text-sm">Dr. Rajesh Kumar, P. Singh, S. Kumar</td>
                    <td className="py-3 px-4 text-sm">Transportation Research Part C</td>
                    <td className="py-3 px-4 text-sm">2021</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div id="patents" className="mb-12">
          <h2 className="text-2xl font-semibold text-iare-blue mb-6">Patents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <div className="bg-iare-blue p-2 rounded-full mr-4 mt-1">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Method and Apparatus for Aircraft Fuel Efficiency Optimization</h3>
                  <p className="text-gray-700 text-sm mb-1"><strong>Inventors:</strong> Dr. Anand Singh, Dr. Rajesh Kumar</p>
                  <p className="text-gray-700 text-sm mb-1"><strong>Patent No:</strong> IN2021000123</p>
                  <p className="text-gray-700 text-sm"><strong>Year:</strong> 2021</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <div className="bg-iare-blue p-2 rounded-full mr-4 mt-1">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Artificial Intelligence Based Predictive Maintenance System</h3>
                  <p className="text-gray-700 text-sm mb-1"><strong>Inventors:</strong> Dr. Priya Sharma, Dr. Neeraj Verma</p>
                  <p className="text-gray-700 text-sm mb-1"><strong>Patent No:</strong> US2022056789</p>
                  <p className="text-gray-700 text-sm"><strong>Year:</strong> 2022</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <div className="bg-iare-blue p-2 rounded-full mr-4 mt-1">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Hybrid Solar Energy Harvesting System</h3>
                  <p className="text-gray-700 text-sm mb-1"><strong>Inventors:</strong> Dr. Sunil Patel, K. Mehta</p>
                  <p className="text-gray-700 text-sm mb-1"><strong>Patent No:</strong> IN2022000456</p>
                  <p className="text-gray-700 text-sm"><strong>Year:</strong> 2022</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <div className="bg-iare-blue p-2 rounded-full mr-4 mt-1">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Autonomous Navigation System for Indoor Robots</h3>
                  <p className="text-gray-700 text-sm mb-1"><strong>Inventors:</strong> Dr. Rajesh Kumar, S. Kumar</p>
                  <p className="text-gray-700 text-sm mb-1"><strong>Patent No:</strong> US2023012345</p>
                  <p className="text-gray-700 text-sm"><strong>Year:</strong> 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="projects" className="mb-12">
          <h2 className="text-2xl font-semibold text-iare-blue mb-6">Funded Projects</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Project Title</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Principal Investigator</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Funding Agency</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Amount (₹)</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-sm">Development of AI-based Air Traffic Management System</td>
                    <td className="py-3 px-4 text-sm">Dr. Rajesh Kumar</td>
                    <td className="py-3 px-4 text-sm">DST</td>
                    <td className="py-3 px-4 text-sm">₹75 Lakhs</td>
                    <td className="py-3 px-4 text-sm">2022-2025</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-sm">Advanced Materials for Aircraft Structures</td>
                    <td className="py-3 px-4 text-sm">Dr. Anand Singh</td>
                    <td className="py-3 px-4 text-sm">DRDO</td>
                    <td className="py-3 px-4 text-sm">₹120 Lakhs</td>
                    <td className="py-3 px-4 text-sm">2021-2024</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-sm">Autonomous Drones for Disaster Management</td>
                    <td className="py-3 px-4 text-sm">Dr. Priya Sharma</td>
                    <td className="py-3 px-4 text-sm">CSIR</td>
                    <td className="py-3 px-4 text-sm">₹60 Lakhs</td>
                    <td className="py-3 px-4 text-sm">2022-2024</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-sm">Smart Grid Integration with Renewable Energy Sources</td>
                    <td className="py-3 px-4 text-sm">Dr. Sunil Patel</td>
                    <td className="py-3 px-4 text-sm">MNRE</td>
                    <td className="py-3 px-4 text-sm">₹90 Lakhs</td>
                    <td className="py-3 px-4 text-sm">2020-2023</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm">IoT Based Monitoring System for Aircraft Maintenance</td>
                    <td className="py-3 px-4 text-sm">Dr. Neeraj Verma</td>
                    <td className="py-3 px-4 text-sm">AICTE</td>
                    <td className="py-3 px-4 text-sm">₹45 Lakhs</td>
                    <td className="py-3 px-4 text-sm">2021-2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ResearchPage;
