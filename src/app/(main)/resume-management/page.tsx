import React from "react";
import { FaChevronDown, FaPlus } from "react-icons/fa";

const ResumeManagementPage = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">My Resumes</h2>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg">
            <FaPlus className="w-5 h-5 mr-2" />
            New Resume
          </button>
        </div>

        {/* Resume Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold">Resume Title</h3>
                  <p className="text-gray-600">Last modified: date</p>
                </div>
                <button className="p-2">
                  <FaChevronDown className="w-5 h-5" />
                </button>
              </div>
              <div className="h-40 bg-gray-100 rounded-lg mb-4" />
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 border rounded-lg">
                  Edit
                </button>
                <button className="flex-1 px-4 py-2 border rounded-lg">
                  Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeManagementPage;
