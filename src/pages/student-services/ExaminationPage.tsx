
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap } from 'lucide-react';

const ExaminationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Banner */}
      <div className="bg-gradient-to-r from-iare-blue to-iare-darkblue py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Examination</h1>
          <p className="text-lg">Examination procedures, regulations and results</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm mb-6">
                <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full bg-iare-lightgray">
                  <GraduationCap className="h-10 w-10 text-iare-blue" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#exam-schedule" className="text-iare-blue hover:underline">Exam Schedule</a>
                  </li>
                  <li>
                    <a href="#evaluation" className="text-iare-blue hover:underline">Evaluation Process</a>
                  </li>
                  <li>
                    <a href="#regulations" className="text-iare-blue hover:underline">Exam Regulations</a>
                  </li>
                  <li>
                    <a href="#results" className="text-iare-blue hover:underline">Results</a>
                  </li>
                  <li>
                    <a href="#revaluation" className="text-iare-blue hover:underline">Revaluation</a>
                  </li>
                </ul>
              </div>
              
              <div className="bg-iare-blue text-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Contact Exam Section</h3>
                <p className="mb-4">For any queries related to examinations, please contact:</p>
                <p className="mb-2"><strong>Controller of Examinations:</strong><br />Dr. K. Srinivas</p>
                <p className="mb-2"><strong>Email:</strong><br />examcell@iare.ac.in</p>
                <p><strong>Phone:</strong><br />+91 40 2914 5555</p>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8" id="exam-schedule">
                <h2 className="text-2xl font-bold mb-4">Examination Schedule</h2>
                <p className="mb-4">
                  The academic year consists of two semesters, and examinations are conducted at the end of each semester. 
                  The examination schedule is announced at least 30 days before the commencement of examinations.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300 mt-4">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">Semester</th>
                        <th className="border border-gray-300 px-4 py-2">Exam Period</th>
                        <th className="border border-gray-300 px-4 py-2">Results</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Odd Semester (I, III, V, VII)</td>
                        <td className="border border-gray-300 px-4 py-2">November - December</td>
                        <td className="border border-gray-300 px-4 py-2">January</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Even Semester (II, IV, VI, VIII)</td>
                        <td className="border border-gray-300 px-4 py-2">April - May</td>
                        <td className="border border-gray-300 px-4 py-2">June</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8" id="evaluation">
                <h2 className="text-2xl font-bold mb-4">Evaluation Process</h2>
                <p className="mb-4">
                  The evaluation process consists of continuous internal assessment and semester-end examinations.
                </p>
                <h3 className="text-xl font-semibold mt-4 mb-2">Continuous Internal Assessment (40%)</h3>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Two mid-semester examinations (25 marks each, best of two considered)</li>
                  <li>Assignments, quizzes, and class participation</li>
                  <li>Laboratory work and records</li>
                </ul>
                <h3 className="text-xl font-semibold mt-4 mb-2">Semester-End Examination (60%)</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Written examination of 3 hours duration</li>
                  <li>Covers the entire syllabus</li>
                  <li>Minimum 40% marks required to pass</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8" id="regulations">
                <h2 className="text-2xl font-bold mb-4">Examination Regulations</h2>
                <p className="mb-4">
                  All students must adhere to the following examination regulations:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Students must carry their hall ticket and college ID card to the examination hall.</li>
                  <li>Students should be present in the examination hall 15 minutes before the commencement of the examination.</li>
                  <li>Use of mobile phones or any electronic gadgets is strictly prohibited.</li>
                  <li>Students found indulging in malpractice will be debarred from the examination.</li>
                  <li>Students must maintain silence in the examination hall.</li>
                  <li>No student shall be permitted to leave the examination hall before the expiry of 90 minutes from the commencement of the examination.</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8" id="results">
                <h2 className="text-2xl font-bold mb-4">Results</h2>
                <p className="mb-4">
                  The examination results are usually declared within 3-4 weeks after the conclusion of examinations. Students can access their results through the college website using their registration number.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Grading System</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2">Grade</th>
                          <th className="border border-gray-300 px-4 py-2">Grade Points</th>
                          <th className="border border-gray-300 px-4 py-2">Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">O (Outstanding)</td>
                          <td className="border border-gray-300 px-4 py-2">10</td>
                          <td className="border border-gray-300 px-4 py-2">90-100</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">A+ (Excellent)</td>
                          <td className="border border-gray-300 px-4 py-2">9</td>
                          <td className="border border-gray-300 px-4 py-2">80-89</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">A (Very Good)</td>
                          <td className="border border-gray-300 px-4 py-2">8</td>
                          <td className="border border-gray-300 px-4 py-2">70-79</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">B+ (Good)</td>
                          <td className="border border-gray-300 px-4 py-2">7</td>
                          <td className="border border-gray-300 px-4 py-2">65-69</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">B (Above Average)</td>
                          <td className="border border-gray-300 px-4 py-2">6</td>
                          <td className="border border-gray-300 px-4 py-2">60-64</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">C (Average)</td>
                          <td className="border border-gray-300 px-4 py-2">5</td>
                          <td className="border border-gray-300 px-4 py-2">50-59</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">P (Pass)</td>
                          <td className="border border-gray-300 px-4 py-2">4</td>
                          <td className="border border-gray-300 px-4 py-2">40-49</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">F (Fail)</td>
                          <td className="border border-gray-300 px-4 py-2">0</td>
                          <td className="border border-gray-300 px-4 py-2">&lt;40</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6" id="revaluation">
                <h2 className="text-2xl font-bold mb-4">Revaluation</h2>
                <p className="mb-4">
                  Students who are not satisfied with their results can apply for revaluation within 15 days from the date of declaration of results. The application for revaluation should be submitted to the examination section along with the prescribed fee.
                </p>
                <h3 className="text-xl font-semibold mt-4 mb-2">Revaluation Process:</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Submit the application form available on the college website.</li>
                  <li>Pay the revaluation fee as prescribed.</li>
                  <li>The papers will be reevaluated by subject experts.</li>
                  <li>The results of revaluation will be announced within 15 days.</li>
                  <li>If there is a change in grade, the fee will be refunded.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ExaminationPage;
