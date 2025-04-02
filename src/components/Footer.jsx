import logo from "../assets/logo.png"; // Adjust the path to your logo image

const Footer = () => {
    return (
      <footer className="bg-[#B388EB] text-black py-10 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
          
          {/* Left Section - Logo & Tagline */}
          <div className="md:w-1/3">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Xyra Logo" className="h-10" />
              <span className="font-bold text-lg">XYRA.</span>
            </div>
            <p className="mt-2 text-lg font-semibold">
              Your personal <br /> financial assistant.
            </p>
            <p className="mt-6 text-sm">
              © 2025 Xyra Global LTD. All rights reserved.
            </p>
          </div>
  
          {/* Middle Section - Company Links */}
          <div className="md:w-1/3 flex flex-col mt-6 md:mt-0">
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>
  
          {/* Right Section - Contact Info */}
          <div className="md:w-1/3 flex flex-col mt-6 md:mt-0">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <p className="mt-2">+2348108620941</p>
            <p className="mt-1">hello@xyrafinance.com</p>
            <a href="#" className="mt-4 flex items-center space-x-2 hover:underline">
              <img src="/linkedin-icon.svg" alt="LinkedIn" className="h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
  
        </div>
      </footer>
    );
  };
  
  export default Footer;
  

