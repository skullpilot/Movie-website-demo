import React from "react";
import { Image } from "antd";

function Card(movie) {
  //console.log(movie.movie);
  return (
    <div className="flex flex-row bg-gray-900 items-center border-b-2 border-fuchsia-600">
      <div className="w-24 m-3">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`}
        />
      </div>
      <div className="max-w-lg h-36 flex flex-col justify-center">
        <div className="text-base text-white m-2 font-semibold">
          Name: {movie.movie.original_title}
        </div>
        <div className="text-base text-white m-2 font-semibold">
          Release Date: {movie.movie.release_date}
        </div>
        <div className="text-base text-white m-2 font-semibold">
          Rating: {movie.movie.vote_average}
        </div>
      </div>
    </div>
  );
}

export default Card;
