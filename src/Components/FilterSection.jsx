import React from "react";
import arrow from "../assets/down.svg";
import ScrollNav from "./ScrollNav";

function FilterSection() {
  return (
    <>
      <div className="w-full py-6 md:px-8  flex justify-between items-center">
        <div className="border rounded border-neutral-200 py-2 px-3 flex items-center gap-2">
          Popular <img src={arrow} alt="" className="h-4" />
        </div>

        <div className="w-[70%] hidden md:block">
          <ScrollNav />
        </div>

        <div className="border rounded-full border-neutral-200 py-2 px-5 flex items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-filter"
            viewBox="0 0 16 16">
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
          </svg>
          Filter
        </div>
      </div>
      <div className="w-full md:hidden block">
        <ScrollNav />
      </div>
    </>
  );
}

export default FilterSection;
