import React, { useEffect, useState } from "react";
import videoSrc from "../assets/video.mp4";
import videoSrc2 from "../assets/video2.mp4";
import videoSrc3 from "../assets/video3.mp4";
import videoSrc4 from "../assets/video4.mp4";
import img from "../assets/img.svg";
import designers from "../assets/designers.svg";
import services from "../assets/services.svg";
import imgW from "../assets/img-w.svg";
import designersW from "../assets/designers-w.svg";
import servicesW from "../assets/service-w.svg";
import SearchBar from "../Components/SearchBar";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import shimmer from "../assets/shimmer.svg";
import FilterSection from "@/Components/FilterSection";

function Home() {
  let [active, setActive] = useState("shots");
  const activeHandler = (buttonClicked) => {
    setActive(buttonClicked);
  };

  useEffect(() => {
    console.log(active);
  }, [activeHandler]);

  const videos = [
    {
      video: { videoSrc },
      name: "Aarav Sharma",
      image: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      video: { videoSrc2 },
      name: "Maya Patel",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      video: { videoSrc3 },
      name: "Rohan Singh",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
      video: { videoSrc4 },
      name: "Anita Desai",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <div className="py-2 px-4 lg:py-5 lg:px-10">
      <div className="md:flex w-full py-8 md:p-8">
        <div className="md:w-50% ">
          <h1 className="text-center md:text-start text-4xl md:text-5xl font-bold">
            Discover the <br /> World’s Top Designers
          </h1>
          <p className="my-4 text-sm text-center md:text-start">
            Explore work from the most talented and accomplished <br />
            designers ready to take on your next project.
          </p>
          <div className="my-6">
            <div className="mb-2 flex gap-7 justify-center md:justify-start">
              <button
                onClick={() => activeHandler("shots")}
                className={`flex items-center text-sm font-semibold cursor-pointer gap-3 px-5 py-2 rounded-full transition-all duration-300 ease-in-out ${
                  active === "shots"
                    ? " bg-[#3A3546] text-white"
                    : "bg-white text-black"
                }`}>
                <img
                  src={active === "shots" ? imgW : img}
                  className="w-4"
                  alt=""
                />
                Shots
              </button>

              <button
                onClick={() => activeHandler("designers")}
                className={`flex items-center text-sm font-semibold cursor-pointer gap-3 px-5 py-2 rounded-full transition-all duration-300 ease-in-out ${
                  active === "designers"
                    ? " bg-[#3A3546] text-white"
                    : "bg-white text-black"
                }`}>
                <img
                  src={active === "designers" ? designersW : designers}
                  className="w-4"
                  alt=""
                />
                Designers
              </button>

              <button
                onClick={() => activeHandler("services")}
                className={`flex items-center text-sm font-semibold cursor-pointer gap-3 px-5 py-2 rounded-full transition-all duration-300 ease-in-out ${
                  active === "services"
                    ? " bg-[#3A3546] text-white"
                    : "bg-white text-black"
                }`}>
                <img
                  src={active === "services" ? servicesW : services}
                  className="w-4"
                  alt=""
                />
                Services
              </button>
            </div>
            <div className="my-5">
              <SearchBar
                search={
                  active === "shots"
                    ? "What type of design are you interested in?"
                    : active === "designers"
                    ? "What type of designer do you need?"
                    : "What do you need designed?"
                }
              />

              <div className="mt-5 text-xs flex gap-2 items-center ml-5">
                <p className="text-[#3A3546] font-semibold">Popular : </p>
                {active === "shots" ? (
                  <>
                    <div className="border border-neutral-400 text-neutral-400 rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-white hover:bg-neutral-400 hover:border-neutral-400 cursor-pointer">
                      dashboard
                    </div>
                    <div className="border border-neutral-400 text-neutral-400 rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-white hover:bg-neutral-400 hover:border-neutral-400 cursor-pointer">
                      landing page
                    </div>
                    <div className="border border-neutral-400 text-neutral-400 rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-white hover:bg-neutral-400 hover:border-neutral-400 cursor-pointer">
                      e-commerce
                    </div>
                    <div className="border border-neutral-400 text-neutral-400 rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-white hover:bg-neutral-400 hover:border-neutral-400 cursor-pointer">
                      logo
                    </div>
                    <div className="border border-neutral-400 text-neutral-400 rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-white hover:bg-neutral-400 hover:border-neutral-400 cursor-pointer">
                      card
                    </div>
                  </>
                ) : active === "designers" ? (
                  <>
                    <div className="border border-neutral-400 text-neutral-400 rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-white hover:bg-neutral-400 hover:border-neutral-400 cursor-pointer">
                      app design
                    </div>
                    <div className="border border-neutral-400 text-neutral-400 rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-white hover:bg-neutral-400 hover:border-neutral-400 cursor-pointer">
                      landing page
                    </div>
                    <div className="border border-neutral-400 text-neutral-400 rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-white hover:bg-neutral-400 hover:border-neutral-400 cursor-pointer">
                      web design
                    </div>
                    <div className="border border-neutral-400 text-neutral-400 rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-white hover:bg-neutral-400 hover:border-neutral-400 cursor-pointer">
                      dashboard
                    </div>
                  </>
                ) : (
                  <>
                    <div className="border border-neutral-400 text-neutral-400 rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-white hover:bg-neutral-400 hover:border-neutral-400 cursor-pointer">
                      branding
                    </div>
                    <div className="border border-neutral-400 text-neutral-400 rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-white hover:bg-neutral-400 hover:border-neutral-400 cursor-pointer">
                      log design
                    </div>
                    <div className="border border-neutral-400 text-neutral-400 rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-white hover:bg-neutral-400 hover:border-neutral-400 cursor-pointer">
                      mobile app
                    </div>
                    <div className="border border-neutral-400 text-neutral-400 rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-white hover:bg-neutral-400 hover:border-neutral-400 cursor-pointer">
                      illustration
                    </div>
                    <div className="border border-neutral-400 text-neutral-400 rounded-full py-0.5 px-2 transition-all duration-300 ease-in-out hover:text-white hover:bg-neutral-400 hover:border-neutral-400 cursor-pointer">
                      animation
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-50% hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
          tempore sunt! Molestiae facilis eveniet vitae praesentium iusto at
          ipsum dolorum aut placeat autem, quasi aspernatur a, debitis, vero
          quisquam assumenda odio mollitia culpa impedit modi. Beatae itaque
          fuga modi minus eum! Atque exercitationem saepe obcaecati
          perspiciatis, a unde corrupti maiores!
        </div>
      </div>

      <section className="bg-neutral-100 p-5 rounded-lg block items-center md:flex gap-3">
        <div className="relative w-50">
          <ShimmerButton className="text-black relative flex gap-2 border text-sm font-bold">
            <img src={shimmer} className="w-4" alt="" />
            Get Matched Now
          </ShimmerButton>
          <p className="absolute -top-1.5 -right-2 bg-[#EA4C89] text-[10px] text-white font-semibold rounded-full px-1.5 py-0.5">
            NEW
          </p>
        </div>

        <p className="px-3 font-light text-sm text-neutral-600">
          Tell us what you need and instantly get matched with world-class
          talent ready to work on your project.
        </p>
      </section>

      <section className="my-10">
        <FilterSection />
      </section>

      <div className="h-[200vh]"></div>
    </div>
  );
}

export default Home;
