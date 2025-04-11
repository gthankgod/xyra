import React from "react";
import herophone from "../assets/herophone.png"; // Adjust the path to your image
import herochat from "../assets/herochat.png"; // Adjust the path to your image

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-[#F8F6FC] overflow-hidden px-0">
      <div className="bg-white border border-black/20 px-4 py-2 rounded-full text-xs font-medium absolute top-6 left-1/2 transform -translate-x-1/2 my-4 z-20">
        Join 1000+ Africans Taking Control of their Financial Futures
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mt-20">
        {/* Main Title */}
        <h1 className="text-4xl font-extrabold mt-8 flex items-center justify-center space-x-2 menagrotesk ">
          WHAT'S YOUR MONEY VIBE ?
          <span className="text-purple-600 text-2xl px-1 mb-6">✦</span>{" "}
          {/* Icon */}
        </h1>

        {/* Subtitle */}
        <p className="max-w-1xl text-gray-700 mt-4 text-sm font-extrabold leading-relaxed mx-auto">
          Discover your money personality and join thousands of Africans taking
          control with Xyra's AI-powered insights.
        </p>

        <div className="flex justify-center mt-8">
          <a
            href="/start"
            className="mt-8 px-8 py-3 text-md font-semibold text-black rounded-md transition-all duration-300 bg-purple-400"
          >
            TAKE THE QUIZ
          </a>
        </div>
      </div>
      <div className="relative w-full -mt-6 flex flex-wrap justify-between items-center gap-6">
        <div className="relative hidden md:block -mt-6">
            <img src={herochat} alt="User smiling" className="w-127 h-[450px]"/>
        </div>

        {/* Right - Chat Mockup */}
        <div className="relative hidden md:block">
           <img src={herophone} alt="User chatting" className="w-80 h-[450px] pt-10" />
        </div>
      </div>
    </section>
  );
}
