
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, Coffee, Utensils, Wifi, Users, ShieldCheck } from 'lucide-react';

const HostelPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Banner */}
      <div className="bg-gradient-to-r from-iare-blue to-iare-darkblue py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Hostel Facilities</h1>
          <p className="text-lg">Comfortable and safe accommodation for students</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow py-12">
        <div className="container mx-auto px-4">
          
          {/* Overview Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Home className="h-6 w-6 mr-2 text-iare-blue" />
              Hostel Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  IARE provides comfortable and secure hostel accommodation for both boys and girls separately. The hostels are located 
                  within the campus, ensuring easy access to academic buildings, library, and other facilities. The hostels are designed 
                  to provide a conducive environment for academic pursuits while ensuring a comfortable living experience.
                </p>
                <p>
                  Our hostels are equipped with modern amenities and are managed by experienced wardens who ensure discipline and the 
                  well-being of the residents. The hostel management committee regularly monitors the quality of accommodation, food, 
                  and other services to maintain high standards.
                </p>
              </div>
              <div>
                <img 
                  src="https://www.iare.ac.in/sites/default/files/IARE%20HOSTEL%20BUILDING.jpg" 
                  alt="IARE Hostel Building" 
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
          
          {/* Hostel Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold mb-4">Boys' Hostel</h3>
              <div className="space-y-4">
                <div className="flex">
                  <span className="font-semibold w-40">Capacity:</span>
                  <span>600 students</span>
                </div>
                <div className="flex">
                  <span className="font-semibold w-40">Room Types:</span>
                  <span>2-Seater, 3-Seater, 4-Seater</span>
                </div>
                <div className="flex">
                  <span className="font-semibold w-40">Blocks:</span>
                  <span>3 Blocks (A, B, C)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold w-40">Features:</span>
                  <ul className="list-disc list-inside">
                    <li>Attached bathrooms</li>
                    <li>Hot water facility</li>
                    <li>Wi-Fi connectivity</li>
                    <li>Common rooms with TV</li>
                    <li>Indoor games</li>
                  </ul>
                </div>
                <div className="flex">
                  <span className="font-semibold w-40">Warden:</span>
                  <span>Dr. Ramesh Kumar</span>
                </div>
                <div className="flex">
                  <span className="font-semibold w-40">Contact:</span>
                  <span>boyshostel@iare.ac.in</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold mb-4">Girls' Hostel</h3>
              <div className="space-y-4">
                <div className="flex">
                  <span className="font-semibold w-40">Capacity:</span>
                  <span>400 students</span>
                </div>
                <div className="flex">
                  <span className="font-semibold w-40">Room Types:</span>
                  <span>2-Seater, 3-Seater</span>
                </div>
                <div className="flex">
                  <span className="font-semibold w-40">Blocks:</span>
                  <span>2 Blocks (D, E)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold w-40">Features:</span>
                  <ul className="list-disc list-inside">
                    <li>Attached bathrooms</li>
                    <li>Hot water facility</li>
                    <li>Wi-Fi connectivity</li>
                    <li>Common rooms with TV</li>
                    <li>Indoor games</li>
                  </ul>
                </div>
                <div className="flex">
                  <span className="font-semibold w-40">Warden:</span>
                  <span>Dr. Sunita Rao</span>
                </div>
                <div className="flex">
                  <span className="font-semibold w-40">Contact:</span>
                  <span>girlshostel@iare.ac.in</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Facilities */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Coffee className="h-6 w-6 mr-2 text-iare-blue" />
              Hostel Facilities
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-center mb-3">
                  <Utensils className="h-6 w-6 text-iare-blue mr-3" />
                  <h3 className="text-lg font-semibold">Dining Facility</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Clean and hygienic dining halls with nutritious vegetarian and non-vegetarian meals.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Breakfast, Lunch, Snacks and Dinner</li>
                  <li>Special meals on festivals</li>
                  <li>Dietician-approved menu</li>
                  <li>RO purified drinking water</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-center mb-3">
                  <Wifi className="h-6 w-6 text-iare-blue mr-3" />
                  <h3 className="text-lg font-semibold">Wi-Fi & Internet</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  High-speed internet connectivity throughout the hostel premises.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>24/7 Wi-Fi access</li>
                  <li>100 Mbps fiber-optic connection</li>
                  <li>Limited data allocation per student</li>
                  <li>Technical support available</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-center mb-3">
                  <ShieldCheck className="h-6 w-6 text-iare-blue mr-3" />
                  <h3 className="text-lg font-semibold">Security & Safety</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Round-the-clock security to ensure the safety of all residents.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>24/7 security personnel</li>
                  <li>CCTV surveillance</li>
                  <li>Biometric access control</li>
                  <li>Emergency response team</li>
                  <li>First aid facilities</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-center mb-3">
                  <Users className="h-6 w-6 text-iare-blue mr-3" />
                  <h3 className="text-lg font-semibold">Recreation</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Various recreational facilities to help students relax and rejuvenate.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Common rooms with TV</li>
                  <li>Indoor games (Carrom, Chess, Table Tennis)</li>
                  <li>Outdoor sports facilities</li>
                  <li>Reading room with newspapers & magazines</li>
                  <li>Cultural and recreational activities</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-center mb-3">
                  <Home className="h-6 w-6 text-iare-blue mr-3" />
                  <h3 className="text-lg font-semibold">Accommodation</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Well-furnished rooms with essential amenities for a comfortable stay.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Comfortable beds with mattresses</li>
                  <li>Study tables and chairs</li>
                  <li>Wardrobes for storage</li>
                  <li>Attached bathrooms with hot water</li>
                  <li>Regular cleaning services</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-center mb-3">
                  <ShieldCheck className="h-6 w-6 text-iare-blue mr-3" />
                  <h3 className="text-lg font-semibold">Medical Facility</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  On-campus medical facilities to address health concerns.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>In-house medical room</li>
                  <li>Qualified nurse available</li>
                  <li>Doctor visits on scheduled days</li>
                  <li>Ambulance facility for emergencies</li>
                  <li>Tie-up with nearby hospitals</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Hostel Fees */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Hostel Fees (Academic Year 2023-24)</h2>
            <p className="mb-6">
              The hostel fees include accommodation charges, mess charges, and other amenities. The fees are revised annually.
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Particulars</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">2-Seater Room</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">3-Seater Room</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">4-Seater Room</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Hostel Rent (Per Year)</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹60,000</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹50,000</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹45,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Mess Charges (Per Year)</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹45,000</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹45,000</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹45,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Caution Deposit (Refundable, One-time)</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹5,000</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹5,000</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹5,000</td>
                  </tr>
                  <tr className="bg-gray-50 font-semibold">
                    <td className="border border-gray-300 px-4 py-2">Total (First Year)</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹1,10,000</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹1,00,000</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹95,000</td>
                  </tr>
                  <tr className="bg-gray-50 font-semibold">
                    <td className="border border-gray-300 px-4 py-2">Total (Subsequent Years)</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹1,05,000</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹95,000</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹90,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 text-sm text-gray-600">
              <p>* Fees to be paid in two installments (July and December)</p>
              <p>* Electricity charges will be extra based on actual consumption</p>
            </div>
          </div>
          
          {/* Rules and Regulations */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Hostel Rules & Regulations</h2>
            <p className="mb-4">
              To maintain discipline and ensure a conducive environment for all residents, the following rules and regulations must be observed:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">General Rules</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Ragging in any form is strictly prohibited and is a punishable offense as per law.</li>
                  <li>Consumption of alcohol, smoking, and use of narcotic substances is strictly prohibited.</li>
                  <li>Students must maintain cleanliness in their rooms and hostel premises.</li>
                  <li>Damaging hostel property is strictly prohibited. Repair costs will be recovered from the student.</li>
                  <li>Playing loud music or creating disturbance is not allowed.</li>
                  <li>Students should be inside their respective hostels by 9:30 PM.</li>
                  <li>Visitors/guests are allowed only in the visitor's area during specified hours.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Attendance & Leave Rules</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Daily attendance will be taken by the warden at 9:30 PM.</li>
                  <li>Students must take prior permission from the warden for leave.</li>
                  <li>Overnight leave will be granted only with written permission from parents/guardians.</li>
                  <li>Students going on leave must enter details in the movement register.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Mess Rules</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Students must follow the mess timings strictly.</li>
                  <li>Wastage of food is not permitted.</li>
                  <li>Mess utensils should not be taken to rooms.</li>
                  <li>Suggestions regarding food quality can be given to the mess committee.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Disciplinary Actions</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Violation of hostel rules may lead to disciplinary actions including:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Warning</li>
                  <li>Fine</li>
                  <li>Information to parents</li>
                  <li>Suspension from hostel</li>
                  <li>Expulsion from hostel</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Hostel Administration */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Hostel Administration</h2>
            <p className="mb-6">
              The hostel is administered by a dedicated team to ensure smooth functioning and student welfare.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-3">Chief Warden</h3>
                <p className="mb-1"><strong>Dr. K. Venkatesh</strong></p>
                <p className="mb-1 text-sm">Dean, Student Affairs</p>
                <p className="mb-1 text-sm">Email: chiefwarden@iare.ac.in</p>
                <p className="text-sm">Phone: +91 40 2914 5555</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-3">Boys' Hostel Warden</h3>
                <p className="mb-1"><strong>Dr. Ramesh Kumar</strong></p>
                <p className="mb-1 text-sm">Associate Professor, ME Dept.</p>
                <p className="mb-1 text-sm">Email: boyshostel@iare.ac.in</p>
                <p className="text-sm">Phone: +91 40 2914 5556</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-3">Girls' Hostel Warden</h3>
                <p className="mb-1"><strong>Dr. Sunita Rao</strong></p>
                <p className="mb-1 text-sm">Associate Professor, ECE Dept.</p>
                <p className="mb-1 text-sm">Email: girlshostel@iare.ac.in</p>
                <p className="text-sm">Phone: +91 40 2914 5557</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Hostel Committee</h3>
              <p className="mb-4 text-sm">
                The Hostel Committee comprises faculty members and student representatives who work together to 
                address hostel-related issues and improve facilities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Faculty Members</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Dr. K. Venkatesh (Chairman)</li>
                    <li>Dr. Ramesh Kumar (Boys' Hostel Warden)</li>
                    <li>Dr. Sunita Rao (Girls' Hostel Warden)</li>
                    <li>Mr. Suresh Babu (Admin Officer)</li>
                    <li>Mr. Ravi Kumar (Mess Manager)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Student Representatives</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Two representatives from each year (Boys' Hostel)</li>
                    <li>Two representatives from each year (Girls' Hostel)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HostelPage;
