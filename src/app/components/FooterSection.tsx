import React from "react";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">JobBoost</h3>
            <p>Your AI-powered career success partner</p>
          </div>
          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Security", "Updates"],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Contact", "Partners"],
            },
            {
              title: "Resources",
              links: ["Blog", "Newsletter", "Help Center", "Tutorials"],
            },
          ].map((column, i) => (
            <div key={i}>
              <h3 className="text-white font-bold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a className="hover:text-white">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm">
          © 2024 JobBoost. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
