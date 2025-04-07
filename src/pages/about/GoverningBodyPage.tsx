
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

const GoverningBodyPage = () => {
  const governingMembers = [
    {
      name: "Dr. V. Srinivasulu",
      position: "Chairman",
      qualification: "Ph.D.",
      affiliation: "IARE"
    },
    {
      name: "Dr. L V Narasimha Prasad",
      position: "Principal & Member Secretary",
      qualification: "Ph.D.",
      affiliation: "IARE"
    },
    {
      name: "Prof. T. Vijaya Kumar",
      position: "Member",
      qualification: "M.Tech",
      affiliation: "JNTU Hyderabad Nominee"
    },
    {
      name: "Dr. P. Jayaprakash",
      position: "Member",
      qualification: "Ph.D.",
      affiliation: "AICTE Nominee"
    },
    {
      name: "Dr. K. Rameshwar Rao",
      position: "Member",
      qualification: "Ph.D.",
      affiliation: "State Government Nominee"
    },
    {
      name: "Mr. Dileep Konatham",
      position: "Member",
      qualification: "MBA",
      affiliation: "Industry Representative"
    },
    {
      name: "Ms. Suma Kalluri",
      position: "Member",
      qualification: "M.Tech",
      affiliation: "Industry Representative"
    },
    {
      name: "Dr. K. Srinivas",
      position: "Member",
      qualification: "Ph.D.",
      affiliation: "Faculty Member"
    },
    {
      name: "Dr. M. Purushotham Reddy",
      position: "Member",
      qualification: "Ph.D.",
      affiliation: "Faculty Member"
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
              <BreadcrumbLink href="/about">About</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/about/governing-body">Governing Body</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-3xl font-bold text-iare-blue mb-6">Governing Body</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-700 mb-6 leading-relaxed">
            The Governing Body is the supreme administrative authority of the Institute, responsible for 
            the overall governance, strategic direction, and policy formulation. It comprises distinguished 
            academicians, industry experts, and government nominees who bring diverse expertise to guide 
            the Institute's development and ensure academic excellence.
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold text-gray-700">Name</th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold text-gray-700">Position</th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold text-gray-700">Qualification</th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold text-gray-700">Affiliation</th>
                </tr>
              </thead>
              <tbody>
                {governingMembers.map((member, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 border-b border-gray-200">{member.name}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{member.position}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{member.qualification}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{member.affiliation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-iare-blue mb-4">Functions of the Governing Body</h2>
          
          <ul className="list-disc pl-5 text-gray-700 space-y-3 leading-relaxed">
            <li>Approve the vision and mission of the institution and provide strategic direction.</li>
            <li>Ensure the financial sustainability and resource allocation for various activities.</li>
            <li>Review and approve major policies, regulations, and academic programs.</li>
            <li>Monitor the overall performance and quality of education provided by the institution.</li>
            <li>Approve annual budgets and financial statements.</li>
            <li>Ensure compliance with statutory and regulatory requirements.</li>
            <li>Approve the creation of new positions, departments, and courses.</li>
            <li>Set performance targets and review institutional achievements.</li>
            <li>Establish mechanisms for faculty and staff development.</li>
            <li>Foster relationships with industry, government, and other educational institutions.</li>
          </ul>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GoverningBodyPage;
