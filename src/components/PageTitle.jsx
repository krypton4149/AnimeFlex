import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const PageTitle = ({ pagetitle,searchTerm }) => {
  const location = useLocation();
  const pathname = location.pathname;
  console.log("pathname", pathname);

  const pageName = pathname.split("/").filter(Boolean).pop();
  console.log("page name", pageName);
  return (
    <div className="container z-20 mx-auto flex gap-20 mt-20">
      <div className="w-full flex flex-col gap-1 items-center">
        <h1 className="text-7xl leading-tight font-Zain font-black text-custom-white">
          {pagetitle}
        </h1>
        {pageName !== "search" && (
          <p className="flex items-center gap-1 text-md leading-none font-nato text-custom-white capitalize">
            <span className="text-custom-green_dark">
              <Link to="/">Home</Link>
            </span>
            <BiChevronRight /> {pageName}
          </p>
        )}

        {pageName == "search" && (
          <p className="flex items-center gap-1 text-xl leading-none font-nato text-custom-green capitalize">
            {searchTerm}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageTitle;
