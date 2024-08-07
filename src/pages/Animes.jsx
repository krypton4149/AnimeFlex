import React, { useCallback, useEffect, useState } from "react";
import { fetchFromAPi } from "../api/fetchFromApi";
import { Card, PageTitle } from "../components";

const Animes = () => {
  const [animes, setAnimes] = useState([]);
  const [selectGenres, setSelectGenres] = useState("Action");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Number of items per page

  useEffect(() => {
    fetchFromAPi(
      `anime?page=${currentPage}&size=${pageSize}&genres=${selectGenres}&sortBy=ranking&sortOrder=asc`
    ).then((data) => setAnimes(data.data));
  }, [selectGenres, currentPage]);

  const handleGenreChange = useCallback((genre) => {
    setSelectGenres(genre);
    setCurrentPage(1); // Reset to the first page when genre changes
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <main>
      <div className="mt-[-95px] bg-pageTitle h-[75vh] bg-right max-lg:bg-center max-lg:h-[40vh] bg-no-repeat bg-cover relative text-white flex flex-col items-center justify-center gap-10">
        <div className="absolute inset-0 bg-gradient-custom opacity-85"></div>
        <PageTitle pagetitle = "Animes"/>
      </div>
      <div className="bg-gradient-custom py-24 px-4">
        <div className="container mx-auto flex items-end justify-between max-lg:flex-col max-lg:gap-6">
          <div className="flex flex-col gap-2 max-lg:w-full max-xl:items-center">
            <p className="text-custom-green text-lg font-bold font-Zain">
              ONLINE STREAMING
            </p>
            <h3 className="text-custom-white text-3xl font-bold font-nato">
              New Released Anime
            </h3>
          </div>
          <div className="flex items-center gap-6 max-lg:w-full max-lg:justify-start max-md:overflow-y-scroll">
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
        <div className="mt-10 container mx-auto grid grid-cols-4 gap-12 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {animes.map((anime, index) => (
            <Card
              key={index}
              imgURL={anime.image}
              imgALT={anime.title}
              href={`/animes/${anime._id}`}
              title={anime.title}
              type={anime.type}
              ranking={anime.ranking}
            />
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-20">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="bg-custom-black text-custom-white px-4 py-2 font-nato border-2 rounded-full border-custom-green_dark"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="bg-custom-black text-custom-white px-4 py-2 font-nato border-2 rounded-full border-custom-green_dark"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
};

export default Animes;
