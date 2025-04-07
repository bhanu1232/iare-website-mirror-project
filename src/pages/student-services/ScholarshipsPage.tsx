
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, FileText, CheckCircle, Calendar, AlertCircle, Info } from 'lucide-react';

const ScholarshipsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Banner */}
      <div className="bg-gradient-to-r from-iare-blue to-iare-darkblue py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Scholarships</h1>
          <p className="text-lg">Financial assistance programs to support academic excellence</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow py-12">
        <div className="container mx-auto px-4">
          
          {/* Overview Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Award className="h-6 w-6 mr-2 text-iare-blue" />
              Scholarship Programs
            </h2>
            <p className="mb-4">
              IARE is committed to providing financial assistance to deserving students through various scholarship programs. 
              These scholarships aim to recognize academic excellence, support economically disadvantaged students, and promote 
              diversity in education.
            </p>
            <p>
              The institute offers both merit-based and need-based scholarships to help students achieve their educational goals 
              without financial constraints. Additionally, students can also avail various government scholarships and other 
              external scholarship opportunities.
            </p>
          </div>
          
          {/* Types of Scholarships */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-iare-blue mr-3" />
                <h3 className="text-xl font-bold">Institute Scholarships</h3>
              </div>
              <p className="mb-4 text-sm text-gray-700">
                Scholarships offered by IARE to recognize and reward academic excellence and support deserving students.
              </p>
              <ul className="space-y-3">
                <li className="border-l-4 border-iare-blue pl-4 py-1">
                  <h4 className="font-semibold">Merit Scholarship</h4>
                  <p className="text-sm text-gray-700">
                    Awarded to students who demonstrate outstanding academic performance in their coursework and examinations.
                  </p>
                </li>
                <li className="border-l-4 border-iare-blue pl-4 py-1">
                  <h4 className="font-semibold">Financial Need Scholarship</h4>
                  <p className="text-sm text-gray-700">
                    Provided to students from economically disadvantaged backgrounds to help them pursue their education.
                  </p>
                </li>
                <li className="border-l-4 border-iare-blue pl-4 py-1">
                  <h4 className="font-semibold">Sports & Cultural Scholarship</h4>
                  <p className="text-sm text-gray-700">
                    Offered to students who excel in sports, cultural activities, and represent the institute at various levels.
                  </p>
                </li>
                <li className="border-l-4 border-iare-blue pl-4 py-1">
                  <h4 className="font-semibold">Sibling Scholarship</h4>
                  <p className="text-sm text-gray-700">
                    Available for students who have siblings studying at IARE, providing financial relief to parents with multiple children in the institute.
                  </p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-iare-blue mr-3" />
                <h3 className="text-xl font-bold">Government Scholarships</h3>
              </div>
              <p className="mb-4 text-sm text-gray-700">
                Scholarships offered by central and state governments to promote education among various sections of society.
              </p>
              <ul className="space-y-3">
                <li className="border-l-4 border-iare-blue pl-4 py-1">
                  <h4 className="font-semibold">State Government Scholarship</h4>
                  <p className="text-sm text-gray-700">
                    Telangana State ePass Scholarship for SC, ST, BC, EBC, Minority, and Disabled students.
                  </p>
                </li>
                <li className="border-l-4 border-iare-blue pl-4 py-1">
                  <h4 className="font-semibold">Central Government Scholarship</h4>
                  <p className="text-sm text-gray-700">
                    Scholarships offered by the Ministry of Social Justice and Empowerment, Ministry of Tribal Affairs, etc.
                  </p>
                </li>
                <li className="border-l-4 border-iare-blue pl-4 py-1">
                  <h4 className="font-semibold">Prime Minister's Scholarship Scheme</h4>
                  <p className="text-sm text-gray-700">
                    For the wards of defense personnel, central armed police forces, and railway protection force.
                  </p>
                </li>
                <li className="border-l-4 border-iare-blue pl-4 py-1">
                  <h4 className="font-semibold">AICTE Pragati & Saksham Scholarship</h4>
                  <p className="text-sm text-gray-700">
                    AICTE scholarships for girl students (Pragati) and differently-abled students (Saksham).
                  </p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Scholarship Details */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Scholarship Details & Eligibility</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Scholarship Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Eligibility Criteria</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Award Amount</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Application Period</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Institute Scholarships */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Merit Scholarship</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="list-disc list-inside text-sm">
                        <li>CGPA of 9.0 or above in the previous academic year</li>
                        <li>No backlogs or disciplinary issues</li>
                        <li>95% attendance</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹25,000 per annum</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">July - August</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Financial Need Scholarship</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="list-disc list-inside text-sm">
                        <li>Family income less than ₹3 lakhs per annum</li>
                        <li>CGPA of 7.0 or above</li>
                        <li>No backlogs</li>
                        <li>90% attendance</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">Up to ₹50,000 per annum</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">July - August</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Sports & Cultural Scholarship</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="list-disc list-inside text-sm">
                        <li>Represented state/national level in sports</li>
                        <li>Won prizes in inter-college cultural competitions</li>
                        <li>CGPA of 6.5 or above</li>
                        <li>Active participation in institute events</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹15,000 - ₹30,000 per annum</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">July - August</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Sibling Scholarship</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="list-disc list-inside text-sm">
                        <li>Two or more siblings studying at IARE simultaneously</li>
                        <li>CGPA of 7.0 or above for both siblings</li>
                        <li>No backlogs or disciplinary issues</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">10% tuition fee waiver</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">At the time of admission</td>
                  </tr>
                  
                  {/* Government Scholarships */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Telangana ePass Scholarship</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="list-disc list-inside text-sm">
                        <li>For SC, ST, BC, EBC, Minority students</li>
                        <li>Family income as per government norms</li>
                        <li>Telangana state domicile</li>
                        <li>80% attendance</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">Full/Partial tuition fee reimbursement</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">As per government notification</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">AICTE Pragati Scholarship</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="list-disc list-inside text-sm">
                        <li>For girl students only</li>
                        <li>Family income less than ₹8 lakhs per annum</li>
                        <li>Admitted to AICTE approved program</li>
                        <li>Only one girl child per family</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹50,000 per annum</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">September - October</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">AICTE Saksham Scholarship</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="list-disc list-inside text-sm">
                        <li>For differently-abled students</li>
                        <li>Disability certificate from competent authority</li>
                        <li>Family income less than ₹8 lakhs per annum</li>
                        <li>Admitted to AICTE approved program</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹50,000 per annum</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">September - October</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Application Process */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2 text-iare-blue" />
              How to Apply
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Institute Scholarships</h3>
                <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700">
                  <li className="pl-2">
                    <span className="font-semibold">Download the Application Form</span>
                    <p className="mt-1 pl-6">
                      Application forms are available on the institute website or at the Scholarship Section of the Administrative Office.
                    </p>
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold">Fill the Application Form</span>
                    <p className="mt-1 pl-6">
                      Complete all sections of the application form and attach the required documents.
                    </p>
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold">Submit the Application</span>
                    <p className="mt-1 pl-6">
                      Submit the completed application form along with supporting documents to the Scholarship Section within the specified deadline.
                    </p>
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold">Verification Process</span>
                    <p className="mt-1 pl-6">
                      Applications are verified by the Scholarship Committee. Shortlisted candidates may be called for an interview.
                    </p>
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold">Scholarship Award</span>
                    <p className="mt-1 pl-6">
                      Selected candidates are notified, and the scholarship amount is credited to their accounts or adjusted against the tuition fee.
                    </p>
                  </li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Government Scholarships</h3>
                <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700">
                  <li className="pl-2">
                    <span className="font-semibold">Register on the Government Portal</span>
                    <p className="mt-1 pl-6">
                      For Telangana ePass, register on the official website (telanganaepass.cgg.gov.in).
                      For AICTE scholarships, register on the AICTE portal.
                    </p>
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold">Fill the Online Application</span>
                    <p className="mt-1 pl-6">
                      Complete the online application form with accurate information and upload the required documents.
                    </p>
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold">Submit the Application</span>
                    <p className="mt-1 pl-6">
                      After submitting the online application, take a printout and submit it to the Scholarship Section along with supporting documents.
                    </p>
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold">Verification by Institute</span>
                    <p className="mt-1 pl-6">
                      The institute verifies the application and forwards it to the concerned government department.
                    </p>
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold">Scholarship Disbursement</span>
                    <p className="mt-1 pl-6">
                      Once approved by the government, the scholarship amount is either credited directly to the student's account or to the institute's account.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          
          {/* Required Documents */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FileText className="h-6 w-6 mr-2 text-iare-blue" />
              Required Documents
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Institute Scholarships</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                  <li>Completed application form</li>
                  <li>Copy of student ID card</li>
                  <li>Previous semester/year grade sheets</li>
                  <li>Passport size photographs (2 copies)</li>
                  <li>For Financial Need Scholarship:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Income certificate of parents</li>
                      <li>Salary slips (if employed) or IT returns</li>
                      <li>Bank statements of parents</li>
                    </ul>
                  </li>
                  <li>For Sports & Cultural Scholarship:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Certificates of achievements</li>
                      <li>Recommendation from sports/cultural coordinator</li>
                    </ul>
                  </li>
                  <li>For Sibling Scholarship:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Proof of sibling relationship</li>
                      <li>ID cards of both siblings</li>
                    </ul>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Government Scholarships</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                  <li>Printout of the online application form</li>
                  <li>Aadhar card copy</li>
                  <li>Income certificate of parents (latest)</li>
                  <li>Caste certificate (for SC/ST/BC scholarships)</li>
                  <li>Domicile/Residence certificate</li>
                  <li>Previous educational certificates</li>
                  <li>Passport size photographs</li>
                  <li>Bank account details (passbook first page copy)</li>
                  <li>Fee receipts of the current academic year</li>
                  <li>Disability certificate (for differently-abled scholarship)</li>
                  <li>Declaration by parents that the applicant is the only girl child (for AICTE Pragati Scholarship)</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Important Dates & Deadlines */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Calendar className="h-6 w-6 mr-2 text-iare-blue" />
              Important Dates & Deadlines (2023-24)
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Scholarship</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Application Start Date</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Application End Date</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Result Announcement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Merit Scholarship</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">July 15, 2023</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">August 15, 2023</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">September 15, 2023</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Financial Need Scholarship</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">July 15, 2023</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">August 15, 2023</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">September 30, 2023</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Sports & Cultural Scholarship</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">July 15, 2023</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">August 15, 2023</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">September 30, 2023</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Telangana ePass Scholarship</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">As per government notification</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">As per government notification</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">As per government notification</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">AICTE Pragati Scholarship</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">September 1, 2023</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">October 31, 2023</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">January 2024</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">AICTE Saksham Scholarship</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">September 1, 2023</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">October 31, 2023</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">January 2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 text-sm text-gray-600 italic">
              * Dates are subject to change. Please check the institute website or scholarship notice board for updates.
            </div>
          </div>
          
          {/* Frequently Asked Questions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <AlertCircle className="h-6 w-6 mr-2 text-iare-blue" />
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold flex items-center">
                  <Info className="h-4 w-4 text-iare-blue mr-2" />
                  Can I apply for multiple scholarships simultaneously?
                </h3>
                <p className="mt-2 text-sm text-gray-700 pl-6">
                  Yes, you can apply for multiple scholarships, but generally, only one scholarship will be awarded. 
                  In case you are eligible for multiple scholarships, the one with the higher benefit will be awarded.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold flex items-center">
                  <Info className="h-4 w-4 text-iare-blue mr-2" />
                  Do I need to apply for the scholarship every year?
                </h3>
                <p className="mt-2 text-sm text-gray-700 pl-6">
                  Yes, most scholarships require annual renewal. You need to apply afresh each academic year and meet the 
                  eligibility criteria to continue receiving the scholarship.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold flex items-center">
                  <Info className="h-4 w-4 text-iare-blue mr-2" />
                  What happens if my academic performance drops after receiving a merit scholarship?
                </h3>
                <p className="mt-2 text-sm text-gray-700 pl-6">
                  Merit scholarships are contingent on maintaining a certain level of academic performance. If your 
                  performance drops below the required CGPA, the scholarship may be withdrawn for the subsequent year.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold flex items-center">
                  <Info className="h-4 w-4 text-iare-blue mr-2" />
                  How and when will the scholarship amount be disbursed?
                </h3>
                <p className="mt-2 text-sm text-gray-700 pl-6">
                  For institute scholarships, the amount is usually adjusted against the tuition fee or credited to the 
                  student's bank account. For government scholarships, the amount is either credited directly to the 
                  student's account or to the institute's account, as per the scholarship scheme.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold flex items-center">
                  <Info className="h-4 w-4 text-iare-blue mr-2" />
                  What should I do if I face issues with the online application for government scholarships?
                </h3>
                <p className="mt-2 text-sm text-gray-700 pl-6">
                  You can contact the Scholarship Section of the institute for assistance. They will help you navigate 
                  through the online application process and resolve any issues you might face.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold flex items-center">
                  <Info className="h-4 w-4 text-iare-blue mr-2" />
                  Are there any scholarships available specifically for girls?
                </h3>
                <p className="mt-2 text-sm text-gray-700 pl-6">
                  Yes, the AICTE Pragati Scholarship is specifically designed for girl students. Additionally, many 
                  government and private organizations offer scholarships exclusively for girl students to promote 
                  gender equality in technical education.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ScholarshipsPage;
