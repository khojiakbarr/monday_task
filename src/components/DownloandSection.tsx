import React from "react";
import { Link } from "react-router-dom";

const DownloandSection: React.FC = () => {
  return (
    <section className="mt-[100px] relative">
      <div className="container">
        <div className="flex items-center justify-between gap-[30px]">
          <div className="flex-1 w-[500px]">
            <h2 className="text-[40px] text-[#241415] font-bold md:text-[25px] sm:text-[20px]">
              Download our Mobile App
            </h2>
            <p className="text-[20px] text-[#241415] opacity-60 mt-[16px] mb-[50px] md:mt-[14px] md:mb-[15px] md:text-[14px] sm:text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
              cum purus bibendum risus nibh cursus integer dolor, commodo. Amet,
              aliquam condimentum.
            </p>
            <div className="flex gap-[20px]">
              <Link to={"/"}>
                <button className="bg-black py-[10px] px-[20px] rounded-[10px] sm:px-[7px] sm:py-[5px] sm:rounded-sm md:rounded-md md:px-[15px] md:py-[7px]">
                  <img src="/apple.png" alt="app store" />
                </button>
              </Link>
              <Link to={"/"}>
                <button>
                  <img src="/playmarket.png" alt="play market" />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <img src="/iphone.png" alt="iphone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloandSection;
