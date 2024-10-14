import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyButton from "./MyButton/MyButton";

interface NavbarProps {
  path?: string;
}

const Navbar: React.FC<NavbarProps> = ({ path }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const body = window.document.querySelector("body");
    if (body) {
      if (isOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }
  }, [isOpen]);

  return (
    <nav className="py-[17px] font-outfit overflow-x-hidden ">
      <div className="container">
        <div className="flex justify-between">
          <div className=" absolute top-[-500px] md:top-[-200px] left-0 w-full h-full z-[-10]">
            <img src="/top_gradient.svg" alt="" />
          </div>
          <Link to={"/"}>
            <div className="lg:w-[129px] md:w-[100px] relative z-20">
              <img className="w-full" src="/logo.svg" alt="logo" />
            </div>
          </Link>
          <ul className=" md:hidden flex items-center gap-[30px] text-[#241415] text-[16px]">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>Service</Link>
            </li>
            <li>
              <Link to={"/"}>Menu</Link>
            </li>
            <li>
              <Link to={"/"}>Help</Link>
            </li>
          </ul>
          <div className="flex items-center md:gap-[10px] gap-[30px] md:hidden">
            <img src="/src.svg" alt="src" />
            <img src="/basket.svg" alt="basket" />
            {path === "add" ? (
              <Link to={"/"}>
                <MyButton className={"flex gap-1 md:px-[10px] md:py-[8px]"}>
                  <img src="/icon_login.svg" alt="plus" />
                  <span>Home</span>
                </MyButton>
              </Link>
            ) : path === "edit" ? (
              <Link to={"/"}>
                <MyButton className={"flex gap-1 md:px-[10px] md:py-[8px]"}>
                  <img src="/icon_login.svg" alt="plus" />
                  <span>Home</span>
                </MyButton>
              </Link>
            ) : (
              <Link to={"/add"}>
                <MyButton className={"flex gap-1 md:px-[10px] md:py-[8px]"}>
                  <img src="/plus.svg" alt="plus" />
                  <span>Add food</span>
                </MyButton>
              </Link>
            )}
          </div>
          <button
            className={`menu w-[40px]  ${
              isOpen ? " opened" : null
            }  z-20 min-[767px]:hidden`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Main Menu"
          >
            <svg width="40" height="40" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
          <div
            className="bg-white absolute top-0 left-0 w-full h-screen transition z-10"
            style={{
              transform: isOpen ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            <div className="bg-[#f5474a17] w-full h-screen flex flex-col justify-between p-[20px] pt-20">
              <ul className="  flex flex-col items-start  gap-[30px] text-[#241415] text-[22px]">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/"}>Service</Link>
                </li>
                <li>
                  <Link to={"/"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/"}>Help</Link>
                </li>
              </ul>
              <div className="flex items-center md:gap-[10px] gap-[30px] justify-end">
                <img src="/src.svg" alt="src" />
                <img src="/basket.svg" alt="basket" />
                {path === "add" ? (
                  <Link to={"/"}>
                    <MyButton className={"flex gap-1 md:px-[10px] md:py-[8px]"}>
                      <img src="/icon_login.svg" alt="plus" />
                      <span>Home</span>
                    </MyButton>
                  </Link>
                ) : path === "edit" ? (
                  <Link to={"/"}>
                    <MyButton className={"flex gap-1 md:px-[10px] md:py-[8px]"}>
                      <img src="/icon_login.svg" alt="plus" />
                      <span>Home</span>
                    </MyButton>
                  </Link>
                ) : (
                  <Link to={"/add"}>
                    <MyButton className={"flex gap-1 md:px-[10px] md:py-[8px]"}>
                      <img src="/plus.svg" alt="plus" />
                      <span>Add food</span>
                    </MyButton>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
