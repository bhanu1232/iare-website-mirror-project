
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const PlacementsStatisticsPage = () => {
  // Sample data for the department-wise placement chart
  const departmentData = [
    { name: 'CSE', placed: 95, total: 100 },
    { name: 'IT', placed: 92, total: 98 },
    { name: 'ECE', placed: 88, total: 100 },
    { name: 'MECH', placed: 82, total: 100 },
    { name: 'CIVIL', placed: 75, total: 90 },
    { name: 'EEE', placed: 80, total: 90 },
    { name: 'AERO', placed: 85, total: 95 },
  ];

  // Sample data for the year-wise placement chart
  const yearData = [
    { name: '2018-19', placements: 550 },
    { name: '2019-20', placements: 620 },
    { name: '2020-21', placements: 580 },
    { name: '2021-22', placements: 650 },
    { name: '2022-23', placements: 720 },
  ];

  // Sample data for sector-wise placement chart
  const sectorData = [
    { name: 'IT/Software', value: 45 },
    { name: 'Core Engineering', value: 25 },
    { name: 'Banking/Finance', value: 12 },
    { name: 'Consulting', value: 8 },
    { name: 'Manufacturing', value: 6 },
    { name: 'Others', value: 4 },
  ];

  // Sample data for package range chart
  const packageData = [
    { range: '< 4 LPA', count: 150 },
    { range: '4-6 LPA', count: 280 },
    { range: '6-8 LPA', count: 200 },
    { range: '8-10 LPA', count: 120 },
    { range: '10-12 LPA', count: 80 },
    { range: '> 12 LPA', count: 50 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28EFF', '#FF6B6B'];

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
              <BreadcrumbLink href="/placements/statistics">Statistics</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-3xl font-bold text-iare-blue mb-6">Placement Statistics</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-iare-blue mb-4">Department-wise Placements (2022-23)</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={departmentData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="placed" name="Students Placed" fill="#0088FE" />
                  <Bar dataKey="total" name="Total Students" fill="#FFBB28" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-iare-blue mb-4">Year-wise Placements</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={yearData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="placements" name="Total Placements" fill="#00C49F" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-iare-blue mb-4">Sector-wise Placements (%)</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sectorData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {sectorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-iare-blue mb-4">Package Range Distribution</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={packageData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="range" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" name="Number of Students" fill="#FF8042" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-iare-blue mb-4">Key Placement Statistics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4 bg-gray-50 text-center">
              <div className="text-3xl font-bold text-iare-blue mb-2">880+</div>
              <p className="text-gray-700">Total offers in 2022-23</p>
            </div>
            
            <div className="border rounded-lg p-4 bg-gray-50 text-center">
              <div className="text-3xl font-bold text-iare-blue mb-2">₹6.2 LPA</div>
              <p className="text-gray-700">Average package</p>
            </div>
            
            <div className="border rounded-lg p-4 bg-gray-50 text-center">
              <div className="text-3xl font-bold text-iare-blue mb-2">₹18 LPA</div>
              <p className="text-gray-700">Highest package</p>
            </div>
            
            <div className="border rounded-lg p-4 bg-gray-50 text-center">
              <div className="text-3xl font-bold text-iare-blue mb-2">105+</div>
              <p className="text-gray-700">Companies visited</p>
            </div>
            
            <div className="border rounded-lg p-4 bg-gray-50 text-center">
              <div className="text-3xl font-bold text-iare-blue mb-2">120+</div>
              <p className="text-gray-700">Students with multiple offers</p>
            </div>
            
            <div className="border rounded-lg p-4 bg-gray-50 text-center">
              <div className="text-3xl font-bold text-iare-blue mb-2">92%</div>
              <p className="text-gray-700">Overall placement rate</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-iare-blue mb-4">Placement Trends</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            The placement statistics at IARE have shown a positive trend over the years, with an 
            increasing number of companies visiting the campus and more students getting placed. 
            The average package has also seen a significant rise, reflecting the quality of 
            education and training provided at the institute.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-iare-blue mb-2">Key Observations</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 leading-relaxed">
                <li>Consistent increase in the number of placement offers year-on-year</li>
                <li>Rising trend in average and maximum salary packages</li>
                <li>Growing number of pre-placement offers through internships</li>
                <li>Increasing diversity in recruiting companies across various sectors</li>
                <li>Higher percentage of students receiving multiple job offers</li>
                <li>Expansion in the number of international placement opportunities</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-iare-blue mb-2">Future Prospects</h3>
              <p className="text-gray-700 leading-relaxed">
                The placement cell continues to strive for better placement outcomes by strengthening 
                industry connections, enhancing student training programs, and adapting to the 
                evolving skill requirements of the corporate world. With the strong foundation 
                already established, we expect the placement statistics to improve further in the 
                coming years.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PlacementsStatisticsPage;
