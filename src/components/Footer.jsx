import React from "react";
import { newsletter, footerLinks, socialMedia } from "../constants";
import { Link } from "react-router-dom";
import payments from "../assets/images/card_img.png";

const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-no-repeat">
      <div className="container mx-auto px-4 py-10 flex items-center justify-between max-lg:flex-col max-lg:gap-8">
        <div className="flex flex-col gap-0  w-3/5 max-lg:w-full max-lg:items-center">
          <h2 className="text-custom-white text-5xl font-bold font-Zain max-md:text-4xl">
            {newsletter.titletop}
          </h2>
          <p className="text-custom-white text-md font-light font-nato opacity-70">
            {newsletter.titlebottom}
          </p>
        </div>
        <form className="max-lg:w-full flex items-center px-1 py-1 gap-1 rounded-full border-custom-green border-2 w-2/5">
          <input
            type="email"
            name="newsletter"
            placeholder="Enter your email address"
            className="bg-transparent text-base font-nato rounded-full w-[70%] outline-none text-custom-white py-3 px-2 max-md:w-[60%]"
          />
          <input
            type="submit"
            value="Get Started"
            className="cursor-pointer hover:bg-custom-green font-semibold text-xl text-custom-black text-opacity-70 max-md:w-[40%] z-10 py-3 w-[30%] px-6 bg-custom-green_dark rounded-full"
          />
        </form>
      </div>
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="h-[2px] w-full bg-custom-white bg-opacity-10"></div>
        <div className="flex justify-between items-center gap-1 w-full py-8 max-md:flex-col max-md:gap-6">
          <ul className="flex items-center gap-4">
            {footerLinks.map((flink) => (
              <li
                key={flink.label}
                className="text-custom-white font-nato font-semibold text-opacity-70 hover:text-opacity-100"
              >
                <Link to={flink.href}>{flink.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-4">
            {socialMedia.map((slink) => (
              <li
                key={slink.key}
                className="text-custom-white text-xl bg-black p-2 rounded-full border border-custom-white border-opacity-15 font-nato font-semibold text-opacity-70 hover:text-opacity-100"
              >
                <Link to={slink.href}>{<slink.iconURL />}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-custom-black">
          <div className=" container mx-auto px-4 flex items-center justify-between w-full gap-1 py-4 max-md:flex-col max-md:gap-6">
            <p className="text-sm font-light font-nato flex items-center gap-1 ">
              <span className="text-opacity-50 text-custom-white">
                Copyright © 2024. All Rights Reserved By
              </span>
              <a
                className="text-custom-green font-bold hover:text-custom-green_dark"
                target="_blank"
                href="https://github.com/iamakv95"
              >
              Ashish
              </a>
            </p>
            <img src={payments} alt="payments" />
          </div>
      </div>
    </footer>
  );
};

export default Footer;
