"use client";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import ResumeCard from "./_components/ResumeCard";
import { Resume } from "@prisma/client";
import { PresignedUrlResponse } from "@/lib/types";

const ResumeManagementPage = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);

  const uploadFile = async (file: File) => {
    try {
      // Get presigned URL from your API
      const presignedResponse = await fetch("/api/resumes/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filename: file.name,
          contentType: file.type,
        }),
      });
      const { url, fields } =
        (await presignedResponse.json()) as PresignedUrlResponse;

      const formData = new FormData();
      Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append("file", file);

      const uploadResponse = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) throw new Error("Upload failed");

      const s3Url = `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${fields.key}`;

      const dbResponse = await fetch("/api/resumes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: file.name,
          fileName: fields.key,
          fileUrl: s3Url,
          fileType: file.type,
          fileSize: file.size,
          isBase: true,
        }),
      });

      if (!dbResponse.ok) {
        throw new Error("Failed to save resume details");
      }

      const resume = await dbResponse.json();
      return resume;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      await uploadFile(file);

      // toast({
      //   title: "Resume uploaded",
      //   description: "Your resume has been uploaded successfully",
      // });
      // Handle successful upload (e.g., show success message, update UI)
    } catch (error) {
      // toast({
      //   title: "Upload failed",
      //   description: "There was an error uploading your resume",
      //   type: "error",
      // });
      // Handle error (e.g., show error message)
      console.error("Upload failed:", error);
    }
  };

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await fetch("/api/resumes");
        const data = await response.json();
        setResumes(data);
      } catch (error) {
        console.error("Error fetching resumes:", error);
      }
    };

    fetchResumes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">My Resumes</h2>
          <label className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer">
            <FaPlus className="w-5 h-5 mr-2" />
            <span>New Resume</span>
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleFileSelect}
            />
          </label>
        </div>

        {/* Resume Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {resumes?.map((resume, i) => (
            <ResumeCard resume={resume} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeManagementPage;
