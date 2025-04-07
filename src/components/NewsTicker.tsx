
import React from 'react';
import { Bell } from 'lucide-react';

const news = [
  "Admissions open for 2023-24 academic year",
  "NAAC A++ accreditation achieved with 3.65 CGPA",
  "Placement drive for 2023 batch - Over 90% students placed",
  "IARE faculty publishes research paper in prestigious international journal",
  "New R&D center inaugurated in collaboration with industry partners"
];

const NewsTicker = () => {
  return (
    <div className="bg-iare-red text-white py-3 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center">
        <div className="flex-shrink-0 flex items-center mr-4">
          <Bell className="h-5 w-5 mr-2" />
          <span className="font-bold">ANNOUNCEMENTS</span>
        </div>
        <div className="overflow-hidden relative w-full">
          <div className="animate-marquee whitespace-nowrap inline-block">
            {news.map((item, index) => (
              <span key={index} className="mx-4">• {item}</span>
            ))}
            {news.map((item, index) => (
              <span key={`repeat-${index}`} className="mx-4">• {item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
