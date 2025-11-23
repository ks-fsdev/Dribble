import React from "react";

function ScrollNav() {
  return (
    <div>
      <div className="flex items-center justify-center gap-3 overflow-x-scroll w-full custom-scrollbar-hide relative">
        <div className=" text-black font-semibold rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-neutral-400 cursor-pointer">
          Discover
        </div>
        <div className=" text-black font-semibold rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-neutral-400 cursor-pointer">
          Animation
        </div>
        <div className=" text-black font-semibold rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-neutral-400  cursor-pointer">
          Branding
        </div>
        <div className=" text-black font-semibold rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-neutral-400  cursor-pointer">
          Illustration
        </div>
        <div className=" text-black font-semibold rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-neutral-400  cursor-pointer">
          Mobile
        </div>
        <div className=" text-black font-semibold rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-neutral-400  cursor-pointer">
          Print
        </div>
        <div className=" text-black font-semibold rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-neutral-400  cursor-pointer">
          Product Design
        </div>
        <div className=" text-black font-semibold rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-neutral-400  cursor-pointer">
          Typography
        </div>
        <div className=" text-black font-semibold rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-neutral-400  cursor-pointer">
          Web Design
        </div>
        <div className="absolute top-0 left-0 bottom-0 right-0 custom-header-shadow z-50"></div>
      </div>
    </div>
  );
}

export default ScrollNav;
