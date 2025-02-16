"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { CiCircleAlert, CiCircleCheck } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaLock, FaRegUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

// TODO:THIS ENTIRE PAGE NEEDS TO MATCH THE SIGN IN PAGE
export default function SignUpPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") || "/onboarding";
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleGoogleSignUp = async () => {
    try {
      setIsLoading(true);
      await signIn("google", { callbackUrl });
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Password strength indicators
  const passwordRequirements = [
    { label: "At least 8 characters", met: formData.password.length >= 8 },
    {
      label: "Contains uppercase letter",
      met: /[A-Z]/.test(formData.password),
    },
    { label: "Contains number", met: /[0-9]/.test(formData.password) },
    {
      label: "Contains special character",
      met: /[^A-Za-z0-9]/.test(formData.password),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Brand Section */}
      <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-8 md:p-12 flex flex-col justify-between text-white">
        <div>
          <h1 className="text-2xl font-bold mb-2">JobBoost</h1>
          <p className="text-blue-100">Your AI-powered career partner</p>
        </div>

        <div className="hidden md:block">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">Start Your Journey</h2>
            <p className="text-xl text-blue-100">
              Join thousands of professionals who have already transformed their
              job search with AI-powered tools.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6 mb-8">
            {[
              "AI-powered resume optimization",
              "Intelligent job matching",
              "Application tracking dashboard",
              "LinkedIn profile integration",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <CiCircleCheck className="w-4 h-4" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="hidden md:flex justify-between text-blue-100">
          <div>
            <p className="text-3xl font-bold">10k+</p>
            <p className="text-sm">Active Users</p>
          </div>
          <div>
            <p className="text-3xl font-bold">85%</p>
            <p className="text-sm">Success Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold">24/7</p>
            <p className="text-sm">AI Support</p>
          </div>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="md:w-1/2 bg-gray-50">
        <div className="max-w-md w-full mx-auto p-8 md:p-12">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Create Account
            </h2>
            <p className="text-gray-600">
              Get started with your free account today
            </p>
          </div>

          {/* Sign Up Form */}
          <form className="space-y-6 mb-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <div className="relative">
                  <FaRegUser className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <div className="relative">
                  <FaRegUser className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <MdEmail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <FaLock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                />
              </div>
              {/* Password Requirements */}
              <div className="mt-2 space-y-2">
                {passwordRequirements.map((req, index) => (
                  <div key={index} className="flex items-center text-sm">
                    {req.met ? (
                      <CiCircleCheck className="w-4 h-4 text-green-500 mr-2" />
                    ) : (
                      <CiCircleAlert className="w-4 h-4 text-gray-400 mr-2" />
                    )}
                    <span
                      className={req.met ? "text-green-500" : "text-gray-500"}
                    >
                      {req.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <FaLock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-sm text-gray-600">
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-blue-600 hover:text-blue-500"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-blue-600 hover:text-blue-500"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Create Account
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">
                Or sign up with
              </span>
            </div>
          </div>

          {/* Social Sign Up */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <button
              onClick={handleGoogleSignUp}
              disabled={isLoading}
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin" />
              ) : (
                <FcGoogle />
              )}
            </button>

            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <FaGithub className="w-5 h-5" />
            </button>

            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <FaLinkedin className="w-5 h-5 text-blue-600" />
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/auth/sign-in"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
