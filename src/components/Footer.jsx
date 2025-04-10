// src/components/Footer.jsx
import React from 'react';
import { Copyright, Linkedin } from 'lucide-react';
import logo from "../assets/logo3.png"; // Adjust the path to your logo image

const Footer = () => {
  return (
    <footer className="bg-[#c591f1] text-black py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* Left - Brand */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Xyra Logo" className="w-10 h-10" />
            <h1 className="text-xl font-extrabold">XYRA<span className="text-white text-xl font-bold">.</span></h1>
          </div>
          <p className="text-sm max-w-xs">Your personal <br />financial assistant.</p>
        </div>

        {/* Middle - Company */}
        <div className="space-y-3">
          <h3 className="font-bold text-lg">Company</h3>
          <ul className="text-sm space-y-1">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/faq" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Right - Contact */}
        <div className="space-y-3">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <p className="text-sm">+2348108620941</p>
          <p className="text-sm">hello@xyrafinance.com</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-10 text-sm">
        <div className="flex items-center gap-1 mb-4 md:mb-0">
          <Copyright size={14} />
          <p>2025 Xyra Global LTD. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-2">
          <Linkedin size={16} />
          <a
            href="https://www.linkedin.com/company/xyra"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

  

