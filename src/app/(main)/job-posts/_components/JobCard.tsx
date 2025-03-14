import { Job, JobSalary } from "@/lib/types";
import React, { useState } from "react";
import { CiLocationOn, CiDollar, CiCalendar } from "react-icons/ci";
import { formatDate } from "../../resume-management/_components/ResumeCard";

type Props = {
  job: Job;
};
const JobCard = ({ job }: Props) => {
  const [showDetails, setShowDetails] = useState(false);

  // Format salary range
  const formatSalary = (salaryData?: JobSalary) => {
    if (!salaryData || !salaryData.value) return "Salary not specified";

    const { value } = salaryData;
    const min = value.minValue?.toLocaleString();
    const max = value.maxValue?.toLocaleString();
    const currency = salaryData.currency || "USD";
    const period =
      value.unitText === "YEAR"
        ? "yearly"
        : value.unitText?.toLowerCase() || "";

    if (min && max) {
      return `${currency} ${min} - ${max} ${period}`;
    } else if (min) {
      return `${currency} ${min}+ ${period}`;
    } else if (max) {
      return `Up to ${currency} ${max} ${period}`;
    }

    return "Salary not specified";
  };

  // Get location string
  const getLocationString = () => {
    if (job.locations_derived && job.locations_derived.length) {
      return job.locations_derived[0];
    } else if (job.cities_derived || job.regions_derived) {
      const city = job.cities_derived?.[0] || "";
      const region = job.regions_derived?.[0] || "";
      return [city, region].filter(Boolean).join(", ");
    } else if (job.locations_raw && job.locations_raw.length) {
      const location = job.locations_raw[0];
      const address = location.address || {};
      return [
        address.addressLocality,
        address.addressRegion,
        address.addressCountry,
      ]
        .filter(Boolean)
        .join(", ");
    }
    return "Location not specified";
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      {/* Basic Information (Always Visible) */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start gap-3">
          {job.organization_logo ? (
            <img
              src={job.organization_logo}
              alt={`${job.organization} logo`}
              className="w-12 h-12 object-contain rounded"
            />
          ) : (
            <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500">
              {job.organization?.charAt(0) || "?"}
            </div>
          )}
          <div>
            <h3 className="font-bold text-lg">
              {job.title || "Untitled Position"}
            </h3>
            <p className="text-gray-700">
              {job.organization || "Unknown Company"}
            </p>
          </div>
        </div>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => window.open(job.url, "_blank")}
        >
          Apply
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <div className="flex items-center text-gray-600">
          <CiLocationOn className="w-5 h-5 mr-2" />
          <span>{getLocationString()}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <CiDollar className="w-5 h-5 mr-2" />
          <span>{formatSalary(job?.salary_raw)}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <CiCalendar className="w-5 h-5 mr-2" />
          <span>Posted: {formatDate(job?.date_posted)}</span>
        </div>
      </div>

      {/* Toggle Details Button */}
      <div className="flex justify-center mt-2">
        <button
          className="px-4 py-2 text-blue-600 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>

      {/* Additional Details (Expandable) */}
      {showDetails && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="font-semibold mb-2">Additional Information</h4>
          <div className="grid grid-cols-1 gap-2">
            {job.employment_type && (
              <div className="flex justify-between">
                <span className="text-gray-600">Employment Type:</span>
                <span>{job.employment_type}</span>
              </div>
            )}
            {job.location_type && (
              <div className="flex justify-between">
                <span className="text-gray-600">Work Model:</span>
                <span>{job.remote_derived ? "Remote" : job.location_type}</span>
              </div>
            )}
            {job.date_validthrough && (
              <div className="flex justify-between">
                <span className="text-gray-600">Apply Before:</span>
                <span>{formatDate(job.date_validthrough)}</span>
              </div>
            )}
            {job.date_created && (
              <div className="flex justify-between">
                <span className="text-gray-600">Created:</span>
                <span>{formatDate(job.date_created)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-600">Source:</span>
              <span>{job.source || job.source_type || "Not specified"}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobCard;
