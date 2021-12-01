import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../componet/Card";
import Sliker from "../componet/Sliker";

function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=682a2911788370c5648bfd6c26712e0f&language=en-US&page=1"
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, []);

  return (
    <div
      style={{ backgroundColor: "black" }}
      className="flex flex-col items-center"
    >
      <div style={{ width: "50%" }}>
        {movies ? <Sliker movies={movies} /> : null}
        <div>
          <div>Now Playing List</div>
        </div>

        <div>
          {movies
            ? movies.map((movie) => <Card key={movie.id} movie={movie} />)
            : null}
        </div>
      </div>
    </div>
  );
}

export default Home;
