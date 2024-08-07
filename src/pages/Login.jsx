import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main>
      <div className="mt-[-95px] pt-32 bg-login h-screen bg-right max-lg:bg-center bg-no-repeat bg-cover relative text-white flex flex-col items-center justify-center gap-10">
        <div className="absolute inset-0 bg-gradient-custom opacity-95"></div>
        <form className="flex flex-col gap-5 z-30 w-1/2 container mx-auto items-center max-lg:w-full px-4">
          <input
            type="text"
            placeholder="Enter your username"
            className="w-1/2 max-md:w-full text-custom-black border-2 border-custom-white rounded-md py-2 px-4 font-light text-xl font-nato outline-none "
          />
          <input
            type="password"
            placeholder="****"
            className="w-1/2 max-md:w-full border-2 text-custom-black border-custom-white rounded-md py-2 px-4 font-light text-xl font-nato outline-none"
          />
          <input
            type="submit"
            value="Log In"
            className="w-1/2 max-md:w-full cursor-pointer hover:bg-custom-green_dark hover:text-custom-black text-custom-green border-2 border-custom-green_dark rounded-md py-2 px-4 font-semibold text-3xl font-Zain"
          />
        </form>
        <div className="z-30 flex flex-col justify-center items-center gap-6">
          <Link
            to="/forgetpassword"
            className="text-custom-white opacity-70  hover:opacity-90 z-30"
          >
            Forget password
          </Link>
          <p className="w-full relative h-[2px] bg-custom-white">
            <span className="absolute bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1">
              Or
            </span>
          </p>
          <Link
            to="/register"
            className="cursor-pointer bg-custom-green_dark text-custom-black hover:bg-custom-green border-none rounded-md py-3 px-6 font-semibold text-xl font-nato"
          >
            Create a account
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
