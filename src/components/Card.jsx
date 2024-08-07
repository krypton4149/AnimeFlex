import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imgURL, imgALT, href, title, type, ranking }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <Link className="w-full" to={href}>
          <img
            src={imgURL}
            alt={imgALT}
            className="w-full h-[420px] object-fill rounded-md"
          />
        </Link>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <h3 className="text-custom-white text-lg font-semibold font-nato">
          <Link to={href}>
            {title && title.length > 30 ? `${title.substring(0, 30)} ...` : title}
          </Link>
        </h3>
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="bg-transparent w-max rounded-sm pt-1 pb-0.5 text-sm uppercase font-Zain px-3 text-custom-white border-2 border-custom-green"
          >
            {type}
          </Link>
          <span className="text-custom-white text-sm">Ranking: {ranking}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
