import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home, Download, FileText, Users, Phone, Mail } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const AdmissionsPage = () => {
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
              <BreadcrumbLink href="/admissions">Admissions</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-3xl font-bold text-iare-blue mb-6">Admissions</h1>
        
        <Tabs defaultValue="ug">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="ug">UG Admissions</TabsTrigger>
            <TabsTrigger value="pg">PG Admissions</TabsTrigger>
            <TabsTrigger value="fees">Fee Structure</TabsTrigger>
            <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ug" className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Undergraduate Admissions</h2>
              <p className="text-gray-700 mb-4">
                IARE offers B.Tech programs in various engineering disciplines. Admissions to these programs are based on the rank obtained in the state-level entrance examination (TS EAMCET) for 70% of the seats and through the national-level entrance examination (JEE Main) for the remaining 30% of the seats.
              </p>
              
              <div className="bg-gray-50 border border-gray-200 rounded-md p-4 mb-6">
                <h3 className="text-lg font-medium mb-2">Eligibility Criteria</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Passed 10+2 examination with Physics, Chemistry, and Mathematics</li>
                  <li>Minimum aggregate of 60% marks in PCM subjects</li>
                  <li>Valid rank in TS EAMCET / JEE Main</li>
                </ul>
              </div>
              
              <h3 className="text-lg font-medium mb-3">Admission Process</h3>
              <div className="space-y-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-iare-blue text-white rounded-full flex items-center justify-center mr-3">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Entrance Examination</h4>
                    <p className="text-gray-600 text-sm">Appear for TS EAMCET / JEE Main examination</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-iare-blue text-white rounded-full flex items-center justify-center mr-3">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Counseling Registration</h4>
                    <p className="text-gray-600 text-sm">Register for the counseling process on the official website</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-iare-blue text-white rounded-full flex items-center justify-center mr-3">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Document Verification</h4>
                    <p className="text-gray-600 text-sm">Attend the document verification process at the designated center</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-iare-blue text-white rounded-full flex items-center justify-center mr-3">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">Web Counseling</h4>
                    <p className="text-gray-600 text-sm">Select IARE and preferred branch during web counseling</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-iare-blue text-white rounded-full flex items-center justify-center mr-3">
                    5
                  </div>
                  <div>
                    <h4 className="font-medium">Allotment</h4>
                    <p className="text-gray-600 text-sm">Receive seat allotment and report to the institute</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-medium mb-3">Important Dates (2023-24)</h3>
              <table className="min-w-full bg-white border border-gray-200 mb-6">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Event</th>
                    <th className="py-2 px-4 border-b text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">TS EAMCET Examination</td>
                    <td className="py-2 px-4 border-b">May 7-11, 2023</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">TS EAMCET Results</td>
                    <td className="py-2 px-4 border-b">May 28, 2023</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Counseling Registration</td>
                    <td className="py-2 px-4 border-b">June 10-20, 2023</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Document Verification</td>
                    <td className="py-2 px-4 border-b">June 22-30, 2023</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Web Counseling</td>
                    <td className="py-2 px-4 border-b">July 5-10, 2023</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">First Phase Allotment</td>
                    <td className="py-2 px-4 border-b">July 15, 2023</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Reporting to Institute</td>
                    <td className="py-2 px-4 border-b">July 17-20, 2023</td>
                  </tr>
                </tbody>
              </table>
              
              <div className="flex flex-wrap gap-4">
                <Button className="bg-iare-blue hover:bg-blue-700">
                  <FileText className="mr-2 h-4 w-4" />
                  Apply Online
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Brochure
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="pg" className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Postgraduate Admissions</h2>
              <p className="text-gray-700 mb-4">
                IARE offers various postgraduate programs including M.Tech, MBA, and Ph.D. Admissions to these programs are based on the entrance examinations conducted at state and national levels.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-iare-blue mb-3">M.Tech Programs</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-md p-4 mb-4">
                  <h4 className="font-medium mb-2">Eligibility Criteria</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>B.Tech/B.E degree in relevant discipline from a recognized university</li>
                    <li>Minimum 60% aggregate marks in qualifying degree</li>
                    <li>Valid GATE score or rank in PGECET</li>
                  </ul>
                </div>
                
                <h4 className="font-medium mb-2">Available Specializations:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                  <li>Computer Science & Engineering</li>
                  <li>VLSI System Design</li>
                  <li>Embedded Systems</li>
                  <li>Power Electronics</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-iare-blue mb-3">MBA Program</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-md p-4 mb-4">
                  <h4 className="font-medium mb-2">Eligibility Criteria</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Bachelor's degree in any discipline from a recognized university</li>
                    <li>Minimum 50% aggregate marks in qualifying degree</li>
                    <li>Valid score in CAT/MAT/ICET</li>
                  </ul>
                </div>
                
                <h4 className="font-medium mb-2">Specializations Offered:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                  <li>Finance</li>
                  <li>Marketing</li>
                  <li>Human Resource Management</li>
                  <li>Operations Management</li>
                  <li>Business Analytics</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-iare-blue mb-3">Ph.D Program</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-md p-4 mb-4">
                  <h4 className="font-medium mb-2">Eligibility Criteria</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Master's degree in relevant discipline from a recognized university</li>
                    <li>Minimum 60% aggregate marks in qualifying degree</li>
                    <li>Qualifying in entrance test and interview conducted by the institute</li>
                  </ul>
                </div>
                
                <h4 className="font-medium mb-2">Research Areas:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
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
              
              <div className="flex flex-wrap gap-4">
                <Button className="bg-iare-blue hover:bg-blue-700">
                  <FileText className="mr-2 h-4 w-4" />
                  Apply for PG Programs
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Information Brochure
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="fees" className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Fee Structure</h2>
              <p className="text-gray-700 mb-6">
                The fee structure for various programs offered at IARE for the academic year 2023-24 is provided below. The fees mentioned are annual and subject to revision as per the guidelines of the fee regulatory committee.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-iare-blue mb-3">Undergraduate Programs (B.Tech)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-3 px-4 border-b text-left">Program</th>
                        <th className="py-3 px-4 border-b text-right">Tuition Fee (per annum)</th>
                        <th className="py-3 px-4 border-b text-right">Other Fees (per annum)</th>
                        <th className="py-3 px-4 border-b text-right">Total Fee (per annum)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-4 border-b">Computer Science & Engineering</td>
                        <td className="py-3 px-4 border-b text-right">₹1,25,000</td>
                        <td className="py-3 px-4 border-b text-right">₹15,000</td>
                        <td className="py-3 px-4 border-b text-right font-medium">₹1,40,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">Information Technology</td>
                        <td className="py-3 px-4 border-b text-right">₹1,25,000</td>
                        <td className="py-3 px-4 border-b text-right">₹15,000</td>
                        <td className="py-3 px-4 border-b text-right font-medium">₹1,40,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">Electronics & Communication Engineering</td>
                        <td className="py-3 px-4 border-b text-right">₹1,15,000</td>
                        <td className="py-3 px-4 border-b text-right">₹15,000</td>
                        <td className="py-3 px-4 border-b text-right font-medium">₹1,30,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">Electrical & Electronics Engineering</td>
                        <td className="py-3 px-4 border-b text-right">₹1,00,000</td>
                        <td className="py-3 px-4 border-b text-right">₹15,000</td>
                        <td className="py-3 px-4 border-b text-right font-medium">₹1,15,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">Mechanical Engineering</td>
                        <td className="py-3 px-4 border-b text-right">₹1,00,000</td>
                        <td className="py-3 px-4 border-b text-right">₹15,000</td>
                        <td className="py-3 px-4 border-b text-right font-medium">₹1,15,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">Civil Engineering</td>
                        <td className="py-3 px-4 border-b text-right">₹1,00,000</td>
                        <td className="py-3 px-4 border-b text-right">₹15,000</td>
                        <td className="py-3 px-4 border-b text-right font-medium">₹1,15,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-iare-blue mb-3">Postgraduate Programs (M.Tech)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-3 px-4 border-b text-left">Program</th>
                        <th className="py-3 px-4 border-b text-right">Tuition Fee (per annum)</th>
                        <th className="py-3 px-4 border-b text-right">Other Fees (per annum)</th>
                        <th className="py-3 px-4 border-b text-right">Total Fee (per annum)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-4 border-b">M.Tech in Computer Science & Engineering</td>
                        <td className="py-3 px-4 border-b text-right">₹80,000</td>
                        <td className="py-3 px-4 border-b text-right">₹10,000</td>
                        <td className="py-3 px-4 border-b text-right font-medium">₹90,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">M.Tech in VLSI System Design</td>
                        <td className="py-3 px-4 border-b text-right">₹80,000</td>
                        <td className="py-3 px-4 border-b text-right">₹10,000</td>
                        <td className="py-3 px-4 border-b text-right font-medium">₹90,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">M.Tech in Embedded Systems</td>
                        <td className="py-3 px-4 border-b text-right">₹80,000</td>
                        <td className="py-3 px-4 border-b text-right">₹10,000</td>
                        <td className="py-3 px-4 border-b text-right font-medium">₹90,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">M.Tech in Power Electronics</td>
                        <td className="py-3 px-4 border-b text-right">₹80,000</td>
                        <td className="py-3 px-4 border-b text-right">₹10,000</td>
                        <td className="py-3 px-4 border-b text-right font-medium">₹90,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">MBA</td>
                        <td className="py-3 px-4 border-b text-right">₹75,000</td>
                        <td className="py-3 px-4 border-b text-right">₹10,000</td>
                        <td className="py-3 px-4 border-b text-right font-medium">₹85,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-iare-blue mb-3">Other Fees (One Time)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-3 px-4 border-b text-left">Fee Type</th>
                        <th className="py-3 px-4 border-b text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-4 border-b">Admission Fee</td>
                        <td className="py-3 px-4 border-b text-right">₹5,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b">Caution Deposit (Refundable)</td>
                        <td className="py-3 px-4 border-b text-right">₹10,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="scholarships" className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Scholarships and Financial Aid</h2>
              <p className="text-gray-700 mb-6">
                IARE is committed to supporting deserving students through various scholarship programs. These scholarships are designed to recognize academic excellence, promote diversity, and provide financial assistance to economically disadvantaged students.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-iare-blue pl-4">
                  <h3 className="text-xl font-medium mb-2">Merit Scholarships</h3>
                  <p className="text-gray-700 mb-3">
                    Merit scholarships are awarded to students who have demonstrated exceptional academic performance in their previous examinations.
                  </p>
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-2 px-4 border-b text-left">Criteria</th>
                        <th className="py-2 px-4 border-b text-right">Scholarship Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">TS EAMCET Rank 1-1000</td>
                        <td className="py-2 px-4 border-b text-right">100% tuition fee waiver</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">TS EAMCET Rank 1001-2000</td>
                        <td className="py-2 px-4 border-b text-right">75% tuition fee waiver</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">TS EAMCET Rank 2001-5000</td>
                        <td className="py-2 px-4 border-b text-right">50% tuition fee waiver</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">JEE Main (All India Rank) &lt; 10000</td>
                        <td className="py-2 px-4 border-b text-right">100% tuition fee waiver</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="border-l-4 border-iare-blue pl-4">
                  <h3 className="text-xl font-medium mb-2">Government Scholarships</h3>
                  <p className="text-gray-700 mb-3">
                    Students can avail various government scholarships based on their category, income, and academic performance.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li><span className="font-medium">Fee Reimbursement Scheme:</span> For SC, ST, BC, EBC, Minorities, and Physically Challenged students whose annual family income is less than ₹2 lakhs</li>
                    <li><span className="font-medium">Central Sector Scholarship Scheme:</span> For students who are in the top 20 percentile in their qualifying examination</li>
                    <li><span className="font-medium">Prime Minister's Scholarship Scheme:</span> For children of ex-servicemen</li>
                    <li><span className="font-medium">AICTE Pragati Scholarship:</span> For girl students pursuing technical education</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-iare-blue pl-4">
                  <h3 className="text-xl font-medium mb-2">Institutional Scholarships</h3>
                  <p className="text-gray-700 mb-3">
                    IARE offers various institutional scholarships to support deserving students.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li><span className="font-medium">Chairman's Scholarship:</span> For academically brilliant students with financial constraints</li>
                    <li><span className="font-medium">Sports Scholarship:</span> For students who excel in sports at state and national levels</li>
                    <li><span className="font-medium">Alumni Scholarship:</span> Funded by IARE alumni for deserving students</li>
                    <li><span className="font-medium">Girl Child Scholarship:</span> To promote higher education among girl students</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 border border-gray-200 rounded-md p-4">
                <h3 className="text-lg font-medium mb-2">How to Apply for Scholarships</h3>
                <p className="text-gray-700 mb-3">
                  To apply for any of the above scholarships, students need to follow these steps:
                </p>
                <ol className="list-decimal pl-5 text-gray-700 space-y-2">
                  <li>Download the scholarship application form from the institute website</li>
                  <li>Fill the application form with all necessary details</li>
                  <li>Attach the required documents as mentioned in the form</li>
                  <li>Submit the completed application form to the scholarship cell of the institute</li>
                  <li>Application for government scholarships should be submitted through the respective government portals</li>
                </ol>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Contact for Scholarship Information</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="bg-white border border-gray-200 rounded-md p-4 flex-1">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Users className="h-5 w-5 text-iare-blue mr-2" />
                      Scholarship Cell
                    </h4>
                    <p className="text-gray-700 text-sm mb-2">
                      For queries related to institutional scholarships and merit scholarships.
                    </p>
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 text-iare-blue mr-2" />
                      <span>+91 9876543210</span>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-md p-4 flex-1">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Mail className="h-5 w-5 text-iare-blue mr-2" />
                      Email Contact
                    </h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Send your scholarship related queries to:
                    </p>
                    <div className="text-sm">
                      <a href="mailto:scholarships@iare.ac.in" className="text-iare-blue hover:underline">
                        scholarships@iare.ac.in
                      </a>
                    </div>
                  </div>
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

export default AdmissionsPage;
