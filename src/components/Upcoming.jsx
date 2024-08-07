import React, { useCallback, useEffect, useState } from "react";
import { ContentSlider } from "../components";
import { fetchFromAPi } from "../api/fetchFromApi";

const Upcoming = () => {
  const [slides, setSlides] = useState([]);
  const [selectGenres, setSelectGenres] = useState("Action");

  useEffect(() => {
    fetchFromAPi(
      `anime?page=1&size=10&genres=${selectGenres}&sortBy=ranking&sortOrder=asc`
    ).then((data) => setSlides(data.data));
  }, [selectGenres]);
  const handleGenreChange = useCallback((genre) => {
    setSelectGenres(genre);
  }, []);


  return (
    <div className="container mx-auto py-24 px-4">
      <div className="flex items-end justify-between max-lg:flex-col max-lg:justify-center max-lg:gap-8">
        <div className="flex flex-col gap-2 w-full max-lg:items-center">
          <p className="text-custom-green text-lg font-bold font-Zain">
            ONLINE STREAMING
          </p>
          <h3 className="text-custom-white text-3xl font-bold font-nato">
            Upcoming Anime
          </h3>
        </div>
        <div className="flex items-center gap-6 w-full justify-end max-lg:justify-center max-md:overflow-y-scroll">
          {["Action", "Adventure", "Drama", "Fantasy"].map((genre) => (
            <button
              key={genre}
              onClick={() => handleGenreChange(genre)}
              className={`bg-custom-black w-max rounded-full pt-2 pb-1 text-2xl font-Zain px-6 text-custom-white border-2  hover:border-custom-green ${
                selectGenres === genre
                  ? "border-custom-green"
                  : "border-gray-700"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <ContentSlider slides={slides} />
      </div>
    </div>
  );
};

export default Upcoming;
