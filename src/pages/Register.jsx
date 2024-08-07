import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main>
      <div className="mt-[-95px] pt-24 bg-login h-screen bg-right max-lg:bg-center bg-no-repeat bg-cover relative text-white flex flex-col items-center justify-center gap-10">
        <div className="absolute inset-0 bg-gradient-custom opacity-95"></div>
        <form className="flex flex-col gap-5 z-30 w-1/2 container mx-auto items-center px-4 max-lg:w-full">
          <input
            type="text"
            placeholder="Username"
            className="w-1/2 max-md:w-full text-custom-black border-2 border-custom-white rounded-md py-2 px-4 font-light text-xl font-nato outline-none "
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-1/2 max-md:w-full text-custom-black border-2 border-custom-white rounded-md py-2 px-4 font-light text-xl font-nato outline-none "
          />
          <input
            type="password"
            placeholder="Password"
            className="w-1/2 max-md:w-full border-2 text-custom-black border-custom-white rounded-md py-2 px-4 font-light text-xl font-nato outline-none"
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="w-1/2 max-md:w-full border-2 text-custom-black border-custom-white rounded-md py-2 px-4 font-light text-xl font-nato outline-none"
          />
          <input
            type="submit"
            value="Register"
            className="w-1/2 max-md:w-full cursor-pointer hover:bg-custom-green_dark hover:text-custom-black text-custom-green border-2 border-custom-green_dark rounded-md py-2 px-4 font-semibold text-3xl font-Zain"
          />
        </form>
        <div className="z-30">
          <Link
            to="/login"
            className="text-custom-white opacity-90 "
          >
            Already have a account?
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Register;
