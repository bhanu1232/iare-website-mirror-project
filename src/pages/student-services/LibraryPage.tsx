
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, Clock, Search, BookMarked, Users, Bookmark } from 'lucide-react';

const LibraryPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Banner */}
      <div className="bg-gradient-to-r from-iare-blue to-iare-darkblue py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Library</h1>
          <p className="text-lg">A center for learning, research and knowledge dissemination</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow py-12">
        <div className="container mx-auto px-4">
          {/* Library Overview */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Central Library</h2>
                <p className="mb-4">
                  The Central Library at IARE is a state-of-the-art facility that serves as the primary information resource center 
                  supporting the teaching, learning, and research activities of the Institute. It houses a vast collection of books, 
                  journals, e-resources, and other reading materials across various disciplines.
                </p>
                <p>
                  With a seating capacity of over 500 students, the library provides a conducive environment for academic pursuit 
                  and intellectual growth. It is equipped with modern facilities including a digital library, e-learning resources, 
                  and internet access.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://www.iare.ac.in/sites/default/files/central_library_0.png" 
                  alt="IARE Central Library" 
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
          
          {/* Library Collections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full bg-iare-lightgray">
                <BookMarked className="h-8 w-8 text-iare-blue" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Collections</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Books</span>
                  <span className="font-semibold">50,000+</span>
                </li>
                <li className="flex justify-between">
                  <span>Journals (Print)</span>
                  <span className="font-semibold">200+</span>
                </li>
                <li className="flex justify-between">
                  <span>E-Journals</span>
                  <span className="font-semibold">5,000+</span>
                </li>
                <li className="flex justify-between">
                  <span>E-Books</span>
                  <span className="font-semibold">10,000+</span>
                </li>
                <li className="flex justify-between">
                  <span>Project Reports</span>
                  <span className="font-semibold">3,000+</span>
                </li>
                <li className="flex justify-between">
                  <span>Magazines</span>
                  <span className="font-semibold">50+</span>
                </li>
                <li className="flex justify-between">
                  <span>Newspapers</span>
                  <span className="font-semibold">15+</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full bg-iare-lightgray">
                <Clock className="h-8 w-8 text-iare-blue" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Library Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">8:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </li>
                <li className="flex justify-between">
                  <span>During Exams</span>
                  <span className="font-semibold">8:00 AM - 10:00 PM</span>
                </li>
                <li className="mt-4 text-sm text-gray-600">
                  * Library remains closed on all declared holidays
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full bg-iare-lightgray">
                <Bookmark className="h-8 w-8 text-iare-blue" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Borrowing Privileges</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>UG Students</span>
                  <span className="font-semibold">4 Books / 15 Days</span>
                </li>
                <li className="flex justify-between">
                  <span>PG Students</span>
                  <span className="font-semibold">6 Books / 15 Days</span>
                </li>
                <li className="flex justify-between">
                  <span>PhD Scholars</span>
                  <span className="font-semibold">8 Books / 30 Days</span>
                </li>
                <li className="flex justify-between">
                  <span>Faculty</span>
                  <span className="font-semibold">10 Books / 30 Days</span>
                </li>
                <li className="flex justify-between">
                  <span>Staff</span>
                  <span className="font-semibold">4 Books / 15 Days</span>
                </li>
                <li className="mt-4 text-sm text-gray-600">
                  * Late fee: Rs. 2 per day per book
                </li>
              </ul>
            </div>
          </div>
          
          {/* E-Resources */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Digital Resources</h2>
            <p className="mb-4">
              The library provides access to a wide range of e-resources to support academic and research activities. 
              These resources can be accessed from anywhere within the campus network.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-3">E-Journals & Databases</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>IEEE Xplore Digital Library</li>
                  <li>EBSCO Engineering Source</li>
                  <li>ScienceDirect</li>
                  <li>Springer Link</li>
                  <li>ASME Digital Collection</li>
                  <li>ACM Digital Library</li>
                  <li>ProQuest Engineering Collection</li>
                  <li>J-GATE Engineering & Technology</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-3">E-Books & Learning Platforms</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>McGraw Hill E-Books</li>
                  <li>Pearson E-Books</li>
                  <li>NPTEL Video Lectures</li>
                  <li>Coursera for Campus</li>
                  <li>Swayam MOOCs</li>
                  <li>MIT OpenCourseWare</li>
                  <li>World eBook Library</li>
                  <li>National Digital Library of India</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Library Services */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Library Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Search className="h-5 w-5 text-iare-blue mr-2" />
                  <h3 className="text-lg font-semibold">Reference Service</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Assistance in finding information, using resources, and conducting research.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <BookOpen className="h-5 w-5 text-iare-blue mr-2" />
                  <h3 className="text-lg font-semibold">Reading Room</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Quiet study space with seating capacity for 500+ students.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Users className="h-5 w-5 text-iare-blue mr-2" />
                  <h3 className="text-lg font-semibold">Research Support</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Specialized services for researchers including literature review and citation analysis.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <BookMarked className="h-5 w-5 text-iare-blue mr-2" />
                  <h3 className="text-lg font-semibold">Book Bank</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Semester-wise textbooks available for economically disadvantaged students.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Search className="h-5 w-5 text-iare-blue mr-2" />
                  <h3 className="text-lg font-semibold">OPAC</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Online Public Access Catalog for searching library collections.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <BookOpen className="h-5 w-5 text-iare-blue mr-2" />
                  <h3 className="text-lg font-semibold">Reprography</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Photocopying and printing services available at nominal charges.
                </p>
              </div>
            </div>
          </div>
          
          {/* Library Rules */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Library Rules & Regulations</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Entry to the library is permitted only with a valid ID card.</li>
              <li>Complete silence should be maintained in the library.</li>
              <li>Mobile phones should be kept in silent mode or switched off.</li>
              <li>Bags, food items, and personal books are not allowed inside the library.</li>
              <li>Library materials must be handled with care. Marking, folding pages, or damaging library property is strictly prohibited.</li>
              <li>Books should be returned on or before the due date to avoid fines.</li>
              <li>Reference books, journals, and newspapers should not be taken out of the library.</li>
              <li>Library staff reserves the right to inspect materials being taken out of the library.</li>
              <li>Users are responsible for any damage or loss of library materials issued to them.</li>
              <li>Internet facilities in the library should be used only for academic purposes.</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LibraryPage;
