
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

const AdministrationPage = () => {
  const adminTeam = [
    {
      name: "Dr. V. Srinivasulu",
      position: "Chairman",
      department: "Administration",
      email: "chairman@iare.ac.in",
      phone: "+91-40-24433456"
    },
    {
      name: "Dr. L V Narasimha Prasad",
      position: "Principal",
      department: "Administration",
      email: "principal@iare.ac.in",
      phone: "+91-40-24433457"
    },
    {
      name: "Dr. K. Srinivas",
      position: "Dean, Academic Affairs",
      department: "Academic Administration",
      email: "dean.academics@iare.ac.in",
      phone: "+91-40-24433458"
    },
    {
      name: "Dr. M. Purushotham Reddy",
      position: "Dean, Research & Development",
      department: "Research Administration",
      email: "dean.research@iare.ac.in",
      phone: "+91-40-24433459"
    },
    {
      name: "Dr. P. Sridhar",
      position: "Controller of Examinations",
      department: "Examinations",
      email: "controller.exams@iare.ac.in",
      phone: "+91-40-24433460"
    },
    {
      name: "Mr. K. Vishnu Vardhan",
      position: "Administrative Officer",
      department: "Administration",
      email: "admin.officer@iare.ac.in",
      phone: "+91-40-24433461"
    }
  ];

  const departments = [
    {
      name: "Department of Aeronautical Engineering",
      head: "Dr. G. Madhu Kumar",
      email: "hod.aero@iare.ac.in"
    },
    {
      name: "Department of Computer Science and Engineering",
      head: "Dr. J. Sirisha Devi",
      email: "hod.cse@iare.ac.in"
    },
    {
      name: "Department of Information Technology",
      head: "Dr. B. Padmaja",
      email: "hod.it@iare.ac.in"
    },
    {
      name: "Department of Electronics and Communication Engineering",
      head: "Dr. D. Ramesh",
      email: "hod.ece@iare.ac.in"
    },
    {
      name: "Department of Electrical and Electronics Engineering",
      head: "Dr. M. Chakravarthy",
      email: "hod.eee@iare.ac.in"
    },
    {
      name: "Department of Mechanical Engineering",
      head: "Dr. P. Ram Reddy",
      email: "hod.mech@iare.ac.in"
    },
    {
      name: "Department of Civil Engineering",
      head: "Dr. S. Naveen Kumar",
      email: "hod.civil@iare.ac.in"
    },
    {
      name: "Department of Humanities and Sciences",
      head: "Dr. V. Vijaya Kumar",
      email: "hod.hs@iare.ac.in"
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
              <BreadcrumbLink href="/about/administration">Administration</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-3xl font-bold text-iare-blue mb-6">Administration</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-iare-blue mb-4">Administrative Team</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            The administrative team at IARE is responsible for the overall management, governance, and 
            policy implementation of the institute. Led by the Chairman and Principal, the team works 
            collaboratively to ensure smooth functioning of all academic and non-academic activities.
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold text-gray-700">Name</th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold text-gray-700">Position</th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold text-gray-700">Department</th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold text-gray-700">Email</th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold text-gray-700">Phone</th>
                </tr>
              </thead>
              <tbody>
                {adminTeam.map((member, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 border-b border-gray-200">{member.name}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{member.position}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{member.department}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{member.email}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{member.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-iare-blue mb-4">Academic Departments</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            IARE has well-established academic departments headed by experienced faculty members. 
            Each department is responsible for curriculum development, teaching, research, and 
            student mentoring in their respective disciplines.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="border rounded-lg p-4 bg-gray-50">
                <h3 className="text-lg font-medium text-iare-blue mb-2">{dept.name}</h3>
                <p className="text-gray-700"><span className="font-medium">Head:</span> {dept.head}</p>
                <p className="text-gray-700"><span className="font-medium">Email:</span> {dept.email}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-iare-blue mb-4">Administrative Structure</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            The institute follows a well-defined administrative structure that ensures efficient 
            management and clear communication channels. The structure is designed to facilitate 
            smooth functioning of academic and administrative processes.
          </p>
          
          <div className="relative overflow-x-auto">
            <img 
              src="https://cdn.pixabay.com/photo/2021/09/12/07/58/organization-chart-6617775_1280.png" 
              alt="Administrative Structure" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-medium text-iare-blue mb-3">Key Responsibilities</h3>
            
            <ul className="list-disc pl-5 text-gray-700 space-y-2 leading-relaxed">
              <li><span className="font-medium">Chairman:</span> Overall leadership and strategic direction</li>
              <li><span className="font-medium">Principal:</span> Academic and administrative leadership</li>
              <li><span className="font-medium">Dean, Academic Affairs:</span> Curriculum development and academic policies</li>
              <li><span className="font-medium">Dean, R&D:</span> Research initiatives and industry collaborations</li>
              <li><span className="font-medium">Controller of Examinations:</span> Examination processes and evaluation systems</li>
              <li><span className="font-medium">Administrative Officer:</span> Day-to-day administrative operations</li>
              <li><span className="font-medium">Department Heads:</span> Department-specific academic and administrative functions</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdministrationPage;
