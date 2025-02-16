import LogoutButton from "@/components/LogoutButton";
import {
  BellIcon,
  Cog6ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/dashboard" className="text-gray-700">
              <span className="text-xl font-bold">JobBoost</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8 ml-10">
              <Link className="text-gray-700" href="/job-posts">
                Jobs
              </Link>
              <Link className="text-gray-700" href="/resume-management">
                Resumes
              </Link>
              <Link className="text-gray-700" href="/applications">
                Applications
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <BellIcon className="w-5 h-5" />
            <UserCircleIcon className="w-5 h-5" />
            <Cog6ToothIcon className="w-5 h-5" />
            <LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
