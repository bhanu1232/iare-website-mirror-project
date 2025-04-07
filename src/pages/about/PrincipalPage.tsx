
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

const PrincipalPage = () => {
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
              <BreadcrumbLink href="/about/principal">Principal</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-3xl font-bold text-iare-blue mb-6">Principal's Message</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/3">
              <img 
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
                alt="Principal Dr. L V Narasimha Prasad" 
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="mt-4 bg-gray-50 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-iare-blue">Dr. L V Narasimha Prasad</h3>
                <p className="text-gray-700">Principal, IARE</p>
                <p className="text-gray-700">Ph.D. in Computer Science</p>
                <div className="mt-3">
                  <p className="text-sm text-gray-600"><span className="font-medium">Email:</span> principal@iare.ac.in</p>
                  <p className="text-sm text-gray-600"><span className="font-medium">Phone:</span> +91-40-24433457</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Dear Students, Parents, and Well-wishers,
                </p>
                
                <p className="mb-4">
                  It is my privilege to serve as the Principal of the Institute of Aeronautical Engineering (IARE), 
                  an institution that has consistently strived for excellence in engineering education. Since 
                  joining the IARE family, I have been impressed by the dedication of our faculty, the enthusiasm 
                  of our students, and the supportive environment that fosters learning and growth.
                </p>
                
                <p className="mb-4">
                  At IARE, we are committed to providing a holistic educational experience that goes beyond 
                  classroom learning. Our curriculum is designed to develop technical knowledge, critical 
                  thinking abilities, and soft skills necessary for professional success. We believe in 
                  nurturing not just engineers but responsible citizens who can contribute meaningfully to society.
                </p>
                
                <p className="mb-4">
                  We take pride in our state-of-the-art infrastructure, including well-equipped laboratories, 
                  a comprehensive library, computing facilities, and recreational spaces. These resources 
                  provide an optimal environment for academic pursuits and personal development.
                </p>
                
                <p className="mb-4">
                  Our faculty members, who are experts in their respective domains, employ innovative teaching 
                  methodologies and constantly update their knowledge to ensure that our students receive the 
                  best education. We also encourage research and innovation, providing opportunities for 
                  students and faculty to engage in cutting-edge research projects.
                </p>
                
                <p className="mb-4">
                  The Institute has established strong industry connections, which facilitate internships, 
                  industrial visits, and placement opportunities for our students. Our Training and Placement 
                  Cell works tirelessly to enhance the employability of our students and secure them positions 
                  in reputed organizations.
                </p>
                
                <p className="mb-4">
                  We believe in the all-round development of our students and offer various co-curricular and 
                  extracurricular activities through clubs, societies, and sports. These activities help students 
                  develop leadership qualities, teamwork skills, and a sense of social responsibility.
                </p>
                
                <p>
                  I invite you to explore our website to learn more about our academic programs, research 
                  initiatives, and campus life. Should you have any queries or require further information, 
                  please feel free to contact us. We look forward to welcoming you to the IARE family.
                </p>
              </div>
              
              <div className="mt-6">
                <p className="font-semibold text-gray-700">Best Regards,</p>
                <p className="text-gray-700">Dr. L V Narasimha Prasad</p>
                <p className="text-gray-700">Principal, IARE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrincipalPage;
