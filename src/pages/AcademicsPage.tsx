
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AcademicsPage = () => {
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
              <BreadcrumbLink href="/academics">Academics</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-3xl font-bold text-iare-blue mb-6">Academics</h1>
        
        <Tabs defaultValue="programs">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="calendar">Academic Calendar</TabsTrigger>
            <TabsTrigger value="regulations">Regulations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="programs" className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Undergraduate Programs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ProgramCard 
                  title="B.Tech in Computer Science & Engineering" 
                  duration="4 Years" 
                  intake="180" 
                />
                <ProgramCard 
                  title="B.Tech in Information Technology" 
                  duration="4 Years" 
                  intake="120" 
                />
                <ProgramCard 
                  title="B.Tech in Electronics & Communication Engineering" 
                  duration="4 Years" 
                  intake="120" 
                />
                <ProgramCard 
                  title="B.Tech in Electrical & Electronics Engineering" 
                  duration="4 Years" 
                  intake="60" 
                />
                <ProgramCard 
                  title="B.Tech in Mechanical Engineering" 
                  duration="4 Years" 
                  intake="60" 
                />
                <ProgramCard 
                  title="B.Tech in Civil Engineering" 
                  duration="4 Years" 
                  intake="60" 
                />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Postgraduate Programs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ProgramCard 
                  title="M.Tech in Computer Science & Engineering" 
                  duration="2 Years" 
                  intake="18" 
                />
                <ProgramCard 
                  title="M.Tech in VLSI System Design" 
                  duration="2 Years" 
                  intake="18" 
                />
                <ProgramCard 
                  title="M.Tech in Embedded Systems" 
                  duration="2 Years" 
                  intake="18" 
                />
                <ProgramCard 
                  title="M.Tech in Power Electronics" 
                  duration="2 Years" 
                  intake="18" 
                />
                <ProgramCard 
                  title="MBA in Business Administration" 
                  duration="2 Years" 
                  intake="120" 
                />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Doctoral Programs</h2>
              <p className="text-gray-700 mb-4">
                The Ph.D. program at IARE is designed to develop scholars who can conduct original research and make significant contributions to their fields. The program is available in the following disciplines:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Computer Science & Engineering</li>
                <li>Electronics & Communication Engineering</li>
                <li>Electrical & Electronics Engineering</li>
                <li>Mechanical Engineering</li>
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Mathematics</li>
                <li>Management</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="departments" className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Engineering Departments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DepartmentCard 
                  name="Computer Science & Engineering" 
                  established="2000"
                  faculty="60+" 
                  url="/academics/departments/cse"
                />
                <DepartmentCard 
                  name="Information Technology" 
                  established="2001"
                  faculty="45+" 
                  url="/academics/departments/it"
                />
                <DepartmentCard 
                  name="Electronics & Communication Engineering" 
                  established="2000"
                  faculty="50+" 
                  url="/academics/departments/ece"
                />
                <DepartmentCard 
                  name="Electrical & Electronics Engineering" 
                  established="2000"
                  faculty="35+" 
                  url="/academics/departments/eee"
                />
                <DepartmentCard 
                  name="Mechanical Engineering" 
                  established="2000"
                  faculty="40+" 
                  url="/academics/departments/me"
                />
                <DepartmentCard 
                  name="Civil Engineering" 
                  established="2002"
                  faculty="30+" 
                  url="/academics/departments/ce"
                />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Basic Sciences Departments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DepartmentCard 
                  name="Physics" 
                  established="2000"
                  faculty="15+" 
                  url="/academics/departments/physics"
                />
                <DepartmentCard 
                  name="Chemistry" 
                  established="2000"
                  faculty="12+" 
                  url="/academics/departments/chemistry"
                />
                <DepartmentCard 
                  name="Mathematics" 
                  established="2000"
                  faculty="18+" 
                  url="/academics/departments/mathematics"
                />
                <DepartmentCard 
                  name="Humanities & Social Sciences" 
                  established="2000"
                  faculty="20+" 
                  url="/academics/departments/hss"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="calendar" className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Academic Calendar 2023-24</h2>
              <p className="text-gray-700 mb-6">
                The academic calendar provides important dates for the academic year, including class start and end dates, examination schedules, holidays, and other significant events.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-iare-blue mb-3">Odd Semester (July 2023 - December 2023)</h3>
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b text-left">Event</th>
                        <th className="py-2 px-4 border-b text-left">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">Commencement of Classes</td>
                        <td className="py-2 px-4 border-b">July 17, 2023</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">First Mid-Term Examinations</td>
                        <td className="py-2 px-4 border-b">September 4-9, 2023</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Dussehra Holidays</td>
                        <td className="py-2 px-4 border-b">October 21-24, 2023</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Second Mid-Term Examinations</td>
                        <td className="py-2 px-4 border-b">October 30 - November 4, 2023</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Last Day of Instruction</td>
                        <td className="py-2 px-4 border-b">November 25, 2023</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">End Semester Examinations</td>
                        <td className="py-2 px-4 border-b">December 1-15, 2023</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Semester Break</td>
                        <td className="py-2 px-4 border-b">December 16-31, 2023</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-iare-blue mb-3">Even Semester (January 2024 - June 2024)</h3>
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b text-left">Event</th>
                        <th className="py-2 px-4 border-b text-left">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">Commencement of Classes</td>
                        <td className="py-2 px-4 border-b">January 1, 2024</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">First Mid-Term Examinations</td>
                        <td className="py-2 px-4 border-b">February 19-24, 2024</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Holi Holiday</td>
                        <td className="py-2 px-4 border-b">March 25, 2024</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Second Mid-Term Examinations</td>
                        <td className="py-2 px-4 border-b">April 8-13, 2024</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Last Day of Instruction</td>
                        <td className="py-2 px-4 border-b">May 11, 2024</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">End Semester Examinations</td>
                        <td className="py-2 px-4 border-b">May 20 - June 3, 2024</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Summer Vacation</td>
                        <td className="py-2 px-4 border-b">June 4 - July 14, 2024</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="regulations" className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Academic Regulations</h2>
              <p className="text-gray-700 mb-6">
                The academic regulations provide comprehensive guidelines for various academic programs offered by the institute. These regulations cover admission procedures, curriculum structure, evaluation methods, promotion policies, and graduation requirements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-medium mb-2">B.Tech Regulations (R20)</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Academic Regulations for B.Tech. Regular Students effective from AY 2020-21 and onwards
                  </p>
                  <a href="#" className="text-iare-blue hover:underline text-sm">Download PDF</a>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-medium mb-2">B.Tech Regulations (R19)</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Academic Regulations for B.Tech. Regular Students admitted in AY 2019-20
                  </p>
                  <a href="#" className="text-iare-blue hover:underline text-sm">Download PDF</a>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-medium mb-2">M.Tech Regulations (R20)</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Academic Regulations for M.Tech. Regular Students effective from AY 2020-21 and onwards
                  </p>
                  <a href="#" className="text-iare-blue hover:underline text-sm">Download PDF</a>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-medium mb-2">MBA Regulations (R20)</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Academic Regulations for MBA Regular Students effective from AY 2020-21 and onwards
                  </p>
                  <a href="#" className="text-iare-blue hover:underline text-sm">Download PDF</a>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-medium mb-2">Ph.D Regulations</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Academic Regulations for Ph.D. Programs effective from AY 2021-22
                  </p>
                  <a href="#" className="text-iare-blue hover:underline text-sm">Download PDF</a>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-medium mb-2">Academic Integrity Policy</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Guidelines for maintaining academic integrity and preventing plagiarism
                  </p>
                  <a href="#" className="text-iare-blue hover:underline text-sm">Download PDF</a>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

// Program Card Component
const ProgramCard = ({ title, duration, intake }: { title: string, duration: string, intake: string }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <h3 className="font-medium mb-2">{title}</h3>
      <div className="text-sm text-gray-600">
        <div className="flex items-center mb-1">
          <span className="w-20 font-medium">Duration:</span>
          <span>{duration}</span>
        </div>
        <div className="flex items-center">
          <span className="w-20 font-medium">Intake:</span>
          <span>{intake} seats</span>
        </div>
      </div>
    </div>
  );
};

// Department Card Component
const DepartmentCard = ({ name, established, faculty, url }: { name: string, established: string, faculty: string, url: string }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <h3 className="font-medium mb-2">{name}</h3>
      <div className="text-sm text-gray-600 mb-3">
        <div className="flex items-center mb-1">
          <span className="w-24 font-medium">Established:</span>
          <span>{established}</span>
        </div>
        <div className="flex items-center">
          <span className="w-24 font-medium">Faculty:</span>
          <span>{faculty}</span>
        </div>
      </div>
      <a href={url} className="text-iare-blue hover:underline text-sm">View Department</a>
    </div>
  );
};

export default AcademicsPage;
