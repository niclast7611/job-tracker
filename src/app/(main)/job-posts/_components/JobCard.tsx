import React, { useState } from "react";
import { Job } from "@/lib/types";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [expanded, setExpanded] = useState(false);
  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start gap-3">
          {/* Company Logo */}
          <div className="relative w-12 h-12 rounded overflow-hidden bg-gray-100">
            {job.company_object?.logo ? (
              <img
                src={job.company_object.logo}
                alt={`${job.company} logo`}
                className="object-contain fill h-full w-full rounded"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <FaBuilding size={24} />
              </div>
            )}
          </div>

          {/* Job Title and Company */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              {job.job_title}
            </h3>
            <p className="text-gray-600">{job.company}</p>
          </div>
        </div>

        {/* Apply Button */}
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Apply
        </a>
      </div>

      {/* Job Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 text-sm text-gray-600">
        {/* Location */}
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt />
          <span>{job.short_location || "Location not specified"}</span>
          {job.remote && <span className="ml-1 text-green-600">(Remote)</span>}
          {job.hybrid && <span className="ml-1 text-blue-600">(Hybrid)</span>}
        </div>

        {/* Employment Type */}
        <div className="flex items-center gap-2">
          <FaBriefcase />
          <span>{job.employment_statuses?.join(", ") || "Not specified"}</span>
        </div>

        {/* Date Posted */}
        <div className="flex items-center gap-2">
          <FaClock />
          <span>Posted {formatDate(job.date_posted)}</span>
        </div>
      </div>

      {/* Salary Info if available */}
      {job.salary_string && (
        <div className="mb-4 text-sm bg-blue-50 text-blue-800 p-2 rounded">
          <span className="font-medium">Compensation:</span> {job.salary_string}
        </div>
      )}

      {/* Job Description Preview */}
      <div className="text-gray-700">
        {job.description ? (
          <>
            <div className={expanded ? "" : "line-clamp-3"}>
              {job.description.split("\n").map((paragraph, index) =>
                paragraph.trim() ? (
                  <p key={index} className="mb-2">
                    {paragraph}
                  </p>
                ) : null
              )}
            </div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              {expanded ? (
                <>
                  <span>Show less</span>
                  <FaChevronUp className="ml-1" />
                </>
              ) : (
                <>
                  <span>Show more</span>
                  <FaChevronDown className="ml-1" />
                </>
              )}
            </button>
          </>
        ) : (
          <p className="italic text-gray-500">No description available</p>
        )}
      </div>

      {/* Tags or Badges */}
      <div className="mt-4 flex gap-2 flex-wrap">
        {job.seniority && (
          <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
            {job.seniority
              .replace("_", " ")
              .replace(/\b\w/g, (l) => l.toUpperCase())}
          </span>
        )}
        {job.company_object?.industry && (
          <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
            {job.company_object.industry}
          </span>
        )}
      </div>
    </div>
  );
};

export default JobCard;
