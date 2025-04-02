import React from 'react';
import herophone from '../assets/herophone.png'; // Adjust the path to your image
import herochat from '../assets/herochat.png'; // Adjust the path to your image

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-[#F8F6FC] overflow-hidden px-6 md:px-12 hero">
           
            <div className="bg-white border border-black/20 px-4 py-2 rounded-full text-xs font-medium absolute top-6 left-1/2 transform -translate-x-1/2 my-4 z-20">
                Join 1000+ Africans Taking Control of their Financial Futures
            </div>

            {/* Content Container */}
            <div className="relative z-10 text-center max-w-3xl mx-auto mt-20">
                {/* Main Title */}
                <h1 className="text-5xl font-extrabold mt-8 flex items-center justify-center space-x-2 font-menagrotesk">
                    WHAT'S YOUR MONEY VIBE ?<span className="text-purple-600 text-2xl">✦</span> {/* Icon */}
                </h1>

                {/* Subtitle */}
                <p className="max-w-1xl text-gray-700 mt-4 text-md leading-relaxed mx-auto font-menagrotesk">
                    Discover your money personality and join thousands of Africans taking control with Xyra's AI-powered insights.
                </p>

                <div className="flex justify-center mt-8">
                    <a
                        href="/quiz"
                        className="mt-8 px-6 py-3 text-lg font-semibold text-black rounded-md transition-all duration-300
                        bg-gradient-to-r from-purple-400 to-purple-600"
                    >
                        TAKE THE QUIZ
                    </a>
                </div>
                </div>
                <div className="relative w-full mt-12 flex flex-wrap justify-between items-center gap-6">
                <span className="relative hidden md:block">
                    <img
                        src={herochat}
                        alt="User smiling"
                        className="h-[300px] rounded-lg shadow-lg object-cover"
                    />
                    <div className="absolute -top-6 left-10 bg-orange-500 text-white px-4 py-2 rounded-full shadow-md text-sm">
                        Xyra roast me
                    </div>
                    <div className="absolute -bottom-6 left-14 bg-red-600 text-white px-4 py-2 rounded-lg shadow-md text-sm">
                        Oh, you really want the heat? Say less. 🔥
                    </div>
                </span>

                {/* Right - Chat Mockup */}
                <div className="relative hidden md:block">
                    <div className="w-60 h-[450px] rounded-3xl p-2">
                        <img src={herophone} alt="User chatting" />
                    </div>
                </div>
            </div>
        </section>
    );
}
