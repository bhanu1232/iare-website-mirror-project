
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home, Search } from 'lucide-react';

const PlacementsCompaniesPage = () => {
  const companies = [
    { name: "Microsoft", sector: "IT", visited: "Yes", offers: 15 },
    { name: "Amazon", sector: "IT", visited: "Yes", offers: 12 },
    { name: "Google", sector: "IT", visited: "Yes", offers: 8 },
    { name: "TCS", sector: "IT", visited: "Yes", offers: 45 },
    { name: "Infosys", sector: "IT", visited: "Yes", offers: 42 },
    { name: "Wipro", sector: "IT", visited: "Yes", offers: 38 },
    { name: "Capgemini", sector: "IT", visited: "Yes", offers: 35 },
    { name: "Tech Mahindra", sector: "IT", visited: "Yes", offers: 32 },
    { name: "HCL Technologies", sector: "IT", visited: "Yes", offers: 30 },
    { name: "Cognizant", sector: "IT", visited: "Yes", offers: 28 },
    { name: "Accenture", sector: "IT", visited: "Yes", offers: 25 },
    { name: "IBM", sector: "IT", visited: "Yes", offers: 22 },
    { name: "Deloitte", sector: "Consulting", visited: "Yes", offers: 20 },
    { name: "PwC", sector: "Consulting", visited: "Yes", offers: 18 },
    { name: "KPMG", sector: "Consulting", visited: "Yes", offers: 15 },
    { name: "L&T Infotech", sector: "IT", visited: "Yes", offers: 15 },
    { name: "Mindtree", sector: "IT", visited: "Yes", offers: 12 },
    { name: "Oracle", sector: "IT", visited: "Yes", offers: 10 },
    { name: "SAP", sector: "IT", visited: "Yes", offers: 8 },
    { name: "Cisco", sector: "IT", visited: "Yes", offers: 6 },
    { name: "Goldman Sachs", sector: "Banking", visited: "Yes", offers: 5 },
    { name: "Morgan Stanley", sector: "Banking", visited: "Yes", offers: 4 },
    { name: "JPMorgan Chase", sector: "Banking", visited: "Yes", offers: 4 },
    { name: "HSBC", sector: "Banking", visited: "Yes", offers: 4 },
    { name: "Airbus", sector: "Aerospace", visited: "Yes", offers: 3 },
    { name: "Boeing", sector: "Aerospace", visited: "No", offers: 0 },
    { name: "Honeywell", sector: "Engineering", visited: "Yes", offers: 8 },
    { name: "Siemens", sector: "Engineering", visited: "Yes", offers: 7 },
    { name: "ABB", sector: "Engineering", visited: "Yes", offers: 6 },
    { name: "Schneider Electric", sector: "Engineering", visited: "Yes", offers: 5 },
  ];

  const sectors = Array.from(new Set(companies.map(company => company.sector)));

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
              <BreadcrumbLink href="/placements/companies">Recruiters</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-3xl font-bold text-iare-blue mb-6">Our Recruiters</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-700 mb-6 leading-relaxed">
            IARE has established strong relationships with leading companies across various sectors. 
            Our placement cell works tirelessly to attract the best recruiters to our campus, 
            providing excellent career opportunities for our students. Below is a list of companies 
            that have recruited from our institute in recent years.
          </p>
          
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-500" />
            </div>
            <input 
              type="search" 
              className="block w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-iare-blue focus:border-iare-blue" 
              placeholder="Search for companies..." 
            />
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold text-gray-700">Company Name</th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold text-gray-700">Sector</th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold text-gray-700">Visited in 2022-23</th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold text-gray-700">Offers Made</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 border-b border-gray-200">{company.name}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{company.sector}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{company.visited}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{company.offers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-iare-blue mb-4">Companies by Sector</h2>
            
            <div className="space-y-4">
              {sectors.map((sector, index) => (
                <div key={index}>
                  <h3 className="text-lg font-medium text-iare-blue mb-2">{sector}</h3>
                  <div className="flex flex-wrap gap-2">
                    {companies
                      .filter(company => company.sector === sector)
                      .map((company, cIndex) => (
                        <span 
                          key={cIndex} 
                          className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                        >
                          {company.name}
                        </span>
                      ))
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-iare-blue mb-4">For Recruiters</h2>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              We invite companies to partner with us for campus recruitment and offer exciting 
              career opportunities to our talented students. The placement process is designed 
              to be smooth and efficient for both students and recruiters.
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-iare-blue mb-2">Why Recruit from IARE?</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 leading-relaxed">
                <li>Pool of highly skilled and well-trained students</li>
                <li>Curriculum aligned with industry requirements</li>
                <li>Strong focus on practical knowledge and problem-solving abilities</li>
                <li>Comprehensive pre-placement training programs</li>
                <li>Excellent infrastructure and facilities for recruitment drives</li>
                <li>Dedicated placement team for smooth coordination</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-iare-blue mb-2">Contact for Recruitment</h3>
              <p className="text-gray-700 mb-1">Dr. R. Srinivas</p>
              <p className="text-gray-700 mb-1">Head, Training & Placement Cell</p>
              <p className="text-gray-700 mb-1">Email: placement@iare.ac.in</p>
              <p className="text-gray-700">Phone: +91-40-24755066</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PlacementsCompaniesPage;
