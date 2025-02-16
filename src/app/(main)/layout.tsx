import React from "react";
import Navbar from "./components/Navbar";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
