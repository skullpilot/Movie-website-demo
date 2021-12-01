import { Carousel, Image } from "antd";
import React from "react";

function Sliker(movies) {
  //console.log(movies.movies);
  return (
    <div className="max-w-3xl">
      <Carousel autoplay>
        {movies.movies
          ? movies.movies.map((movie) => (
              <div key={Date.now() + 1} className="flex flex-col item-center">
                <Image
                  key={Date.now() + 10}
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                />
                <div
                  key={Date.now() + 100}
                  className="text-lg text-white font-medium"
                >
                  {movie.original_title}
                </div>
              </div>
            ))
          : null}
      </Carousel>
    </div>
  );
}

export default Sliker;
