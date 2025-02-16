import React from "react";

const CtaSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Boost Your Job Search?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of successful job seekers who found their dream job
            with JobBoost.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
