import Image from "next/image";
import React from "react";
import { FaRegStar } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm">
              <FaRegStar className="w-4 h-4 mr-2" />
              Trusted by 10,000+ job seekers
            </div>
            <h1 className="text-5xl font-bold leading-tight">
              Your AI-Powered Career Success Partner
            </h1>
            <p className="text-xl text-gray-600">
              Automatically tailor your resume for each job application and
              track your progress with our intelligent platform.
            </p>
            <div className="flex items-center space-x-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Start Free Trial
              </button>
              <button className="px-8 py-4 text-gray-600 hover:text-gray-900">
                See How It Works
              </button>
            </div>
            <div className="flex items-center space-x-8 pt-8">
              {/* Company logos at the bottom */}
              <Image
                src={"/placeholder.jpeg"}
                alt={"Company Logo"}
                width={100}
                height={100}
                className="w-20 h-20 rounded object-cover"
                priority
              />
              <Image
                src={"/placeholder.jpeg"}
                alt={"Company Logo"}
                width={100}
                height={100}
                className="w-20 h-20 rounded object-cover"
                priority
              />
              <Image
                src={"/placeholder.jpeg"}
                alt={"Company Logo"}
                width={100}
                height={100}
                className="w-20 h-20 rounded object-cover"
                priority
              />
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              {/* Main platform preview image */}
              <Image
                src={"/placeholder.jpeg"}
                alt={"Platform Preview"}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
