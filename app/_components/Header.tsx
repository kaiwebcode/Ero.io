import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/ero.io.png";

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="bg-black bg-center bg-no-repeat"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo with hover effect */}
          <Link href="/" className="flex items-center">
            <Image 
              src={logo} 
              alt="ERO.IO Logo" 
              width={60} 
              height={60} 
              className="transition-transform duration-300 hover:scale-110"
            />
            <h1 className="ml-2 text-white text-xl font-bold tracking-tight hidden md:flex">ERO.IO</h1>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-10 md:space-x-5">
            {["About", "Careers", "History", "Services", "Projects"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </nav>
            {/* mobile nav buttons */}
          <div>

          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-medium py-2 px-4 rounded transition">
              <LoginLink postLoginRedirectURL="/dashboard">Login</LoginLink>
            </button>
            <button className="bg-white hover:bg-gray-100 text-black font-medium py-2 px-4 rounded transition">
              <RegisterLink>Register</RegisterLink>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
       
    </motion.header>
  );
}

export default Header;