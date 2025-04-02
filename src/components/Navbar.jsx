import { Menu, X } from 'lucide-react'
import React from 'react'
import logo from '../assets/logo.png' // Adjust the path to your logo image

const Navbar = () => {
    const [mobileDrawer, setMobileDrawer] = React.useState(false);
    const toggleMobileDrawer = () => {
        setMobileDrawer(!mobileDrawer);
    };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-transparent">
        <div className="container px-4 mx-auto relative text-sm ">
            <div className="flex justify-between item-center">
                <div className="flex items-center flex-shrink-0">
                <img src={logo} alt="logo" className="h-10 w-auto mr-2" />
                </div>
                 <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="/quiz" className="bg-gradient-to-r from-purple-400 py-2 px-3 rounded-md">TAKE THE QUIZ</a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleMobileDrawer}>
                        {mobileDrawer ? <X className="text-neutral-300" /> : <Menu className="text-neutral-300" />}
                    </button>
                </div>
            </div>
            {mobileDrawer && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <div className="flex space-x-6">
                        <a href="/" className="py-2 px-3 border rounded-md text-black">Home</a>
                        <a href="/quiz" className="bg-gradient-to-r from-orange-500 py-2 px-3 rounded-md">Take the Quiz</a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar

