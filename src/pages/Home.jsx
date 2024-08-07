import React, { useEffect, useState } from "react";
import { Hero,Upcoming } from "../components";

const Home = () => {

  return (
    <main>
      <div className="mt-[-95px] bg-hero h-screen bg-right max-lg:bg-center bg-no-repeat bg-cover relative text-white flex flex-col items-center justify-center gap-10">
        <div className="absolute inset-0 bg-gradient-custom opacity-75"></div>
        <Hero />
      </div>
      <div className="bg-gradient-custom">
       <Upcoming/>
     </div>
    </main>
  );
};

export default Home;
