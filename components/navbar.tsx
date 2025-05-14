"use client";
import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

import MernLogo from "./navbar-logo";
motion
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="w-full lg:py-3 py-4 bg-gradient-to-t from-[#00001E] to-[#023A46]">
      <div className="relative container flex justify-between items-center text-white">
        {/* nav logo */}
        <div><MernLogo/></div>

        {/* Navbar options for large screens */}
        <div className="lg:flex hidden gap-x-10 font-medium">
          <a href="#About">About</a>
          <a href="#Skills">Skills</a>
          <a href="#Experience">Experience</a>
          <a href="#Projects">Projects</a>
         
        </div>

        {/* Buttons & Mobile Menu */}
        <div>
          {/* GitHub button visible only on large screens */}
          <a href="https://github.com/viveksankar20" target="new" className="border lg:block hidden border-[#00D1EF] text-[#00D1EF] hover:text-slate-900 hover:bg-gradient-to-r hover:from-emerald-300 hover:to-sky-400 transition-all duration-700 px-5 p-1 rounded-3xl font-medium text-lg" type="button">
            GitHub
          </a>

          {/* Mobile Menu Toggle Button */}
          <button className="lg:hidden block transition duration-500" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
    
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{opacity:0,y:-10}}
            animate={{opacity:1,y:0}}
          transition={{duration:0.5}}
            className="lg:hidden transition duration-500 gap-x-10 font-medium flex flex-col absolute right-5 bg-[#00001E] text-white p-5 rounded-md text-xl gap-y-5 top-12"
          >
            <a href="#About" onClick={() => setIsOpen(false)}>About</a>
            <a href="#Skills" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#Experience" onClick={() => setIsOpen(false)}>Experience</a>
            <a href="#Projects" onClick={() => setIsOpen(false)}>Projects</a>
           

            {/* GitHub button in mobile view */}
            <button className="border border-[#00E0FF] text-[#00E0FF] px-5 p-1 rounded-3xl font-medium text-lg" type="button">
              GitHub
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
