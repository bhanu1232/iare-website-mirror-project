
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home, CheckCircle2, Calendar, Clock, User, MapPin } from 'lucide-react';

const PlacementsTrainingPage = () => {
  const trainingPrograms = [
    {
      title: "Aptitude Training",
      description: "Comprehensive training on quantitative aptitude, logical reasoning, and verbal ability to help students excel in company aptitude tests.",
      duration: "60 hours",
      year: "Pre-final year",
      outcomes: [
        "Enhanced problem-solving skills",
        "Improved speed and accuracy in solving aptitude questions",
        "Better logical reasoning abilities",
        "Improved verbal and comprehension skills"
      ]
    },
    {
      title: "Technical Training",
      description: "Domain-specific technical training to strengthen students' core technical knowledge and prepare them for technical interviews.",
      duration: "80 hours",
      year: "Pre-final & Final year",
      outcomes: [
        "Strengthened core technical concepts",
        "Improved coding and problem-solving skills",
        "Better understanding of data structures and algorithms",
        "Enhanced project development capabilities"
      ]
    },
    {
      title: "Soft Skills Training",
      description: "Training on communication skills, presentation skills, group discussion techniques, and interpersonal skills.",
      duration: "40 hours",
      year: "Pre-final & Final year",
      outcomes: [
        "Improved communication and presentation skills",
        "Enhanced group discussion techniques",
        "Better interpersonal and team-working abilities",
        "Increased confidence in expressing ideas"
      ]
    },
    {
      title: "Mock Interviews",
      description: "Simulated interview sessions conducted by industry experts and alumni to provide students with real interview experience.",
      duration: "30 hours",
      year: "Final year",
      outcomes: [
        "Practical interview experience",
        "Feedback on strengths and areas for improvement",
        "Reduced interview anxiety",
        "Improved performance in actual interviews"
      ]
    }
  ];

  const upcomingWorkshops = [
    {
      title: "Resume Building Workshop",
      date: "July 15, 2025",
      time: "10:00 AM - 1:00 PM",
      venue: "Seminar Hall 1",
      speaker: "Ms. Priya Sharma, HR Manager, TCS"
    },
    {
      title: "Technical Interview Preparation",
      date: "July 22, 2025",
      time: "2:00 PM - 5:00 PM",
      venue: "Seminar Hall 2",
      speaker: "Mr. Rahul Mehta, Technical Director, Infosys"
    },
    {
      title: "Group Discussion Techniques",
      date: "July 29, 2025",
      time: "10:00 AM - 1:00 PM",
      venue: "Seminar Hall 1",
      speaker: "Dr. Ankit Gupta, Soft Skills Trainer"
    },
    {
      title: "HR Interview Strategies",
      date: "August 5, 2025",
      time: "2:00 PM - 5:00 PM",
      venue: "Seminar Hall 2",
      speaker: "Ms. Sunita Reddy, HR Director, Wipro"
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
              <BreadcrumbLink href="/placements">Placements</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/placements/training">Training Programs</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-3xl font-bold text-iare-blue mb-6">Training Programs</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-iare-blue mb-4">Our Approach to Training</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            At IARE, we believe that a well-structured training program is essential for our students 
            to succeed in the competitive job market. Our comprehensive training approach is designed 
            to enhance both technical and soft skills, preparing students for various stages of the 
            recruitment process.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            The Training and Placement Cell works closely with industry experts, alumni, and 
            faculty members to design and deliver effective training programs. These programs 
            start from the pre-final year and continue throughout the final year, ensuring that 
            students are well-prepared by the time companies visit for campus recruitment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-6">Training Programs</h2>
              
              <div className="space-y-8">
                {trainingPrograms.map((program, index) => (
                  <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                    <h3 className="text-xl font-medium text-iare-blue mb-3">{program.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{program.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-700">
                        <Clock className="h-4 w-4 mr-1 text-iare-blue" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <User className="h-4 w-4 mr-1 text-iare-blue" />
                        <span>{program.year} students</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Learning Outcomes</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {program.outcomes.map((outcome, oIndex) => (
                          <li key={oIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-iare-blue mb-4">Upcoming Workshops</h2>
              
              <div className="space-y-4">
                {upcomingWorkshops.map((workshop, index) => (
                  <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                    <h3 className="font-medium text-gray-800 mb-2">{workshop.title}</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="h-4 w-4 mr-1 text-iare-blue" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Clock className="h-4 w-4 mr-1 text-iare-blue" />
                        <span>{workshop.time}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin className="h-4 w-4 mr-1 text-iare-blue" />
                        <span>{workshop.venue}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <User className="h-4 w-4 mr-1 text-iare-blue" />
                        <span>{workshop.speaker}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-iare-blue mb-4">Resources</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Online Resources</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-iare-blue mr-2">•</span>
                      <span>E-learning platform for aptitude practice</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-iare-blue mr-2">•</span>
                      <span>Video tutorials on technical subjects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-iare-blue mr-2">•</span>
                      <span>Mock test portal for self-assessment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-iare-blue mr-2">•</span>
                      <span>Resume templates and guidelines</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Library Resources</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-iare-blue mr-2">•</span>
                      <span>Books on aptitude and reasoning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-iare-blue mr-2">•</span>
                      <span>Technical reference materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-iare-blue mr-2">•</span>
                      <span>Interview preparation guides</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-iare-blue mr-2">•</span>
                      <span>Digital resource access</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Career Counseling</h3>
                  <p className="text-gray-700 text-sm">
                    Individual career counseling sessions are available for students to discuss 
                    their career aspirations, strengths, and areas for improvement. Students can 
                    schedule appointments with career counselors at the placement cell.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-iare-blue mb-4">Training Schedule</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            The training programs are scheduled throughout the academic year, ensuring that 
            students receive adequate preparation before the placement season begins. The 
            schedule is designed to minimize conflict with academic activities while providing 
            sufficient time for skill development.
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold text-gray-700">Semester</th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold text-gray-700">Activities</th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold text-gray-700">Duration</th>
                  <th className="py-3 px-4 text-left border-b border-gray-200 font-semibold text-gray-700">Focus Areas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-200">Semester 5</td>
                  <td className="py-3 px-4 border-b border-gray-200">Basic Aptitude Training</td>
                  <td className="py-3 px-4 border-b border-gray-200">20 hours</td>
                  <td className="py-3 px-4 border-b border-gray-200">Quantitative Aptitude, Logical Reasoning</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 border-b border-gray-200">Semester 6</td>
                  <td className="py-3 px-4 border-b border-gray-200">Technical Training, Advanced Aptitude, Basic Soft Skills</td>
                  <td className="py-3 px-4 border-b border-gray-200">60 hours</td>
                  <td className="py-3 px-4 border-b border-gray-200">Technical Skills, Verbal Ability, Communication Skills</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-200">Summer Break</td>
                  <td className="py-3 px-4 border-b border-gray-200">Internship, Online Training</td>
                  <td className="py-3 px-4 border-b border-gray-200">Varies</td>
                  <td className="py-3 px-4 border-b border-gray-200">Practical Experience, Industry Exposure</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 border-b border-gray-200">Semester 7</td>
                  <td className="py-3 px-4 border-b border-gray-200">Advanced Technical Training, GD & PI Training, Resume Building</td>
                  <td className="py-3 px-4 border-b border-gray-200">80 hours</td>
                  <td className="py-3 px-4 border-b border-gray-200">Domain-specific Skills, Group Discussion, Personal Interview</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-200">Semester 8</td>
                  <td className="py-3 px-4 border-b border-gray-200">Mock Interviews, Company-specific Preparation</td>
                  <td className="py-3 px-4 border-b border-gray-200">40 hours</td>
                  <td className="py-3 px-4 border-b border-gray-200">Interview Skills, Company-specific Requirements</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PlacementsTrainingPage;
