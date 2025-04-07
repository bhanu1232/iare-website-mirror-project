
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Bus, Map, Phone, Clock, Calendar, ShieldCheck } from 'lucide-react';

const TransportationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Banner */}
      <div className="bg-gradient-to-r from-iare-blue to-iare-darkblue py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Transportation</h1>
          <p className="text-lg">Safe and convenient transportation services for students and staff</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow py-12">
        <div className="container mx-auto px-4">
          
          {/* Overview Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Bus className="h-6 w-6 mr-2 text-iare-blue" />
              Transport Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  IARE provides comprehensive transportation services to ensure safe and convenient commuting for students 
                  and staff. Our fleet of buses operates on various routes covering major areas of Hyderabad and surrounding 
                  regions, making it easy for everyone to access the campus.
                </p>
                <p>
                  The transportation service is managed by the Transport Department, which ensures that buses are well-maintained, 
                  follow schedules strictly, and adhere to all safety regulations. The service is available for both day scholars 
                  and faculty members on a semester or annual subscription basis.
                </p>
              </div>
              <div>
                <img 
                  src="https://www.iare.ac.in/sites/default/files/iare%20buses.jpeg" 
                  alt="IARE Bus Fleet" 
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
          
          {/* Transport Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full bg-iare-lightgray">
                <Bus className="h-8 w-8 text-iare-blue" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Fleet Strength</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Total Buses</span>
                  <span className="font-semibold">45+</span>
                </li>
                <li className="flex justify-between">
                  <span>Seating Capacity per Bus</span>
                  <span className="font-semibold">54 Seats</span>
                </li>
                <li className="flex justify-between">
                  <span>Routes Covered</span>
                  <span className="font-semibold">30+</span>
                </li>
                <li className="flex justify-between">
                  <span>Total Passengers</span>
                  <span className="font-semibold">2000+</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full bg-iare-lightgray">
                <ShieldCheck className="h-8 w-8 text-iare-blue" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Safety Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                  <span>GPS tracking system</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                  <span>Speed governors installed</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                  <span>CCTV cameras in buses</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                  <span>First aid kits</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                  <span>Fire extinguishers</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-iare-blue mr-2">•</span>
                  <span>Regular maintenance checks</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full bg-iare-lightgray">
                <Clock className="h-8 w-8 text-iare-blue" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Service Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Morning Pick-up</span>
                  <span className="font-semibold">6:00 AM - 9:00 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Evening Drop</span>
                  <span className="font-semibold">4:00 PM - 6:30 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Weekend Service</span>
                  <span className="font-semibold">As per schedule</span>
                </li>
                <li className="flex justify-between">
                  <span>Special Events</span>
                  <span className="font-semibold">On request</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bus Routes */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Map className="h-6 w-6 mr-2 text-iare-blue" />
              Bus Routes & Schedules
            </h2>
            <p className="mb-6">
              IARE buses operate on multiple routes covering major areas of Hyderabad and surrounding regions. The routes are 
              designed to provide maximum coverage and convenience to students and staff.
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Route No.</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Route</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Starting Point</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Starting Time</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Arrival at Campus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Route 1</td>
                    <td className="border border-gray-300 px-4 py-2">Secunderabad - Bowenpally - Balanagar - Jeedimetla - Campus</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">Secunderabad Station</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">6:30 AM</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">8:30 AM</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Route 2</td>
                    <td className="border border-gray-300 px-4 py-2">Mehdipatnam - Ameerpet - SR Nagar - Kukatpally - Campus</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">Mehdipatnam Bus Stop</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">6:15 AM</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">8:30 AM</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Route 3</td>
                    <td className="border border-gray-300 px-4 py-2">Dilsukhnagar - LB Nagar - Uppal - ECIL - Kompally - Campus</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">Dilsukhnagar Bus Stop</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">6:00 AM</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">8:30 AM</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Route 4</td>
                    <td className="border border-gray-300 px-4 py-2">Charminar - Afzalgunj - Koti - Paradise - Suchitra - Campus</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">Charminar Bus Stop</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">6:10 AM</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">8:30 AM</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Route 5</td>
                    <td className="border border-gray-300 px-4 py-2">KPHB - Miyapur - Bachupally - Nizampet - Campus</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">KPHB Colony</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">7:00 AM</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">8:30 AM</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-600 italic">
                * This is a sample of the routes. For the complete list of routes and detailed time schedules, please download the 
                transport schedule from the student portal or contact the transport office.
              </p>
            </div>
          </div>
          
          {/* Transport Fees */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Calendar className="h-6 w-6 mr-2 text-iare-blue" />
              Transport Fees (2023-24)
            </h2>
            <p className="mb-6">
              The transport fee varies based on the distance and route. The fee is to be paid at the beginning of each semester 
              or annually as per the student's preference.
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Zone</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Areas Covered</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Distance from Campus</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Annual Fee</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Semester Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Zone A</td>
                    <td className="border border-gray-300 px-4 py-2">Medchal, Kompally, Suchitra, Jeedimetla</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">Up to 10 km</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹18,000</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹9,500</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Zone B</td>
                    <td className="border border-gray-300 px-4 py-2">Kukatpally, Balanagar, Nizampet, Bachupally</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">10-20 km</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹22,000</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹11,500</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Zone C</td>
                    <td className="border border-gray-300 px-4 py-2">Secunderabad, Paradise, ECIL, Bowenpally</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">20-30 km</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹26,000</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹13,500</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Zone D</td>
                    <td className="border border-gray-300 px-4 py-2">Ameerpet, SR Nagar, Mehdipatnam, Koti</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">30-40 km</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹30,000</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹15,500</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Zone E</td>
                    <td className="border border-gray-300 px-4 py-2">Dilsukhnagar, LB Nagar, Uppal, Charminar</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">Above 40 km</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹34,000</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">₹17,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 text-sm text-gray-600">
              <p>* The above fees include GST</p>
              <p>* One-time refundable security deposit of ₹2,000 is applicable for new registrations</p>
              <p>* Fees once paid are non-refundable</p>
            </div>
          </div>
          
          {/* Transport Rules */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Transport Rules & Guidelines</h2>
            <p className="mb-4">
              To ensure safe and smooth transportation services, all students using the college transport facility must adhere to the following rules:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">General Rules</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Students must carry their bus pass and college ID card while traveling in the college bus.</li>
                  <li>Students should board and alight from the bus in a disciplined manner.</li>
                  <li>Students should arrive at the designated stop at least 5 minutes before the scheduled time.</li>
                  <li>The bus will not wait for late comers.</li>
                  <li>Change of bus route or stop during the academic year is not permitted unless there is a change in residence.</li>
                  <li>Students are responsible for their personal belongings while traveling on the bus.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Conduct on Bus</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Students should maintain discipline and not cause disturbance to other passengers.</li>
                  <li>Damaging bus property is strictly prohibited. Any damage will be charged to the student responsible.</li>
                  <li>Littering inside the bus is not allowed.</li>
                  <li>Standing on the footboard while the bus is in motion is strictly prohibited.</li>
                  <li>Students should not put their hands or head out of the windows when the bus is in motion.</li>
                  <li>Use of mobile phones for music without headphones is not permitted.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Safety Measures</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>In case of any emergency, students should follow the instructions of the bus driver and conductor.</li>
                  <li>Students should report any safety concerns or misconduct to the transport in-charge immediately.</li>
                  <li>Students are advised to stay seated while the bus is in motion.</li>
                  <li>Boarding or alighting from a moving bus is strictly prohibited.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Administrative Rules</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Transport fee should be paid at the beginning of each semester or annually as per the selected option.</li>
                  <li>Bus pass should be renewed at the beginning of each academic year.</li>
                  <li>Loss of bus pass should be reported immediately and a duplicate pass can be obtained by paying the prescribed fee.</li>
                  <li>Route changes or stop changes must be applied for at the transport office with valid reasons.</li>
                  <li>Any complaints regarding transport facilities should be made to the transport in-charge in writing.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Transport Administration */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Phone className="h-6 w-6 mr-2 text-iare-blue" />
              Transport Contact Information
            </h2>
            <p className="mb-6">
              For any queries related to transportation services, please contact the Transport Department.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-3">Transport Officer</h3>
                <p className="mb-1"><strong>Mr. Suresh Kumar</strong></p>
                <p className="mb-1 text-sm">Transport In-charge</p>
                <p className="mb-1 text-sm">Email: transport@iare.ac.in</p>
                <p className="text-sm">Phone: +91 40 2914 5590</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-3">Transport Office</h3>
                <p className="mb-3 text-sm">
                  The Transport Office is located near the main gate of the campus.
                </p>
                <p className="mb-1 text-sm"><strong>Office Hours:</strong></p>
                <p className="mb-3 text-sm">Monday to Saturday: 9:00 AM - 5:00 PM</p>
                <p className="text-sm">
                  For bus pass renewal, route change requests, and other transport-related queries.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-3">Emergency Contact</h3>
                <p className="mb-3 text-sm">
                  In case of any emergency related to transportation:
                </p>
                <p className="mb-1 text-sm"><strong>Control Room:</strong></p>
                <p className="mb-3 text-sm">Phone: +91 40 2914 5599 (24x7)</p>
                <p className="text-sm">
                  For real-time bus tracking and information about bus delays, please use the IARE Transport App.
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

export default TransportationPage;
