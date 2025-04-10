import React, { useEffect, useState } from "react";
import { MailCheck, Mail } from "lucide-react";

const MoneyPersonalityResult = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://xyra-be.vercel.app"); // Replace with real API
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-8 bg-purple-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-center text-2xl font-bold mb-4">
          {data.name.toUpperCase()}'S MONEY PERSONALITY
        </h1>
        <h2 className="text-center text-xl font-semibold text-purple-700 mb-6">
          YOU’RE A {data.personality.toUpperCase()} 🎉
        </h2>

        <div className="flex justify-center gap-4 mb-6">
          {["Spender", "Saver", "Builder", "Giver"].map((type) => (
            <div
              key={type}
              className={`flex flex-col items-center px-4 py-2 rounded-lg border ${
                type === data.personality
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
            "{data.description.title}"
          </h3>
          <p className="text-gray-700 text-sm">{data.description.body}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-2">Superpowers</h4>
            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
              {data.superpowers.map((item, idx) => (
                <li key={idx}>✅ {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Your Challenges</h4>
            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
              {data.challenges.map((item, idx) => (
                <li key={idx}>⚠️ {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">How to Find Balance</h4>
            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
              {data.balanceTips.map((item, idx) => (
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
