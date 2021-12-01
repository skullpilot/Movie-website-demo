import { Pagination, Radio } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardMeta from "../componet/CardMeta";

function MoviePage() {
  const [radio, setRadio] = useState("now_playing");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState();

  useEffect(() => {
    axios.get(
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${radio}?api_key=682a2911788370c5648bfd6c26712e0f&language=en-US&page=${page}`
        )
        .then((res) => {
          //console.log(res.data);
          setMovies(res.data);
        })
    );
  }, [radio, page]);

  return (
    <div className="mx-40 my-2">
      <div>
        <div className="m-3">
          <Radio.Group onChange={(e) => setRadio(e.target.value)} value={radio}>
            <Radio value={"now_playing"}>Now Playing</Radio>
            <Radio value={"popular"}>Popular</Radio>
            <Radio value={"top_rated"}>Top Rated</Radio>
            <Radio value={"upcoming"}>Upcoming</Radio>
          </Radio.Group>
        </div>
        <div className="m-3">
          {movies ? (
            <Pagination
              current={page}
              showSizeChanger={false}
              pageSize={20}
              total={movies.total_results}
              onChange={(page) => {
                setPage(page);
              }}
            />
          ) : null}
        </div>
        <div className="flex flex-wrap">
          {movies
            ? movies.results.map((movie) => (
                <CardMeta key={Date.now()} movie={movie} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
