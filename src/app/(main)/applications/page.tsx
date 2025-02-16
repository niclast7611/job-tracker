import React from "react";
import ApplicationCard from "./components/ApplicationCard";
import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoFunnelOutline } from "react-icons/io5";

const ApplicationsKanban = () => {
  // Sample data structure
  const columns = {
    toApply: {
      title: "To Apply",
      items: [
        {
          id: "1",
          role: "Frontend Developer",
          company: "TechCorp Inc",
          location: "San Francisco, CA",
          deadline: "2024-03-01",
          status: "To Apply",
          logo: "/api/placeholder/40/40",
        },
        {
          id: "2",
          role: "UX Designer",
          company: "Design Studio",
          location: "Remote",
          deadline: "2024-03-05",
          status: "To Apply",
          logo: "/api/placeholder/40/40",
        },
      ],
    },
    applied: {
      title: "Applied",
      items: [
        {
          id: "3",
          role: "Full Stack Engineer",
          company: "StartupCo",
          location: "New York, NY",
          deadline: null,
          status: "Applied",
          logo: "/api/placeholder/40/40",
        },
      ],
    },
    interviewing: {
      title: "Interviewing",
      items: [
        {
          id: "4",
          role: "Product Manager",
          company: "BigTech",
          location: "Seattle, WA",
          deadline: "2024-03-10",
          status: "Interviewing",
          logo: "/api/placeholder/40/40",
        },
      ],
    },
    offer: {
      title: "Offer",
      items: [],
    },
    rejected: {
      title: "Rejected",
      items: [
        {
          id: "5",
          role: "Software Engineer",
          company: "Tech Giants",
          location: "Austin, TX",
          deadline: null,
          status: "Rejected",
          logo: "/api/placeholder/40/40",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Job Applications</h1>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg">
            <FaPlus className="w-5 h-5 mr-2" />
            Add Application
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
            <CiSearch className="w-5 h-5 text-gray-400 mr-2" />
            <input
              className="w-full outline-none"
              placeholder="Search applications..."
            />
          </div>
          <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm">
            <IoFunnelOutline className="w-5 h-5 mr-2" />
            Filters
          </button>
        </div>

        {/* Kanban Stats */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {Object.entries(columns).map(([key, column]) => (
            <div key={key} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-600">{column.title}</div>
              <div className="text-2xl font-bold">{column.items.length}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Kanban Board */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-5 gap-6">
          {Object.entries(columns).map(([columnId, column]) => (
            <div key={columnId} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-medium mb-4 flex items-center justify-between">
                {column.title}
                <span className="text-sm text-gray-500">
                  {column.items.length}
                </span>
              </h3>
              <div className="space-y-4">
                {column.items.map((item) => (
                  <ApplicationCard key={item.id} application={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationsKanban;
