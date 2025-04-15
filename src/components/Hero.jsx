import React from "react";
import herophone from "../assets/herophone.png"; // Adjust the path to your image
import herochat from "../assets/herochat.png"; // Adjust the path to your image

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-[#F8F6FC] overflow-hidden px-0 font-space">
      <div className="bg-white border border-black/20 px-4 py-2 rounded-full text-xs font-medium absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
        Join 1000+ Africans Taking Control of their Financial Futures
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-20">
        {/* Main Title */}
        <h1 className="text-5xl font-bold mt-8 flex items-center justify-center space-x-2 ">
          WHAT'S YOUR MONEY VIBE ?
          <span className="text-purple-600 text-2xl px-1 mb-6">✦</span>{" "}
          {/* Icon */}
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-gray-700 mt-4 text-sm font-semibold  mx-auto">
          Discover your money personality and join thousands of Africans taking
          control with Xyra's AI-powered insights.
        </p>

        <div className="flex justify-center mt-6">
          <a
            href="/start"
            className="mt-6 px-8 py-2 text-md font-semibold text-black rounded-md transition-all duration-300 bg-purple-400 pointer-events-auto"
          >
            TAKE THE QUIZ
          </a>
        </div>
      </div>
      <div className="relative w-full -mt-6 flex flex-wrap justify-between items-center gap-5">
        <div className="relative hidden md:block -mt-30 -ml-3">
            <img src={herochat} alt="User smiling" className="w-auto h-[420px]"/>
        </div>

        {/* Right - Chat Mockup */}
        <div className="relative hidden md:block -mt-20">
           <img src={herophone} alt="User chatting" className="w-auto h-[350px] " />
        </div>
      </div>
    </section>
  );
}
