import React from "react";
import { AiOutlineHome, AiOutlineCamera } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-16 md:w-20 lg:w-24 bg-gray-800 text-white flex flex-col items-center py-6 space-y-6">
      <div className="flex flex-col items-center space-y-2">
        <AiOutlineHome className="text-2xl" />
        <span className="text-xs hidden md:block">Home</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <AiOutlineCamera className="text-2xl" />
        <span className="text-xs hidden md:block">Cameras</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <BiLockAlt className="text-2xl" />
        <span className="text-xs hidden md:block">Locks</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <FaCarSide className="text-2xl" />
        <span className="text-xs hidden md:block">Garage</span>
      </div>
    </nav>
  );
};

export default Navbar;
