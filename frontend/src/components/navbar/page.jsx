import { React, useState } from "react";
import { motion } from "motion/react";

const navItems = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Contact",
]

const Navbar = ({ refs, active, setActive }) => {

    const handleClick = (item) => {
        setActive(item);
        refs[item]?.current?.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <div className="bg-transparent bg-opacity-10 backdrop-blur-sm fixed top-0 z-50 w-screen h-20">
        <div className="flex justify-center items-center gap-1 sm:gap-8 md:gap-12 h-full">
          {navItems.map((navItem) => (
            <div key={navItem} className="relative">
              <h2
                className={`text-xs sm:text-lg md:font-xl lg:font-2xl font-semibold cursor-pointer px-2 py-1 ${active === navItem ? 'text-blue-600' : 'text-white'}`}
                onClick={() => handleClick(navItem)}
              >
                {navItem}
              </h2>
              {active === navItem && (
                <motion.div
                  layoutId="nav-border"
                  className="absolute inset-0 border-b-2 border-blue-600 "
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                />
              )}
            </div>
          ))}
        </div>
    </div> 
  )
};

export default Navbar; 