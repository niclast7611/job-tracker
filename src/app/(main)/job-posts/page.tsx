import React from "react";
import { CiSearch } from "react-icons/ci";

const JobPostPage = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex gap-4">
            <div className="flex-1 flex items-center border rounded-lg px-4 py-2">
              <CiSearch className="w-5 h-5 text-gray-400 mr-2" />
              <input
                className="w-full outline-none"
                placeholder="Search jobs..."
              />
            </div>
            <button className="px-4 py-2 border rounded-lg">Filters</button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold">Job Title</h3>
                  <p className="text-gray-600">Company Name</p>
                </div>
                <button className="px-4 py-2 border rounded-lg">Apply</button>
              </div>
              <div className="space-y-2">
                <p>Job description preview...</p>
                <div className="flex gap-2">
                  {[1, 2, 3].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      Tag
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobPostPage;
