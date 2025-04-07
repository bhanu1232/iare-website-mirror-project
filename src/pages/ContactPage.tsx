
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home, MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
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
              <BreadcrumbLink href="/contact">Contact Us</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-3xl font-bold text-iare-blue mb-6">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-iare-blue mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-6">
              Have questions about admissions, programs, or any other inquiry? Fill out the form below and our team will get back to you as soon as possible.
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-iare-blue focus:border-iare-blue"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-iare-blue focus:border-iare-blue"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-iare-blue focus:border-iare-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject*
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-iare-blue focus:border-iare-blue"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="program">Program Information</option>
                    <option value="scholarship">Scholarship Information</option>
                    <option value="career">Career Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-iare-blue focus:border-iare-blue"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="bg-iare-blue hover:bg-blue-700">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex">
                  <MapPin className="h-5 w-5 text-iare-blue mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-700">
                      Institute of Aeronautical Engineering,<br />
                      Dundigal, Hyderabad,<br />
                      Telangana - 500043, India
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <Phone className="h-5 w-5 text-iare-blue mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-700">+91 9876543210</p>
                    <p className="text-gray-700">040-12345678</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Mail className="h-5 w-5 text-iare-blue mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-700">info@iare.ac.in</p>
                    <p className="text-gray-700">admissions@iare.ac.in</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Clock className="h-5 w-5 text-iare-blue mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Working Hours</h3>
                    <p className="text-gray-700">Monday - Saturday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-iare-blue mb-4">Location Map</h2>
              <div className="rounded-md overflow-hidden h-72">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3967961486387!2d78.42829261744385!3d17.49747710000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f06e86d0b33%3A0x582a67a2a3ca7190!2sInstitute%20of%20Aeronautical%20Engineering!5e0!3m2!1sen!2sin!4v1642777117718!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy"
                  title="IARE Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-2xl font-semibold text-iare-blue mb-4">Important Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Admissions Office</h3>
              <div className="space-y-2 text-sm">
                <div className="flex">
                  <Phone className="h-4 w-4 text-iare-blue mr-2" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex">
                  <Mail className="h-4 w-4 text-iare-blue mr-2" />
                  <span>admissions@iare.ac.in</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Examination Cell</h3>
              <div className="space-y-2 text-sm">
                <div className="flex">
                  <Phone className="h-4 w-4 text-iare-blue mr-2" />
                  <span>+91 9876543211</span>
                </div>
                <div className="flex">
                  <Mail className="h-4 w-4 text-iare-blue mr-2" />
                  <span>examcell@iare.ac.in</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Placement Cell</h3>
              <div className="space-y-2 text-sm">
                <div className="flex">
                  <Phone className="h-4 w-4 text-iare-blue mr-2" />
                  <span>+91 9876543212</span>
                </div>
                <div className="flex">
                  <Mail className="h-4 w-4 text-iare-blue mr-2" />
                  <span>placements@iare.ac.in</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Accounts Office</h3>
              <div className="space-y-2 text-sm">
                <div className="flex">
                  <Phone className="h-4 w-4 text-iare-blue mr-2" />
                  <span>+91 9876543213</span>
                </div>
                <div className="flex">
                  <Mail className="h-4 w-4 text-iare-blue mr-2" />
                  <span>accounts@iare.ac.in</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Hostel Administration</h3>
              <div className="space-y-2 text-sm">
                <div className="flex">
                  <Phone className="h-4 w-4 text-iare-blue mr-2" />
                  <span>+91 9876543214</span>
                </div>
                <div className="flex">
                  <Mail className="h-4 w-4 text-iare-blue mr-2" />
                  <span>hostel@iare.ac.in</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Principal's Office</h3>
              <div className="space-y-2 text-sm">
                <div className="flex">
                  <Phone className="h-4 w-4 text-iare-blue mr-2" />
                  <span>+91 9876543215</span>
                </div>
                <div className="flex">
                  <Mail className="h-4 w-4 text-iare-blue mr-2" />
                  <span>principal@iare.ac.in</span>
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

export default ContactPage;
