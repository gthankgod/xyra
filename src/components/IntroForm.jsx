import React, { useState } from "react";
import { personas } from "../constants";

const IntroForm = ({ onComplete }) => {
    const [formData, setFormData] = useState({
      nickname: "",
      email: "",
      persona: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (onComplete) {
        await onComplete(formData);
      }
    };
  
    return (
      <form
        onSubmit={handleSubmit}
        className="p-6 space-y-6 max-w-lg mx-auto mt-16 mb-16 bg-white shadow-lg rounded-lg animate-fade-in"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome My Padi
        </h2>
        <input
          type="text"
          name="nickname"
          placeholder="Preferred name"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          onChange={handleChange}
          required
        />
        <select
          name="persona"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          onChange={handleChange}
          required
        >
          <option value="">Select a Persona</option>
          {personas.map((persona) => (
            <option key={persona.name} value={persona.name} title={persona.description}>
              {persona.name} {persona.avatar}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full bg-purple-500 text-white font-bold py-3 rounded-lg hover:bg-purple-600 transition-all duration-300"
        >
          Continue
        </button>
      </form>
    );
  };


export default IntroForm;
