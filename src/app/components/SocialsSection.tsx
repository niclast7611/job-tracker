import Image from "next/image";
import React from "react";
import { FaRegStar } from "react-icons/fa";

const SocialsSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src={"/placeholder.jpeg"}
              alt={"User Dashboard"}
              width={600}
              height={400}
              className="w-full h-auto rounded-xl shadow-lg"
              priority
            />
          </div>
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaRegStar key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl font-medium">
              JobBoost helped me land my dream job at a top tech company. The AI
              resume tailoring is a game-changer!
            </blockquote>
            <div>
              <p className="font-bold">Sarah Chen</p>
              <p className="text-gray-600">Software Engineer at TechCorp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;
