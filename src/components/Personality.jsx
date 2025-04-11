import React from "react";
import { useLocation } from "react-router-dom";

const MoneyPersonalityResult = () => {
  const location = useLocation();
  const personalityData = location.state?.data?.data?.aiResponse;
  
  if(location.state && location.state?.data?.status !== 'successful') {
    return <div className="text-center mt-10">Error in generating financial report. Please try again.</div>;
  }

  if (!personalityData) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="p-8 bg-purple-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-center text-2xl font-bold mb-4">
          YOUR MONEY PERSONALITY
        </h1>
        <h2 className="text-center text-xl font-semibold text-purple-700 mb-6">
          YOU’RE A {personalityData.personality.toUpperCase()} 🎉
        </h2>

        <div className="flex justify-center gap-4 mb-6">
          {["Spender", "Saver", "Builder", "Giver"].map((type) => (
            <div
              key={type}
              className={`flex flex-col items-center px-4 py-2 rounded-lg border ${
                type === personalityData.personality
                  ? "bg-purple-200 border-purple-500"
                  : "bg-gray-100"
              }`}
            >
              <div className="text-xl">
                {type === "Spender"
                  ? "👜"
                  : type === "Saver"
                  ? "🐷"
                  : type === "Builder"
                  ? "📊"
                  : "💖"}
              </div>
              <div className="text-sm mt-2 font-medium text-gray-700">{type}</div>
            </div>
          ))}
        </div>

        <div className="bg-purple-50 p-4 rounded-xl mb-6">
          <h3 className="font-semibold text-purple-700 mb-2">
            "{personalityData.description.heading}"
          </h3>
          <p className="text-gray-700 text-sm">{personalityData.description.content}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-2">Superpowers</h4>
            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
              {personalityData.superpowers.map((item, idx) => (
                <li key={idx}>✅ {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Your Challenges</h4>
            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
              {personalityData.challenges.map((item, idx) => (
                <li key={idx}>⚠️ {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">How to Find Balance</h4>
            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
              {personalityData.find_balance.map((item, idx) => (
                <li key={idx}>💡 {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyPersonalityResult;
