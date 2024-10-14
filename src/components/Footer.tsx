import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex justify-between items-center mt-[100px] mb-[24px] md:flex-col md:gap-[20px]">
          <Link to={"/"}>
            <img src="/logo.svg" alt="logo" />
          </Link>
          <ul className="flex justify-center gap-[60px] md:gap-[20px]">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>Sevice</Link>
            </li>
            <li>
              <Link to={"/"}>Blog</Link>
            </li>
            <li>
              <Link to={"/"}>Contact Us</Link>
            </li>
          </ul>
          <ul className="flex gap-[30px]">
            <li>
              <Link to={"/"}>
                <img src="" />
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <FaFacebook size={20} />
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <FaInstagram size={20} />
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <FaGithub size={20} />
              </Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex justify-between my-[30px] md:flex-col md:items-center md:gap-[20px]">
          <span>© Copyright 2022, All Rights Reserved</span>
          <span>Privacy Policy Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
