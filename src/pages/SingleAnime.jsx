import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPi } from "../api/fetchFromApi";
import { BiData, BiPlay, BiPlayCircle, BiShareAlt } from "react-icons/bi";
import { Button, ContentSlider } from "../components";

const SingleAnime = () => {
  const { id } = useParams();
  const [animeContent, setAnimeContent] = useState("");
  const [slides, setSlides] = useState([]);
const [selectedGenre, setSelectedGenre] = useState("")


  useEffect(() => {
    fetchFromAPi(`anime/by-id/${id}`).then((data) => {
      setAnimeContent(data);
      if (data && data.genres && data.genres.length > 0) {
        setSelectedGenre(data.genres[0]);
      }
    });
  }, [id]);

  useEffect(() => {
    fetchFromAPi(
      `anime?page=1&size=10&genres=${selectedGenre}&sortBy=ranking&sortOrder=asc`
    ).then((data) => setSlides(data.data));
  }, [id]);

  return (
    <main className="flex flex-col h-auto">
      <div
        style={{ backgroundImage: `url(${animeContent.image})` }}
        className={`mt-[-95px] pt-20 h-screen max-lg:h-auto bg-right bg-no-repeat bg-cover relative text-white flex flex-col items-center justify-center gap-10`}
      >
        <div className="absolute inset-0 bg-gradient-custom opacity-85"></div>
        <div className="container mx-auto px-4 flex gap-14 z-30 w-full items-center max-lg:flex-col max-lg:py-20">
          <div className="w-[21%] relative cursor-pointer max-lg:w-full">
            <BiPlayCircle className="z-30 text-6xl opacity-1 text-custom-white absolute top-1/2 right-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="absolute inset-0 bg-gradient-custom opacity-35"></div>
            <img
              src={animeContent.image}
              alt={animeContent.title}
              className="w-full h-[450px] object-fill rounded-md"
            />
          </div>
          <div className="flex flex-col gap-4 w-1/2 max-lg:w-full">
            <p className="text-lg font-bold uppercase font-nato text-custom-green">
              New Episode
            </p>
            <h1 className="text-6xl font-bold font-Zain">
              {animeContent && animeContent.title
                ? animeContent.title.length > 30
                  ? `${animeContent.title.substring(0, 30)} ...`
                  : animeContent.title
                : "Title not available"}
            </h1>
            <ul className="flex items-center gap-4">
              <li className="bg-custom-white text-custom-black font-semibold font-nato py-1 px-2 text-sm">
                PG 18
              </li>
              <li className="bg-transparent border-2 border-custom-white  text-custom-white font-semibold font-nato py-1 px-2 text-xs">
                HD
              </li>
              {/* <li>{animeContent.genres[0]}, {animeContent.genres[1]}</li> */}
              <li className="flex items-center gap-1 text-custom-white font-semibold font-nato py-1 px-2 text-base">
                <BiData className="text-2xl text-custom-green" /> Episodes:
                {animeContent.episodes}
              </li>
            </ul>
            <p className="text-lg text-custom-white">
              {animeContent && animeContent.synopsis
                ? animeContent.synopsis.length > 200
                  ? `${animeContent.synopsis.substring(0, 200)} ...`
                  : animeContent.synopsis
                : "Synopsis not available"}
            </p>
            <div className="mt-5 w-3/4 max-lg:w-full bg-opacity-45 flex items-center justify-between rounded-md bg-custom-black border border-gray-800 p-4">
              <div className="flex flex-col items-center gap-1">
                <BiShareAlt className="text-lg" />
                <p className="font-bold font-nato text-custom-white opacity-85 max-lg:text-sm">
                  Share
                </p>
              </div>
              <div className="h-[90%] min-h-[50px] w-[2px] bg-custom-white bg-opacity-45"></div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-xl font-nato text-custom-white opacity-85 max-lg:text-lg">
                  Prime Video
                </p>
                <p className="text-sm font-nato text-custom-white opacity-85 max-lg:text-xs">
                  streaming now
                </p>
              </div>
              <Button btnTitle="Watch Now" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-custom py-16">
        <div className="container mx-auto px-4 flex flex-col gap-8">
        <h3 className="text-custom-white text-3xl font-bold font-nato">
            Related Anime
          </h3>
          <ContentSlider slides={slides} />
        </div>
      </div>
    </main>
  );
};

export default SingleAnime;
