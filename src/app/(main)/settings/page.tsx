import React from "react";
import { FaRegBell, FaRegUser } from "react-icons/fa";
import { FiBriefcase, FiFileText } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="space-y-2">
                {[
                  { icon: FaRegUser, label: "Profile" },
                  { icon: FaRegBell, label: "Notifications" },
                  { icon: FiFileText, label: "Resume Preferences" },
                  { icon: FiBriefcase, label: "Job Preferences" },
                  { icon: IoCalendarOutline, label: "Calendar" },
                ].map((item, i) => (
                  <button
                    key={i}
                    className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50"
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
            <div className="space-y-6">
              {/* Profile Section */}
              <div className="pb-6 border-b">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gray-200 rounded-full" />
                  <button className="px-4 py-2 border rounded-lg">
                    Change Photo
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="space-y-2">
                      <label className="block text-sm font-medium">
                        Field Label
                      </label>
                      <input className="w-full p-2 border rounded-lg" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Settings Sections */}
              {[1, 2].map((section) => (
                <div key={section} className="pb-6 border-b">
                  <h3 className="font-bold mb-4">Section Title</h3>
                  <div className="space-y-4">
                    {[1, 2].map((item) => (
                      <div
                        key={item}
                        className="flex justify-between items-center"
                      >
                        <div>
                          <h4 className="font-medium">Setting Title</h4>
                          <p className="text-gray-600">Setting description</p>
                        </div>
                        <button className="px-4 py-2 border rounded-lg">
                          Action
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
