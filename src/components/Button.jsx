import React from "react";
import { Link } from "react-router-dom";

const Button = ({ btnTitle, btnURL, btnBG, btICON }) => {
  return (
    <Link
      to={btnURL}
      className={`${
        btnBG ? btnBG : "bg-transparent"
      } w-max rounded-full pt-2 pb-1 text-2xl font-Zain px-6 text-custom-white border-2 border-custom-green hover:bg-custom-green hover:text-custom-black `}
    >
      {btnTitle}
    </Link>
  );
};

export default Button;
