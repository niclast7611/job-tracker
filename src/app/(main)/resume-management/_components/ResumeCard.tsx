import { Resume } from "@/lib/types";
import React from "react";

type Props = {
  resume: Resume;
};

const formatDate = (dateString?: string | Date) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const ResumeCard = ({ resume }: Props) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold">{resume.title}</h3>
          <p className="text-gray-600">
            Last modified: {formatDate(resume?.updatedAt || "")}
          </p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg mb-4 overflow-hidden h-40">
        {resume.fileUrl && (
          <iframe
            src={`${resume.fileUrl}#toolbar=0`}
            className="w-full h-full"
            title={`Preview of ${resume.title}`}
          />
        )}
      </div>

      <div className="flex gap-2">
        <button
          className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
          // onClick={() => window.open(`/resumes/${resume.id}/edit`, "_blank")}
        >
          Edit
        </button>
        <button
          className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
          onClick={() => {
            if (resume.fileUrl) {
              window.open(resume.fileUrl, "_blank");
            } else {
              alert("No file URL available for preview.");
            }
          }}
        >
          Preview
        </button>
      </div>
    </div>
  );
};

export default ResumeCard;
