
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home, Users, Calendar, Trophy, Building } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CampusLifePage = () => {
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
              <BreadcrumbLink href="/campus-life">Campus Life</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-3xl font-bold text-iare-blue mb-6">Campus Life</h1>
        
        <Tabs defaultValue="clubs">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="clubs">Clubs</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="sports">Sports</TabsTrigger>
            <TabsTrigger value="facilities">Facilities</TabsTrigger>
          </TabsList>
          
          <TabsContent value="clubs" className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Student Clubs & Organizations</h2>
              <p className="text-gray-700 mb-6">
                At IARE, student clubs and organizations play a vital role in enhancing the overall development of students. These clubs provide a platform for students to showcase their talents, develop leadership skills, and pursue their interests beyond academics.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ClubCard 
                  name="IEEE Student Branch" 
                  icon={<Users className="h-8 w-8 text-blue-600" />}
                  description="The IEEE Student Branch at IARE organizes technical workshops, guest lectures, and competitions to enhance the technical knowledge of students."
                  activities={["Technical Workshops", "Guest Lectures", "Project Competitions", "Paper Presentations"]}
                />
                
                <ClubCard 
                  name="Coding Club" 
                  icon={<Users className="h-8 w-8 text-purple-600" />}
                  description="The Coding Club aims to foster coding culture among students by organizing coding competitions, hackathons, and workshops on various programming languages."
                  activities={["Coding Contests", "Hackathons", "Programming Workshops", "Technical Talks"]}
                />
                
                <ClubCard 
                  name="Robotics Club" 
                  icon={<Users className="h-8 w-8 text-green-600" />}
                  description="The Robotics Club focuses on designing and developing robots for various competitions and applications. The club organizes workshops and training sessions on robotics."
                  activities={["Robot Building", "Competitions", "Workshops", "Technical Projects"]}
                />
                
                <ClubCard 
                  name="Cultural Club" 
                  icon={<Users className="h-8 w-8 text-red-600" />}
                  description="The Cultural Club organizes various cultural events and activities to showcase the talents of students in areas like music, dance, drama, and fine arts."
                  activities={["Music Performances", "Dance Shows", "Drama Productions", "Art Exhibitions"]}
                />
                
                <ClubCard 
                  name="Literary Club" 
                  icon={<Users className="h-8 w-8 text-yellow-600" />}
                  description="The Literary Club provides a platform for students to enhance their communication and literary skills through debates, elocution, and writing competitions."
                  activities={["Debates", "Elocution", "Creative Writing", "Literary Quizzes"]}
                />
                
                <ClubCard 
                  name="Photography Club" 
                  icon={<Users className="h-8 w-8 text-pink-600" />}
                  description="The Photography Club encourages students to pursue photography as a hobby and art form. The club organizes photography competitions, exhibitions, and workshops."
                  activities={["Photo Walks", "Exhibitions", "Workshops", "Competitions"]}
                />
                
                <ClubCard 
                  name="Environment Club" 
                  icon={<Users className="h-8 w-8 text-teal-600" />}
                  description="The Environment Club promotes environmental awareness and sustainability through various activities like plantation drives, awareness campaigns, and seminars."
                  activities={["Plantation Drives", "Awareness Campaigns", "Waste Management", "Seminars"]}
                />
                
                <ClubCard 
                  name="Entrepreneurship Cell" 
                  icon={<Users className="h-8 w-8 text-indigo-600" />}
                  description="The Entrepreneurship Cell (E-Cell) fosters entrepreneurial thinking and startup culture among students through workshops, seminars, and mentoring sessions."
                  activities={["Startup Mentoring", "Business Plan Competitions", "Workshops", "Industry Interactions"]}
                />
                
                <ClubCard 
                  name="NSS Unit" 
                  icon={<Users className="h-8 w-8 text-orange-600" />}
                  description="The National Service Scheme (NSS) unit at IARE organizes various social service activities and camps to develop a sense of social responsibility among students."
                  activities={["Blood Donation", "Village Adoption", "Community Service", "Camps"]}
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="events" className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Events & Celebrations</h2>
              <p className="text-gray-700 mb-6">
                IARE hosts a wide range of events throughout the academic year, including technical fests, cultural festivals, seminars, workshops, and celebrations of various national and international days.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-iare-blue mb-3">Annual Events</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <EventCard 
                    name="Aerofiesta" 
                    icon={<Calendar className="h-8 w-8 text-blue-600" />}
                    description="Aerofiesta is the annual technical fest of IARE that showcases the technical talents and innovations of students through various competitions, exhibitions, and workshops."
                    date="February"
                  />
                  
                  <EventCard 
                    name="Euphoria" 
                    icon={<Calendar className="h-8 w-8 text-purple-600" />}
                    description="Euphoria is the annual cultural fest of IARE that provides a platform for students to showcase their cultural talents in various events like music, dance, drama, and fine arts."
                    date="March"
                  />
                  
                  <EventCard 
                    name="Innovate" 
                    icon={<Calendar className="h-8 w-8 text-green-600" />}
                    description="Innovate is an annual project exhibition where students showcase their innovative projects and prototypes developed as part of their academic curriculum or extracurricular activities."
                    date="April"
                  />
                  
                  <EventCard 
                    name="Confluence" 
                    icon={<Calendar className="h-8 w-8 text-red-600" />}
                    description="Confluence is an annual alumni meet that brings together the alumni and current students for networking, knowledge sharing, and career guidance."
                    date="December"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-iare-blue mb-3">Upcoming Events</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="bg-iare-blue text-white p-2 rounded-md text-center mr-4 flex-shrink-0 w-16">
                        <div className="text-xl font-bold">15</div>
                        <div className="text-xs">July</div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Orientation Program for Freshers</h4>
                        <p className="text-sm text-gray-600 mb-2">Introduction to college life, departments, and facilities for new students</p>
                        <div className="text-xs text-gray-500">Venue: Main Auditorium | Time: 10:00 AM</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="bg-iare-blue text-white p-2 rounded-md text-center mr-4 flex-shrink-0 w-16">
                        <div className="text-xl font-bold">22</div>
                        <div className="text-xs">July</div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Workshop on Artificial Intelligence</h4>
                        <p className="text-sm text-gray-600 mb-2">Hands-on workshop on the latest trends and applications in AI</p>
                        <div className="text-xs text-gray-500">Venue: Seminar Hall | Time: 2:00 PM</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="bg-iare-blue text-white p-2 rounded-md text-center mr-4 flex-shrink-0 w-16">
                        <div className="text-xl font-bold">5</div>
                        <div className="text-xs">August</div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Industry Expert Talk</h4>
                        <p className="text-sm text-gray-600 mb-2">Talk on "Future of Work in the Digital Era" by industry experts</p>
                        <div className="text-xs text-gray-500">Venue: Conference Hall | Time: 11:00 AM</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="bg-iare-blue text-white p-2 rounded-md text-center mr-4 flex-shrink-0 w-16">
                        <div className="text-xl font-bold">15</div>
                        <div className="text-xs">August</div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Independence Day Celebrations</h4>
                        <p className="text-sm text-gray-600 mb-2">Flag hoisting ceremony followed by cultural performances</p>
                        <div className="text-xs text-gray-500">Venue: College Ground | Time: 9:00 AM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="sports" className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Sports & Athletics</h2>
              <p className="text-gray-700 mb-6">
                IARE has excellent sports facilities and encourages students to participate in various sports activities. The college has produced many talented athletes who have represented the institute at various inter-collegiate, university, and national level competitions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-200 h-48"></div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">Indoor Sports Facilities</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Table Tennis</li>
                      <li>Badminton Courts</li>
                      <li>Chess</li>
                      <li>Carrom</li>
                      <li>Gym with Modern Equipment</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-200 h-48"></div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">Outdoor Sports Facilities</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Cricket Ground</li>
                      <li>Football Field</li>
                      <li>Basketball Court</li>
                      <li>Volleyball Court</li>
                      <li>Tennis Court</li>
                      <li>Athletic Track</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-iare-blue mb-3">Annual Sports Events</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center">
                    <Trophy className="h-6 w-6 text-yellow-500 mr-3" />
                    <div>
                      <h4 className="font-medium">Annual Sports Meet</h4>
                      <p className="text-sm text-gray-600">January</p>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center">
                    <Trophy className="h-6 w-6 text-yellow-500 mr-3" />
                    <div>
                      <h4 className="font-medium">Inter-Departmental Tournament</h4>
                      <p className="text-sm text-gray-600">September</p>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center">
                    <Trophy className="h-6 w-6 text-yellow-500 mr-3" />
                    <div>
                      <h4 className="font-medium">Invitational Sports Festival</h4>
                      <p className="text-sm text-gray-600">November</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-iare-blue mb-3">Sports Achievements</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-500 pl-4 py-1">
                    <h4 className="font-medium">University Champions in Cricket (2022-23)</h4>
                    <p className="text-sm text-gray-600">The IARE cricket team won the inter-collegiate cricket tournament organized by JNTU Hyderabad.</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4 py-1">
                    <h4 className="font-medium">Runners-up in Basketball (2022-23)</h4>
                    <p className="text-sm text-gray-600">The IARE basketball team secured the second position in the inter-collegiate basketball tournament.</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4 py-1">
                    <h4 className="font-medium">Gold Medal in Athletics (2022-23)</h4>
                    <p className="text-sm text-gray-600">Rahul Sharma (B.Tech CSE) won the gold medal in 100m sprint at the university level athletics meet.</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4 py-1">
                    <h4 className="font-medium">Silver Medal in Table Tennis (2022-23)</h4>
                    <p className="text-sm text-gray-600">Priya Reddy (B.Tech ECE) secured the silver medal in women's singles table tennis at the state level tournament.</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="facilities" className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Campus Facilities</h2>
              <p className="text-gray-700 mb-6">
                IARE provides excellent infrastructure and facilities to ensure a comfortable and conducive environment for learning and overall development of students.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FacilityCard 
                  name="Library" 
                  icon={<Building className="h-8 w-8 text-blue-600" />}
                  description="The central library has a vast collection of books, journals, magazines, and e-resources. It also has a spacious reading hall and digital library section."
                  features={["50,000+ Books", "5000+ E-Journals", "Digital Library", "Reading Halls"]}
                />
                
                <FacilityCard 
                  name="Hostels" 
                  icon={<Building className="h-8 w-8 text-green-600" />}
                  description="Separate hostels for boys and girls with modern amenities, hygienic mess, and 24/7 security to ensure a comfortable stay for students."
                  features={["AC & Non-AC Rooms", "Hygienic Mess", "24/7 Security", "Medical Facility"]}
                />
                
                <FacilityCard 
                  name="Canteen" 
                  icon={<Building className="h-8 w-8 text-orange-600" />}
                  description="The college canteen serves a variety of nutritious and hygienic food options at affordable prices. It has a spacious dining area and is open throughout the day."
                  features={["Diverse Menu", "Hygienic Food", "Affordable Prices", "Spacious Dining"]}
                />
                
                <FacilityCard 
                  name="Laboratories" 
                  icon={<Building className="h-8 w-8 text-purple-600" />}
                  description="Well-equipped laboratories for all departments with modern equipment and tools to facilitate practical learning and research activities."
                  features={["Modern Equipment", "Spacious Labs", "Qualified Lab Staff", "Research Facilities"]}
                />
                
                <FacilityCard 
                  name="Wi-Fi Campus" 
                  icon={<Building className="h-8 w-8 text-red-600" />}
                  description="The entire campus is Wi-Fi enabled with high-speed internet connectivity to facilitate easy access to online resources and digital learning."
                  features={["High-Speed Internet", "Campus-wide Coverage", "Secure Network", "24/7 Availability"]}
                />
                
                <FacilityCard 
                  name="Auditorium" 
                  icon={<Building className="h-8 w-8 text-indigo-600" />}
                  description="A state-of-the-art auditorium with advanced audiovisual facilities to host various events, seminars, conferences, and cultural programs."
                  features={["1000+ Seating", "Advanced AV System", "Air-Conditioned", "Stage with Lighting"]}
                />
                
                <FacilityCard 
                  name="Medical Facility" 
                  icon={<Building className="h-8 w-8 text-pink-600" />}
                  description="An on-campus medical center with qualified medical staff to provide first-aid and basic medical care to students and staff in case of emergencies."
                  features={["Qualified Doctor", "First-Aid Facility", "Ambulance Service", "Regular Health Camps"]}
                />
                
                <FacilityCard 
                  name="Transport" 
                  icon={<Building className="h-8 w-8 text-yellow-600" />}
                  description="The college provides comfortable and safe transport facilities for students and staff from various parts of the city to the campus and back."
                  features={["Fleet of Buses", "City-wide Coverage", "Experienced Drivers", "GPS Tracking"]}
                />
                
                <FacilityCard 
                  name="Bank & ATM" 
                  icon={<Building className="h-8 w-8 text-teal-600" />}
                  description="An on-campus bank branch and ATM facility to cater to the banking needs of students and staff, making financial transactions convenient."
                  features={["Bank Branch", "ATM Facility", "Student Accounts", "Easy Transactions"]}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

// Club Card Component
const ClubCard = ({ name, icon, description, activities }: { name: string, icon: React.ReactNode, description: string, activities: string[] }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-3">
        {icon}
        <h3 className="text-lg font-medium ml-3">{name}</h3>
      </div>
      <p className="text-gray-700 text-sm mb-3">{description}</p>
      <div>
        <h4 className="font-medium text-sm mb-2">Activities:</h4>
        <div className="flex flex-wrap gap-2">
          {activities.map((activity, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
              {activity}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Event Card Component
const EventCard = ({ name, icon, description, date }: { name: string, icon: React.ReactNode, description: string, date: string }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-3">
        {icon}
        <div className="ml-3">
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
      </div>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};

// Facility Card Component
const FacilityCard = ({ name, icon, description, features }: { name: string, icon: React.ReactNode, description: string, features: string[] }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-3">
        {icon}
        <h3 className="text-lg font-medium ml-3">{name}</h3>
      </div>
      <p className="text-gray-700 text-sm mb-3">{description}</p>
      <div>
        <h4 className="font-medium text-sm mb-2">Features:</h4>
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampusLifePage;
