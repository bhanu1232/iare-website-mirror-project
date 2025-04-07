
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

const AboutPage = () => {
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
              <BreadcrumbLink href="/about">About</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-3xl font-bold text-iare-blue mb-6">About IARE</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Vision & Mission</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Vision</h3>
                  <p className="text-gray-700">
                    To be one of the nation's premier engineering institutions by establishing a unique learning environment where students are empowered with knowledge, professional competencies, and ethical values to address societal challenges.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Mission</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>To provide a nurturing educational environment that fosters critical thinking, creativity, and innovation.</li>
                    <li>To equip students with core competencies to excel academically and professionally.</li>
                    <li>To cultivate a collaborative environment that supports research and development.</li>
                    <li>To develop partnerships with industry and government that address technological challenges and promote sustainable solutions.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">History</h2>
              <p className="text-gray-700 mb-4">
                Institute of Aeronautical Engineering (IARE), Hyderabad was established in 2000, by a devoted group of eminent professionals and industrialists, having a long and outstanding experience in educational system with a mission "Educational Excellence and Research in Partnership with Industry."
              </p>
              <p className="text-gray-700 mb-4">
                The institution was established with the main objective of producing quality human resources who can contribute significantly to the nation building process and develop a better tomorrow.
              </p>
              <p className="text-gray-700">
                Over the years, IARE has grown from strength to strength and is now recognized as one of the premier engineering institutions in the country. The institution has been consistently ranked among the top engineering colleges and has received numerous accolades for its academic excellence and research initiatives.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-iare-blue mb-4">Quick Facts</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-32 font-medium">Founded:</span>
                  <span>2000</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium">Campus Area:</span>
                  <span>35 Acres</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium">NAAC Grade:</span>
                  <span>A++</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium">Departments:</span>
                  <span>8</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium">Programs:</span>
                  <span>UG, PG, Ph.D</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium">Faculty:</span>
                  <span>350+</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium">Students:</span>
                  <span>5000+</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-iare-blue mb-4">Recognitions</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-iare-blue mr-2">•</span>
                  <span>NAAC Accredited with A++ Grade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-iare-blue mr-2">•</span>
                  <span>AICTE Approved Institution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-iare-blue mr-2">•</span>
                  <span>NBA Accredited Programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-iare-blue mr-2">•</span>
                  <span>Autonomous Institution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-iare-blue mr-2">•</span>
                  <span>ISO 9001:2015 Certified</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
