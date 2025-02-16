"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SignInPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") || "/dashboard";
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      await signIn("google", {
        callbackUrl,
      });
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Brand Section */}
      <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-8 md:p-12 flex flex-col justify-between text-white">
        <div>
          <Link href={"/"} className="text-2xl font-bold mb-2">
            JobBoost
          </Link>
          <p className="text-blue-100">Your AI-powered career partner</p>
        </div>

        <div className="hidden md:block">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
            <p className="text-xl text-blue-100">
              Sign in to access your personalized job search dashboard and
              AI-powered tools.
            </p>
          </div>

          {/* Testimonial */}
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <p className="text-lg mb-4">
              JobBoost helped me land my dream job with their AI resume
              optimization. Highly recommended!
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full mr-3"></div>
              <div>
                <p className="font-medium">Sarah Chen</p>
                <p className="text-sm text-blue-200">
                  Software Engineer at TechCorp
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4 text-sm text-blue-100">
          <span>Trusted by 10,000+ professionals</span>
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 bg-blue-500 rounded-full border-2 border-blue-700"
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Sign In Form */}
      <div className="md:w-1/2 bg-gray-50">
        <div className="max-w-md w-full mx-auto p-8 md:p-12">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
            <p className="text-gray-600">
              Welcome back! Please enter your details
            </p>
          </div>

          {/* Sign In Form */}
          {/* TODO: */}
          <form className="space-y-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <MdEmail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
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
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <Link
                href="/auth/forgot-password"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Sign in
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Sign In */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <button
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin" />
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              )}
            </button>
            {/* TODO: */}
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <FaGithub className="w-5 h-5" />
            </button>
            {/* TODO: */}
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <FaLinkedin className="w-5 h-5 text-blue-600" />
            </button>
          </div>

          {searchParams?.get("error") && (
            <div className="p-4 mb-6 text-sm text-red-700 bg-red-100 rounded-lg flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              There was an error signing in. Please try again.
            </div>
          )}

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/sign-up"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
