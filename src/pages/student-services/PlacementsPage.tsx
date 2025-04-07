
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Briefcase, Award, BarChart, Users, Building, Calendar } from 'lucide-react';

const PlacementsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Banner */}
      <div className="bg-gradient-to-r from-iare-blue to-iare-darkblue py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Placements</h1>
          <p className="text-lg">Building careers and connecting students with industry opportunities</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow py-12">
        <div className="container mx-auto px-4">
          
          {/* Overview Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-3/5">
                <h2 className="text-2xl font-bold mb-4">Placement Cell</h2>
                <p className="mb-4">
                  The IARE Placement Cell aims to provide a platform for students to showcase their talents and secure 
                  placements in reputed organizations. We foster strong industry-academia partnerships to enhance 
                  employment opportunities for our students.
                </p>
                <p>
                  With a dedicated team of placement officers, we provide comprehensive career guidance, conduct 
                  training programs, organize recruitment drives, and facilitate industry interactions to prepare 
                  students for the professional world.
                </p>
              </div>
              <div className="md:w-2/5">
                <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                  <h3 className="text-xl font-semibold mb-4 text-center">Placement Highlights</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-iare-blue">95%+</div>
                      <div className="text-sm text-gray-600">Placement Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-iare-blue">150+</div>
                      <div className="text-sm text-gray-600">Companies</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-iare-blue">₹42 LPA</div>
                      <div className="text-sm text-gray-600">Highest Package</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-iare-blue">₹8.5 LPA</div>
                      <div className="text-sm text-gray-600">Average Package</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Placement Process */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Placement Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="flex justify-center items-center w-12 h-12 mx-auto mb-4 rounded-full bg-iare-blue text-white">
                  <div className="font-bold text-xl">1</div>
                </div>
                <h3 className="text-lg font-semibold text-center mb-3">Pre-Placement</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="bg-iare-blue h-1.5 w-1.5 rounded-full mt-1.5 mr-2"></span>
                    <span>Resume building workshops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-iare-blue h-1.5 w-1.5 rounded-full mt-1.5 mr-2"></span>
                    <span>Technical and aptitude training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-iare-blue h-1.5 w-1.5 rounded-full mt-1.5 mr-2"></span>
                    <span>Soft skills development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-iare-blue h-1.5 w-1.5 rounded-full mt-1.5 mr-2"></span>
                    <span>Mock interviews and GD sessions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="flex justify-center items-center w-12 h-12 mx-auto mb-4 rounded-full bg-iare-blue text-white">
                  <div className="font-bold text-xl">2</div>
                </div>
                <h3 className="text-lg font-semibold text-center mb-3">During Placement</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="bg-iare-blue h-1.5 w-1.5 rounded-full mt-1.5 mr-2"></span>
                    <span>Pre-placement talks by companies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-iare-blue h-1.5 w-1.5 rounded-full mt-1.5 mr-2"></span>
                    <span>Aptitude tests and technical assessments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-iare-blue h-1.5 w-1.5 rounded-full mt-1.5 mr-2"></span>
                    <span>Group discussions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-iare-blue h-1.5 w-1.5 rounded-full mt-1.5 mr-2"></span>
                    <span>Technical and HR interviews</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="flex justify-center items-center w-12 h-12 mx-auto mb-4 rounded-full bg-iare-blue text-white">
                  <div className="font-bold text-xl">3</div>
                </div>
                <h3 className="text-lg font-semibold text-center mb-3">Post-Placement</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="bg-iare-blue h-1.5 w-1.5 rounded-full mt-1.5 mr-2"></span>
                    <span>Offer letter distribution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-iare-blue h-1.5 w-1.5 rounded-full mt-1.5 mr-2"></span>
                    <span>Pre-joining formalities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-iare-blue h-1.5 w-1.5 rounded-full mt-1.5 mr-2"></span>
                    <span>Industry-specific training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-iare-blue h-1.5 w-1.5 rounded-full mt-1.5 mr-2"></span>
                    <span>Alumni network integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Placement Statistics */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <BarChart className="h-6 w-6 mr-2 text-iare-blue" />
              Placement Statistics
            </h2>
            <p className="mb-6">
              Our consistent placement record demonstrates our commitment to student careers and industry partnerships.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Branch-wise Placement (2023-24)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Department</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Students Placed</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Computer Science</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">242/250</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">96.8%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Information Technology</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">118/120</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">98.3%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Electronics & Communication</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">156/170</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">91.8%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Electrical & Electronics</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">85/95</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">89.5%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Mechanical Engineering</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">110/125</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">88.0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Civil Engineering</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">78/90</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">86.7%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Aeronautical Engineering</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">62/70</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">88.6%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Year-wise Placement Trends</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Placement %</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Avg. CTC</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Highest CTC</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">2023-24</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">95.2%</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">₹8.5 LPA</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">₹42 LPA</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">2022-23</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">93.8%</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">₹7.8 LPA</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">₹38 LPA</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">2021-22</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">91.5%</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">₹7.2 LPA</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">₹35 LPA</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">2020-21</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">89.3%</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">₹6.8 LPA</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">₹32 LPA</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">2019-20</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">87.6%</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">₹6.2 LPA</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">₹28 LPA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          {/* Top Recruiters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Building className="h-6 w-6 mr-2 text-iare-blue" />
              Our Top Recruiters
            </h2>
            <p className="mb-6">
              We are proud to be associated with leading organizations across various industries.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* These would ideally be company logos */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-center h-20">
                <span className="font-semibold">Microsoft</span>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-center h-20">
                <span className="font-semibold">Amazon</span>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-center h-20">
                <span className="font-semibold">Google</span>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-center h-20">
                <span className="font-semibold">TCS</span>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-center h-20">
                <span className="font-semibold">Infosys</span>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-center h-20">
                <span className="font-semibold">Wipro</span>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-center h-20">
                <span className="font-semibold">Accenture</span>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-center h-20">
                <span className="font-semibold">Cognizant</span>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-center h-20">
                <span className="font-semibold">IBM</span>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-center h-20">
                <span className="font-semibold">Capgemini</span>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-center h-20">
                <span className="font-semibold">HCL</span>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-center h-20">
                <span className="font-semibold">Oracle</span>
              </div>
            </div>
          </div>
          
          {/* Training Programs */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Award className="h-6 w-6 mr-2 text-iare-blue" />
              Training Programs
            </h2>
            <p className="mb-6">
              We offer comprehensive training programs to enhance students' employability and prepare them for the industry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                    <span>Programming Languages (Java, Python, C++)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                    <span>Web Development (HTML, CSS, JavaScript)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                    <span>Database Management (SQL, MongoDB)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                    <span>Data Structures and Algorithms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                    <span>Cloud Computing (AWS, Azure)</span>
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold mb-3">Soft Skills</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                    <span>Communication Skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                    <span>Group Discussion Techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                    <span>Interview Preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                    <span>Resume Building</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                    <span>Personality Development</span>
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold mb-3">Aptitude & Reasoning</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                    <span>Quantitative Aptitude</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                    <span>Logical Reasoning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                    <span>Verbal Ability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                    <span>Data Interpretation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                    <span>Competitive Examination Preparation</span>
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-xl font-semibold mb-3">Career Guidance</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                    <span>Industry Awareness Sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                    <span>Career Counseling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                    <span>Higher Education Guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                    <span>Entrepreneurship Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                    <span>Industry Internship Opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Users className="h-6 w-6 mr-2 text-iare-blue" />
              Placement Team
            </h2>
            <p className="mb-6">
              Our dedicated placement team is available to assist students with their career-related queries.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-3">Head of Placements</h3>
                <p className="mb-1"><strong>Dr. Rajesh Kumar</strong></p>
                <p className="mb-1 text-sm">Director, Training & Placements</p>
                <p className="mb-1 text-sm">Email: placements@iare.ac.in</p>
                <p className="text-sm">Phone: +91 40 2914 5678</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-3">Placement Officers</h3>
                <div className="space-y-3">
                  <div>
                    <p className="mb-1"><strong>Mr. Suresh Reddy</strong></p>
                    <p className="text-sm">Placement Officer (IT & CSE)</p>
                  </div>
                  <div>
                    <p className="mb-1"><strong>Ms. Priya Singh</strong></p>
                    <p className="text-sm">Placement Officer (ECE & EEE)</p>
                  </div>
                  <div>
                    <p className="mb-1"><strong>Mr. Anand Kumar</strong></p>
                    <p className="text-sm">Placement Officer (Mech & Civil)</p>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-3">Placement Office</h3>
                <p className="mb-3 text-sm">
                  The Placement Office is located on the Ground Floor of the Administrative Block.
                </p>
                <p className="mb-1 text-sm"><strong>Office Hours:</strong></p>
                <p className="mb-3 text-sm">Monday to Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-sm">
                  Students can visit the Placement Office for any placement-related queries or to schedule appointments with the placement officers.
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

export default PlacementsPage;
