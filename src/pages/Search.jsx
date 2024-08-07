import React, { useEffect, useState } from "react";
import { fetchFromAPi } from "../api/fetchFromApi";
import { Card, PageTitle } from "../components";
import { useLocation, useNavigate } from "react-router-dom";

const Search = () => {
  const [animes, setAnimes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const [hasMoreResults, setHasMoreResults] = useState(true);
  const searchTerm = new URLSearchParams(useLocation().search).get("query");
  const pageSize = 12;

  useEffect(() => {
    if (!searchTerm) {
      navigate("/"); 
      return;
    }
    fetchFromAPi(
      `anime?page=${currentPage}&size=${pageSize}&search=${searchTerm}&sortBy=ranking&sortOrder=asc`
    ).then((data) => {
      setAnimes(data.data);
      setHasMoreResults(data.data.length === pageSize);
    });
  }, [currentPage, searchTerm]);

  const handleNextPage = () => {
    if (hasMoreResults) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
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
        <PageTitle pagetitle="Search Results for:" searchTerm={searchTerm} />
      </div>
      <div className="bg-gradient-custom py-12">
        <div className="container px-4 mx-auto grid grid-cols-4 gap-12 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
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
            className={`bg-custom-black text-custom-white px-4 py-2 font-nato border-2 rounded-full border-custom-green_dark ${
              currentPage === 1 && "opacity-50 cursor-not-allowed"
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={!hasMoreResults}
            className={`bg-custom-black text-custom-white px-4 py-2 font-nato border-2 rounded-full border-custom-green_dark ${
              !hasMoreResults && "opacity-50 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
};

export default Search;
