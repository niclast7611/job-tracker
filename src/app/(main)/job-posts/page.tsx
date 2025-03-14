"use client";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { toast } from "react-toastify";
import JobCard from "./_components/JobCard";
import { Job } from "@/lib/types";

const JobPostPage = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs");
        const data = await response.json();
        setJobs(data?.data || []);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        toast.error("Failed to load job listings");
      }
    };

    fetchJobs();
  }, []);

  // TODO:THIS SHOULD EVENTUALLY WORK
  // Filter jobs based on search term
  const filteredJobs = jobs.filter(
    (job: Job) =>
      (job.title?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (job.organization?.toLowerCase() || "").includes(
        searchTerm.toLowerCase()
      ) ||
      job.locations_derived?.some((loc) =>
        loc.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      false
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex items-center border rounded-lg px-4 py-2">
              <CiSearch className="w-5 h-5 text-gray-400 mr-2" />
              <input
                className="w-full outline-none"
                placeholder="Search jobs by title, company, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {/* Expandable Filters Section */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Salary Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Salary Range
                </label>
                {/* TODO:You could dynamically populate this with unique salaries from jobs */}
                <select className="w-full border rounded-lg px-3 py-2">
                  <option value="">Any Salary</option>
                  <option value="50000">$50,000+</option>
                  <option value="75000">$75,000+</option>
                  <option value="100000">$100,000+</option>
                  <option value="150000">$150,000+</option>
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <select className="w-full border rounded-lg px-3 py-2">
                  <option value="">Any Location</option>
                  <option value="remote">Remote</option>
                  {/* TODO:You could dynamically populate this with unique locations from jobs */}
                </select>
              </div>

              {/* Date Posted Filter */}
              {/* TODO: You could dynamically populate this with unique dates from jobs*/}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date Posted
                </label>
                <select className="w-full border rounded-lg px-3 py-2">
                  <option value="">Any Time</option>
                  <option value="1">Last 24 hours</option>
                  <option value="7">Last 7 days</option>
                  <option value="30">Last 30 days</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job: Job) => <JobCard key={job.id} job={job} />)
          ) : jobs.length > 0 ? (
            <div className="text-center py-8 bg-white rounded-lg shadow-sm">
              <p className="text-gray-600">
                No jobs match your search criteria.
              </p>
              <button
                className="mt-2 text-blue-600 hover:underline"
                onClick={() => setSearchTerm("")}
              >
                Clear search
              </button>
            </div>
          ) : (
            // Loading state
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-lg shadow-sm animate-pulse"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded"></div>
                      <div>
                        <div className="h-6 w-40 bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 w-32 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="h-10 w-20 bg-gray-200 rounded"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="h-4 bg-gray-200 rounded"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobPostPage;
