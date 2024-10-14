import React from "react";
import MyButton from "./MyButton/MyButton";
import { Link } from "react-router-dom";
const Hero: React.FC = () => {
  return (
    <section className="font-outfit overflow-hidden">
      <div className="container">
        <div className="flex mt-[84px] md:mt-[30px] ">
          <div className="flex-1 flex flex-col items-start ">
            <span className="bg_second_red text-[18px]  flex gap-1 items-center px-[20px] md:px-[15px] md:py-[5px] py-[7px] rounded-full mb-[10px] z-[-10]">
              <span className="text_red opacity-80 md:text-[14px]">
                {" "}
                Fast Delivery
              </span>{" "}
              <img className="md:w-[30px]" src="/deliver.png" alt="deliver" />
            </span>

            <h1 className="text-3xl font-bold text-[#141123] text-[80px] leading-[120%] lg:text-[60px] md:text-[30px]">
              Fastest <span className="text_red">Delivery</span> & Esay{" "}
              <span className="text_red">Pickup.</span>
            </h1>

            <p className="text-[20px] leading-[150%] text-[#241415] opacity-60 mt-[20px] md:mt-[15px] lg:text-[18px] md:text-[14px] z-[-10] md:w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              tempus felis vitae sit est quisque.
            </p>

            <div className="flex items-center my-[50px] lg:my-[40px] md:my-[20px] gap-[30px] md:gap-[10px]">
              <MyButton
                className={
                  "py-[20px] px-[57px] text-[16px] lg:px-[37px] lg:py-[15px] md:px-[12px] md:py-[7px] text-nowrap md:text-[14px]"
                }
              >
                Order Now
              </MyButton>
              <button className="flex items-center gap-[13px] md:gap-[5px]">
                <span className="bg_second_red p-[13px] rounded-full flex items-center justify-center md:w-[40px]  ">
                  <img src="/play.svg" alt="play" />
                </span>
                <span className="text-[16px] text-nowrap">Watch Video</span>
              </button>
            </div>
            <Link to="/">
              <div className="flex gap-[20px] md:flex-col sm:flex-row">
                <span>
                  <img
                    className="lg:w-[140px]"
                    src="/avatar_icons.png"
                    alt="avatars"
                  />
                </span>
                <div className="flex flex-col">
                  <strong className="text-[14px]">Our Happy Customer</strong>
                  <div className="flex gap-[10px]">
                    <img className="w-[20px]" src="/star.svg" alt="star" />
                    <span className="md:text-[14px] text-nowrap">
                      <strong>4.8</strong> (10.08k Review)
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex-1 relative z-[-10] sm:hidden">
            <img
              className=" scale-[1.7] ml-[-30px] mt-[60px] lg:scale-[1.2] md:scale-150"
              src="/hero_img.png"
              alt="hero"
            />

            <div className="absolute bottom-[5px] right-0 z-10 p-[10px] border-[1px] inline-block rounded-[9px] border-white ">
              <div className="burger_card flex items-center py-[3px] px-[6px] w-[269px] md:w-[200px] ">
                <img src="/burger_icon.png" alt="burger" />
                <div>
                  <h6 className="md:text-[14px]">
                    Quarter Pounder with Cheese
                  </h6>
                  <span className="mt-[5px]">
                    <img src="/stars.png" alt="stars" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
