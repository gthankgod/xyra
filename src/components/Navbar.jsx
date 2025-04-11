import { Menu, X } from "lucide-react";
import React from "react";
import logo from "../assets/logo.png"; // Adjust the path to your logo image
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [mobileDrawer, setMobileDrawer] = React.useState(false);
  const toggleMobileDrawer = () => {
    setMobileDrawer(!mobileDrawer);
  };

  const hideTakeQuiz = location.pathname === "/quiz" || location.pathname === "/submit-form";

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-transparent">
      <div className="container px-4 mx-auto relative text-sm ">
        <div className="flex justify-between item-center">
          <div className="flex items-center flex-shrink-0">
            <a href="/">
              <img src={logo} alt="logo" className="h-10 w-auto mr-2" />
            </a>
          </div>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
           {!hideTakeQuiz && (
              <a
                href="/start"
                className="bg-purple-400 text-black font-semibold py-2 px-3 rounded-md"
              >
                TAKE THE QUIZ
              </a>
            )}
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleMobileDrawer}>
              {mobileDrawer ? (
                <X className="text-neutral-300" />
              ) : (
                <Menu className="text-neutral-300" />
              )}
            </button>
          </div>
        </div>
        {mobileDrawer && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <div className="flex space-x-6">
              <a href="/" className="py-2 px-3 border rounded-md text-black">
                Home
              </a>
              <a
                href="/start"
                className="bg-gradient-to-r from-orange-500 py-2 px-3 rounded-md"
              >
                Take the Quiz
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
