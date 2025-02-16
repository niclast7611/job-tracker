import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const LandingPageNavBar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href={"/"} className="text-xl font-bold">
              JobBoost
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href={"#features"}
                className="text-gray-600 hover:text-gray-900"
              >
                Features
              </Link>
              <Link
                href={"#pricing"}
                className="text-gray-600 hover:text-gray-900"
              >
                Pricing
              </Link>
              <Link
                href={"#about"}
                className="text-gray-600 hover:text-gray-900"
              >
                About
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href={"/auth/sign-in"}
              className="hidden md:block px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Sign In
            </Link>

            <Link
              href={"/auth/sign-up"}
              className="hidden md:flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Get Started <FaArrowRight className="w-4 h-4 ml-2" />
            </Link>
            {/* TODO:SHADCN COMPONENT */}
            {/* <button className="md:hidden">
              <IoMdMenu className="w-6 h-6" />
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingPageNavBar;
