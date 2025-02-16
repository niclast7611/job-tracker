import React from "react";
import { FaBrain, FaChevronRight } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

const FeatureSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Everything You Need to Land Your Dream Job
          </h2>
          <p className="text-xl text-gray-600">
            Our AI-powered platform streamlines your job search process from
            start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: FaBrain,
              title: "AI Resume Tailoring",
              description:
                "Automatically optimize your resume for each job application using advanced AI.",
            },
            {
              icon: SlSocialLinkedin,
              title: "LinkedIn Integration",
              description:
                "Seamlessly import your profile and stay synchronized with your professional network.",
            },
            {
              icon: FiBriefcase,
              title: "Application Tracking",
              description:
                "Keep track of all your applications with our intuitive Kanban board system.",
            },
          ].map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <button className="flex items-center text-blue-600 hover:text-blue-700">
                Learn More <FaChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
