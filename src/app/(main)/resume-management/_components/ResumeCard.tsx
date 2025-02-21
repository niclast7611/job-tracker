import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type Props = {
  resume: any;
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const ResumeCard = ({ resume }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold">{resume.title}</h3>
          <p className="text-gray-600">
            Last modified: {formatDate(resume.updatedAt)}
          </p>
        </div>
        <button
          className="p-2 hover:bg-gray-100 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaChevronUp className="w-5 h-5" />
          ) : (
            <FaChevronDown className="w-5 h-5" />
          )}
        </button>
      </div>

      <div className="h-40 bg-gray-100 rounded-lg mb-4 overflow-hidden">
        {/* {viewUrl && (
          <iframe
            src={`${viewUrl}#view=FitH`}
            className="w-full h-full"
            title={`Preview of ${resume.title}`}
          />
        )} */}
      </div>

      <div className="flex gap-2">
        <button
          className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
          onClick={() => window.open(`/resumes/${resume.id}/edit`, "_blank")}
        >
          Edit
        </button>
        <button
          className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
          // onClick={() => setShowPreview(true)}
        >
          Preview
        </button>
      </div>
    </div>
  );
};

export default ResumeCard;
