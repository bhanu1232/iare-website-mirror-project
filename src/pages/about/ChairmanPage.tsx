
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

const ChairmanPage = () => {
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
              <BreadcrumbLink href="/about/chairman">Chairman</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-3xl font-bold text-iare-blue mb-6">Chairman's Message</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/3">
              <img 
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
                alt="Chairman Dr. V. Srinivasulu" 
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="mt-4 bg-gray-50 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-iare-blue">Dr. V. Srinivasulu</h3>
                <p className="text-gray-700">Chairman, IARE</p>
                <p className="text-gray-700">Ph.D. in Computer Science</p>
                <div className="mt-3">
                  <p className="text-sm text-gray-600"><span className="font-medium">Email:</span> chairman@iare.ac.in</p>
                  <p className="text-sm text-gray-600"><span className="font-medium">Phone:</span> +91-40-24433456</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Dear Students, Parents, Faculty, and Friends,
                </p>
                
                <p className="mb-4">
                  It gives me immense pleasure to welcome you to the Institute of Aeronautical Engineering (IARE), 
                  an institution that has established itself as a center of excellence in engineering education 
                  since its inception in 2000. As the Chairman, I take pride in leading an institution that 
                  is committed to providing quality education and nurturing future leaders.
                </p>
                
                <p className="mb-4">
                  At IARE, we believe that education is not just about acquiring knowledge but also about 
                  developing a holistic personality. Our mission is to create an environment where students 
                  can grow intellectually, professionally, and ethically. We strive to instill in our students 
                  a spirit of inquiry, innovation, and a strong sense of social responsibility.
                </p>
                
                <p className="mb-4">
                  The world is witnessing rapid technological advancements, and at IARE, we ensure that our 
                  curriculum, teaching methodologies, and infrastructure keep pace with these changes. Our 
                  dedicated faculty members, who are experts in their respective fields, are committed to 
                  providing the best education to our students.
                </p>
                
                <p className="mb-4">
                  We have established strong partnerships with industry leaders, which enables our students 
                  to gain practical exposure and enhances their employability. Our state-of-the-art laboratories, 
                  research centers, and library resources provide an ideal environment for learning and innovation.
                </p>
                
                <p className="mb-4">
                  I am proud to share that our alumni have achieved remarkable success in their careers and 
                  have made significant contributions to society. Their achievements are a testament to the 
                  quality of education provided at IARE.
                </p>
                
                <p className="mb-4">
                  As we move forward, we remain committed to our vision of being one of the nation's premier 
                  engineering institutions. We will continue to strive for excellence in all our endeavors and 
                  ensure that our students are well-prepared to face the challenges of the future.
                </p>
                
                <p>
                  I invite you to explore our website and learn more about the various academic programs, 
                  research initiatives, and campus life at IARE. Should you have any questions or require 
                  further information, please do not hesitate to contact us.
                </p>
              </div>
              
              <div className="mt-6">
                <p className="font-semibold text-gray-700">Best Regards,</p>
                <p className="text-gray-700">Dr. V. Srinivasulu</p>
                <p className="text-gray-700">Chairman, IARE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ChairmanPage;
