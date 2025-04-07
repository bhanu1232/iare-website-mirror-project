
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

const VisionMissionPage = () => {
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
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/about/vision-mission">Vision & Mission</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-3xl font-bold text-iare-blue mb-6">Vision & Mission</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-iare-blue mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be one of the nation's premier engineering institutions by establishing a unique learning 
              environment where students are empowered with knowledge, professional competencies, 
              and ethical values to address societal challenges.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-iare-blue mb-4">Our Mission</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-4 leading-relaxed">
              <li>
                <span className="font-medium">Excellence in Education:</span> To provide a nurturing 
                educational environment that fosters critical thinking, creativity, and innovation
                through comprehensive curricula, state-of-the-art infrastructure, and dedicated faculty.
              </li>
              <li>
                <span className="font-medium">Professional Development:</span> To equip students with 
                core competencies to excel academically and professionally, enabling them to adapt to 
                rapidly changing technological landscapes.
              </li>
              <li>
                <span className="font-medium">Research and Innovation:</span> To cultivate a collaborative 
                environment that supports research and development, promoting the discovery and application 
                of knowledge to solve real-world problems.
              </li>
              <li>
                <span className="font-medium">Industry Collaboration:</span> To develop partnerships with 
                industry and government that address technological challenges and promote sustainable solutions, 
                ensuring that education remains relevant and responsive to societal needs.
              </li>
              <li>
                <span className="font-medium">Ethical Leadership:</span> To instill values of integrity, 
                ethics, and social responsibility in our students, preparing them to be leaders who make 
                positive contributions to society.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-iare-blue mb-4">Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-medium text-iare-blue mb-2">Excellence</h3>
              <p className="text-gray-700">
                We strive for excellence in all our endeavors, constantly pushing the boundaries of what's possible.
              </p>
            </div>
            
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-medium text-iare-blue mb-2">Integrity</h3>
              <p className="text-gray-700">
                We uphold the highest standards of honesty, transparency, and ethical behavior.
              </p>
            </div>
            
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-medium text-iare-blue mb-2">Innovation</h3>
              <p className="text-gray-700">
                We foster creative thinking and encourage novel approaches to solving problems.
              </p>
            </div>
            
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-medium text-iare-blue mb-2">Collaboration</h3>
              <p className="text-gray-700">
                We believe in the power of teamwork and partnerships to achieve common goals.
              </p>
            </div>
            
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-medium text-iare-blue mb-2">Inclusivity</h3>
              <p className="text-gray-700">
                We value diversity and create an environment where everyone feels respected and included.
              </p>
            </div>
            
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-medium text-iare-blue mb-2">Social Responsibility</h3>
              <p className="text-gray-700">
                We are committed to making a positive impact on society and the environment.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default VisionMissionPage;
