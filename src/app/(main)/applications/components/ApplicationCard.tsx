import Image from "next/image";
import React from "react";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";

type Props = {
  application: any;
};

const ApplicationCard = ({ application }: Props) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4 cursor-pointer hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <Image
          src={"/placeholder.jpeg"}
          alt={application.company}
          width={40}
          height={40}
          className="w-10 h-10 rounded"
          priority
          unoptimized
        />
        <div className="flex-1">
          <h3 className="font-medium">{application.role}</h3>
          <div className="text-sm text-gray-600 space-y-1 mt-1">
            <div className="flex items-center gap-1">
              <HiOutlineBuildingOffice2 className="w-4 h-4" />
              {application.company}
            </div>
            <div className="flex items-center gap-1">
              <LuMapPin className="w-4 h-4" />
              {application.location}
            </div>
            {application.deadline && (
              <div className="flex items-center gap-1">
                <IoCalendarOutline className="w-4 h-4" />
                Due: {application.deadline}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
