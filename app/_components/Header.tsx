import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      >

    <header className="bg-black">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold lg:text-3xl">ERO.IO</h1>
        
        {/* Desktop Navigation Links (Hidden on Mobile) */}
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-4 text-sm">
            {["About", "Careers", "History", "Services", "Projects"].map((item) => (
              <li key={item}>
                <a className="text-white transition hover:text-gray-100" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons (Visible on All Screens) */}
        <div className="flex items-center gap-2">
          <div className="block rounded-md bg-gray-800 px-3 py-2 text-sm font-medium text-white cursor-pointer hover:bg-gray-700 transition">
            <LoginLink postLoginRedirectURL="/dashboard">Login</LoginLink>
          </div>

          <div className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-800 transition cursor-pointer hover:text-gray-900">
            <RegisterLink>Register</RegisterLink>
          </div>
        </div>
      </div>
    </header>
            </motion.nav>
  );
}

export default Header;
