import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

function Hero() {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center sm:py-20">
      <div className="flex justify-center mb-6">
        <h2 className="text-center text-white border border-white rounded-full px-4 py-2 text-sm sm:text-base lg:text-lg">
          See What's New | <span className="text-sky-300">AI Diagram</span>
        </h2>
      </div>

      <div className="flex flex-col items-center px-4 space-y-4 text-center">
        <h1 className="bg-gradient-to-r from-green-100 via-blue-500 to-gray-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl lg:text-6xl leading-tight">
          Understand User Flow.
          <span className="block">Increase Conversion.</span>
        </h1>

        <p className="max-w-lg mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <div className="w-full sm:w-auto p-2">
            <RegisterLink>
              <span className="w-full sm:w-auto px-8 py-3 rounded border border-blue-600 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 transition">
                Get Started
              </span>
            </RegisterLink>
          </div>

          <a
            className="w-full sm:w-auto px-8 py-3 rounded border border-blue-600 text-sm font-medium text-white hover:bg-blue-600 transition"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
