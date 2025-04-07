
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home, CheckCircle2 } from 'lucide-react';

const PlacementsOverviewPage = () => {
  const placementProcess = [
    {
      title: "Pre-Placement Training",
      description: "Comprehensive training programs for aptitude, technical skills, soft skills, and interview preparation."
    },
    {
      title: "Company Registration",
      description: "Companies register for campus recruitment and share their requirements and selection criteria."
    },
    {
      title: "Pre-Placement Talk",
      description: "Companies conduct pre-placement talks to introduce their organization, roles, and expectations."
    },
    {
      title: "Aptitude Tests",
      description: "Students undergo aptitude tests, technical assessments, and coding challenges."
    },
    {
      title: "Group Discussions",
      description: "Selected candidates participate in group discussions to showcase their communication and analytical skills."
    },
    {
      title: "Technical Interviews",
      description: "In-depth technical interviews to evaluate domain knowledge and problem-solving abilities."
    },
    {
      title: "HR Interviews",
      description: "Final round to assess cultural fit, personality, and overall suitability for the organization."
    },
    {
      title: "Offer Letter",
      description: "Successful candidates receive job offers and placement confirmation."
    }
  ];

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
              <BreadcrumbLink href="/placements">Placements</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/placements/overview">Overview</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-3xl font-bold text-iare-blue mb-6">Placements Overview</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">About Our Placement Cell</h2>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Training and Placement Cell at IARE serves as a bridge between the students 
                and the corporate world. The cell is dedicated to providing exceptional career 
                opportunities to our students and ensuring that they are well-prepared to meet 
                the industry requirements.
              </p>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                We maintain strong relationships with leading companies across various sectors 
                including IT, core engineering, banking, consulting, and manufacturing. Our 
                dedicated team works tirelessly to attract the best companies for campus 
                recruitment and provide comprehensive support to both students and recruiters.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                The placement cell organizes various activities throughout the academic year, 
                including pre-placement training programs, mock interviews, industry visits, 
                guest lectures, and workshops. These activities help students develop essential 
                skills and gain exposure to the corporate environment.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Placement Process</h2>
              
              <div className="space-y-6">
                {placementProcess.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-iare-lightgray text-iare-blue font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-iare-blue mb-1">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-iare-blue mb-4">Contact Information</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800">Dr. R. Srinivas</h3>
                  <p className="text-gray-700">Head, Training & Placement Cell</p>
                  <p className="text-gray-700">Email: placement@iare.ac.in</p>
                  <p className="text-gray-700">Phone: +91-40-24755066</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800">Ms. K. Divya</h3>
                  <p className="text-gray-700">Placement Coordinator</p>
                  <p className="text-gray-700">Email: placements.coord@iare.ac.in</p>
                  <p className="text-gray-700">Phone: +91-40-24755067</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-iare-blue mb-4">Key Highlights</h2>
              
              <ul className="space-y-3">
                {[
                  "100+ companies visit annually for campus recruitment",
                  "90%+ placement rate across all departments",
                  "Highest package of ₹18 LPA, Average package of ₹6 LPA",
                  "Multiple job offers for top-performing students",
                  "Pre-placement offers through internships",
                  "Dedicated training programs for placement preparation",
                  "Strong alumni network in leading companies"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-iare-blue mb-4">Resources for Students</h2>
              
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-iare-blue mr-2">•</span>
                  <span>Resume Building Workshop Materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-iare-blue mr-2">•</span>
                  <span>Aptitude Test Practice Papers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-iare-blue mr-2">•</span>
                  <span>Technical Interview Preparation Guides</span>
                </li>
                <li className="flex items-start">
                  <span className="text-iare-blue mr-2">•</span>
                  <span>HR Interview Tips and Resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-iare-blue mr-2">•</span>
                  <span>Mock Interview Schedules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-iare-blue mr-2">•</span>
                  <span>Company-specific Preparation Materials</span>
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

export default PlacementsOverviewPage;
