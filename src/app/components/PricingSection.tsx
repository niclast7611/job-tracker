import React from "react";
import { CiCircleCheck } from "react-icons/ci";

const PricingSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Basic",
              price: "Free",
              features: [
                "3 Resume Versions",
                "Basic Job Tracking",
                "LinkedIn Import",
              ],
            },
            {
              name: "Pro",
              price: "$12/month",
              features: [
                "Unlimited Resumes",
                "AI Resume Tailoring",
                "Advanced Analytics",
                "Priority Support",
              ],
            },
            {
              name: "Enterprise",
              price: "Custom",
              features: [
                "Team Management",
                "Custom Integration",
                "Dedicated Support",
                "Custom Features",
              ],
            },
          ].map((plan, i) => (
            <div key={i} className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center">
                    <CiCircleCheck className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-50">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
