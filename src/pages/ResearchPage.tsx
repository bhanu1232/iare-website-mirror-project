
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home, BookOpen, Flask, Award, FileText } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ResearchPage = () => {
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
              <BreadcrumbLink href="/research">Research</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-3xl font-bold text-iare-blue mb-6">Research at IARE</h1>
        
        <Tabs defaultValue="centers">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="centers">Research Centers</TabsTrigger>
            <TabsTrigger value="publications">Publications</TabsTrigger>
            <TabsTrigger value="patents">Patents</TabsTrigger>
            <TabsTrigger value="projects">Funded Projects</TabsTrigger>
          </TabsList>
          
          <TabsContent value="centers" className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Research Centers of Excellence</h2>
              <p className="text-gray-700 mb-6">
                IARE has established several Centers of Excellence to promote research and innovation in various domains. These centers provide state-of-the-art facilities and infrastructure to support cutting-edge research by faculty and students.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResearchCenterCard 
                  title="Center for Artificial Intelligence and Machine Learning" 
                  icon={<BookOpen className="h-10 w-10 text-iare-blue" />}
                  description="Focuses on developing intelligent systems, deep learning algorithms, computer vision, and natural language processing applications."
                  areas={["Deep Learning", "Computer Vision", "Natural Language Processing", "Reinforcement Learning"]}
                />
                
                <ResearchCenterCard 
                  title="Center for IoT and Embedded Systems" 
                  icon={<Flask className="h-10 w-10 text-iare-blue" />}
                  description="Works on developing IoT solutions, embedded systems, and their applications in various domains like healthcare, agriculture, and smart cities."
                  areas={["IoT Architectures", "Embedded Systems", "Sensor Networks", "Edge Computing"]}
                />
                
                <ResearchCenterCard 
                  title="Center for VLSI and Nanotechnology" 
                  icon={<Award className="h-10 w-10 text-iare-blue" />}
                  description="Focuses on research in VLSI design, microelectronics, nanoelectronics, and semiconductor technologies."
                  areas={["VLSI Design", "Microelectronics", "Nanoelectronics", "Semiconductor Devices"]}
                />
                
                <ResearchCenterCard 
                  title="Center for Robotics and Automation" 
                  icon={<FileText className="h-10 w-10 text-iare-blue" />}
                  description="Conducts research in robotics, automation, mechatronics, and their applications in industrial and service sectors."
                  areas={["Industrial Robotics", "Service Robots", "Automation", "Mechatronics"]}
                />
                
                <ResearchCenterCard 
                  title="Center for Renewable Energy" 
                  icon={<BookOpen className="h-10 w-10 text-iare-blue" />}
                  description="Works on renewable energy sources, energy conservation, and sustainable technologies."
                  areas={["Solar Energy", "Wind Energy", "Energy Storage", "Smart Grid"]}
                />
                
                <ResearchCenterCard 
                  title="Center for Data Science and Big Data Analytics" 
                  icon={<Flask className="h-10 w-10 text-iare-blue" />}
                  description="Focuses on research in data science, big data analytics, data mining, and their applications in various domains."
                  areas={["Data Mining", "Predictive Analytics", "Big Data Infrastructure", "Data Visualization"]}
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="publications" className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Research Publications</h2>
              <p className="text-gray-700 mb-6">
                IARE has a strong research culture with faculty and students publishing their research in reputed international journals and conferences. Below are some of the recent publications from our institute.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-iare-blue mb-3">Publication Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <div className="font-medium mb-1">SCI/SCOPUS Indexed Journals</div>
                    <div className="text-3xl font-bold text-iare-blue">280+</div>
                    <div className="text-sm text-gray-600">Publications in last 3 years</div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <div className="font-medium mb-1">International Conferences</div>
                    <div className="text-3xl font-bold text-iare-blue">150+</div>
                    <div className="text-sm text-gray-600">Publications in last 3 years</div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <div className="font-medium mb-1">Citation Count</div>
                    <div className="text-3xl font-bold text-iare-blue">5000+</div>
                    <div className="text-sm text-gray-600">Total citations</div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-iare-blue mb-3">Recent Journal Publications</h3>
                <div className="space-y-4">
                  <Publication 
                    title="A Novel Approach for Sentiment Analysis Using Deep Learning Techniques" 
                    authors="Kumar, A., Sharma, S., Reddy, P."
                    journal="IEEE Transactions on Neural Networks and Learning Systems"
                    year="2023"
                    doi="10.1109/TNNLS.2023.1234567"
                  />
                  
                  <Publication 
                    title="Energy-Efficient Routing Protocol for IoT-Based Smart Grids" 
                    authors="Rao, V., Raman, D., Singh, K."
                    journal="International Journal of Sensor Networks"
                    year="2023"
                    doi="10.1016/j.ijsnet.2023.789012"
                  />
                  
                  <Publication 
                    title="Multi-Objective Optimization of Manufacturing Processes Using Evolutionary Algorithms" 
                    authors="Sharma, R., Gupta, S., Reddy, C."
                    journal="Journal of Manufacturing Systems"
                    year="2022"
                    doi="10.1016/j.jmsy.2022.345678"
                  />
                  
                  <Publication 
                    title="Secure Authentication Protocol for IoT Devices Using Blockchain Technology" 
                    authors="Prasad, N., Kumar, L., Verma, S."
                    journal="IEEE Internet of Things Journal"
                    year="2022"
                    doi="10.1109/JIOT.2022.9876543"
                  />
                  
                  <Publication 
                    title="Design and Analysis of Low-Power VLSI Circuits for Biomedical Applications" 
                    authors="Patil, M., Reddy, N., Johnson, P."
                    journal="Microelectronics Journal"
                    year="2022"
                    doi="10.1016/j.mejo.2022.234567"
                  />
                </div>
                
                <div className="mt-4 text-right">
                  <a href="#" className="text-iare-blue hover:underline text-sm">View All Publications</a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-iare-blue mb-3">Research Collaborations</h3>
                <p className="text-gray-700 mb-4">
                  IARE has established research collaborations with several national and international universities, research institutions, and industry partners to promote collaborative research and knowledge exchange.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200 text-center">
                    <div className="font-medium">University of California</div>
                    <div className="text-xs text-gray-600">USA</div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200 text-center">
                    <div className="font-medium">Technical University of Munich</div>
                    <div className="text-xs text-gray-600">Germany</div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200 text-center">
                    <div className="font-medium">Nanyang Technological University</div>
                    <div className="text-xs text-gray-600">Singapore</div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200 text-center">
                    <div className="font-medium">Indian Institute of Science</div>
                    <div className="text-xs text-gray-600">India</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="patents" className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Patents and Intellectual Property</h2>
              <p className="text-gray-700 mb-6">
                IARE encourages faculty and students to convert their innovative research into patents and intellectual property. The institute has an Intellectual Property Rights (IPR) Cell that provides guidance and support for filing patents.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-iare-blue mb-2">45+</div>
                  <div className="font-medium">Patents Filed</div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-iare-blue mb-2">18</div>
                  <div className="font-medium">Patents Granted</div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-iare-blue mb-2">12</div>
                  <div className="font-medium">Commercialized Patents</div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-iare-blue mb-3">Recent Patents</h3>
                <div className="space-y-4">
                  <Patent 
                    title="Smart Security System with Real-time Threat Detection using AI" 
                    inventors="Dr. Suresh Kumar, Dr. Ravi Shankar"
                    number="IN202141023456"
                    status="Granted"
                    year="2022"
                  />
                  
                  <Patent 
                    title="IoT-Based Precision Agriculture Monitoring System" 
                    inventors="Dr. Priya Sharma, Dr. Kiran Reddy"
                    number="IN202141078901"
                    status="Filed"
                    year="2021"
                  />
                  
                  <Patent 
                    title="Energy Efficient Routing Protocol for Wireless Sensor Networks" 
                    inventors="Dr. Venkat Rao, Dr. Deepak Sharma"
                    number="IN202041056789"
                    status="Granted"
                    year="2021"
                  />
                  
                  <Patent 
                    title="Blockchain-Based Secure Data Sharing in Healthcare" 
                    inventors="Dr. Rohit Verma, Dr. Sheela Desai"
                    number="IN202041023456"
                    status="Granted"
                    year="2020"
                  />
                  
                  <Patent 
                    title="Low-Cost Water Quality Monitoring System" 
                    inventors="Dr. Rajesh Kumar, Prof. Neeraj Singh"
                    number="IN201941034567"
                    status="Granted"
                    year="2020"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-iare-blue mb-3">Intellectual Property Rights (IPR) Cell</h3>
                <p className="text-gray-700 mb-4">
                  The IPR Cell at IARE provides comprehensive support for protecting intellectual property created by faculty and students. The cell offers the following services:
                </p>
                
                <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                  <li>Awareness programs on intellectual property rights</li>
                  <li>Technical and legal assistance for patent filing</li>
                  <li>Support for patent search and drafting</li>
                  <li>Guidance for commercialization of patents</li>
                  <li>Training on intellectual property management</li>
                </ul>
                
                <p className="text-gray-700">
                  For more information about the IPR Cell and patent filing process, please contact:
                  <a href="mailto:ipr@iare.ac.in" className="text-iare-blue hover:underline ml-2">ipr@iare.ac.in</a>
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="projects" className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Funded Research Projects</h2>
              <p className="text-gray-700 mb-6">
                IARE has secured several funded research projects from various government and non-government funding agencies. These projects contribute significantly to the research ecosystem of the institute.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-iare-blue mb-2">₹12+ Cr</div>
                  <div className="font-medium">Total Project Funding</div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-iare-blue mb-2">25+</div>
                  <div className="font-medium">Ongoing Projects</div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-iare-blue mb-2">40+</div>
                  <div className="font-medium">Completed Projects</div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-iare-blue mb-3">Major Funding Agencies</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200 text-center">
                    <div className="font-medium">DST</div>
                    <div className="text-xs text-gray-600">Dept. of Science & Technology</div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200 text-center">
                    <div className="font-medium">SERB</div>
                    <div className="text-xs text-gray-600">Science & Engineering Research Board</div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200 text-center">
                    <div className="font-medium">AICTE</div>
                    <div className="text-xs text-gray-600">All India Council for Technical Education</div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200 text-center">
                    <div className="font-medium">UGC</div>
                    <div className="text-xs text-gray-600">University Grants Commission</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-iare-blue mb-3">Significant Funded Projects</h3>
                <div className="space-y-4">
                  <FundedProject 
                    title="Development of AI-based Smart Grid Management System" 
                    investigators="Dr. Venkat Rao, Dr. Srikanth Reddy"
                    agency="DST"
                    amount="₹1.2 Crores"
                    duration="2021-2024"
                  />
                  
                  <FundedProject 
                    title="IoT-Based Environmental Monitoring System for Smart Cities" 
                    investigators="Dr. Priya Sharma, Dr. Rahul Verma"
                    agency="AICTE"
                    amount="₹25 Lakhs"
                    duration="2022-2024"
                  />
                  
                  <FundedProject 
                    title="Blockchain Technology for Secure Healthcare Data Management" 
                    investigators="Dr. Suresh Kumar, Dr. Neha Gupta"
                    agency="SERB"
                    amount="₹35 Lakhs"
                    duration="2022-2025"
                  />
                  
                  <FundedProject 
                    title="Design and Development of Low-Cost Prosthetic Limbs using 3D Printing" 
                    investigators="Dr. Rajesh Sharma, Dr. Vinay Kumar"
                    agency="DST"
                    amount="₹45 Lakhs"
                    duration="2021-2023"
                  />
                  
                  <FundedProject 
                    title="Natural Language Processing for Regional Indian Languages" 
                    investigators="Dr. Deepa Reddy, Dr. Prakash Singh"
                    agency="UGC"
                    amount="₹18 Lakhs"
                    duration="2022-2024"
                  />
                </div>
                
                <div className="mt-4 text-right">
                  <a href="#" className="text-iare-blue hover:underline text-sm">View All Projects</a>
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

// Research Center Card Component
const ResearchCenterCard = ({ title, icon, description, areas }: { title: string, icon: React.ReactNode, description: string, areas: string[] }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start mb-3">
        <div className="mr-3">{icon}</div>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <p className="text-gray-700 text-sm mb-3">{description}</p>
      <div>
        <h4 className="font-medium text-sm mb-2">Research Areas:</h4>
        <div className="flex flex-wrap gap-2">
          {areas.map((area, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Publication Component
const Publication = ({ title, authors, journal, year, doi }: { title: string, authors: string, journal: string, year: string, doi: string }) => {
  return (
    <div className="border-b border-gray-200 pb-3">
      <h4 className="font-medium mb-1">{title}</h4>
      <p className="text-sm text-gray-700 mb-1">{authors}</p>
      <div className="flex flex-wrap justify-between text-xs text-gray-600">
        <span>{journal}, {year}</span>
        <span>DOI: {doi}</span>
      </div>
    </div>
  );
};

// Patent Component
const Patent = ({ title, inventors, number, status, year }: { title: string, inventors: string, number: string, status: string, year: string }) => {
  return (
    <div className="border-b border-gray-200 pb-3">
      <h4 className="font-medium mb-1">{title}</h4>
      <p className="text-sm text-gray-700 mb-1">Inventors: {inventors}</p>
      <div className="flex flex-wrap justify-between text-xs text-gray-600">
        <span>Patent No: {number}</span>
        <span className={status === "Granted" ? "text-green-600 font-medium" : "text-orange-500 font-medium"}>
          {status}, {year}
        </span>
      </div>
    </div>
  );
};

// Funded Project Component
const FundedProject = ({ title, investigators, agency, amount, duration }: { title: string, investigators: string, agency: string, amount: string, duration: string }) => {
  return (
    <div className="border-b border-gray-200 pb-3">
      <h4 className="font-medium mb-1">{title}</h4>
      <p className="text-sm text-gray-700 mb-1">Principal Investigators: {investigators}</p>
      <div className="flex flex-wrap justify-between text-xs text-gray-600">
        <span>Funding Agency: {agency}</span>
        <span>Amount: {amount}</span>
        <span>Duration: {duration}</span>
      </div>
    </div>
  );
};

export default ResearchPage;
