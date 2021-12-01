import { Menu, Input, Space, Dropdown, Button, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import axios from "axios";
import CardMeta from "../componet/CardMeta";

function SearchPage() {
  const [word, setWord] = useState("");
  const [type, setType] = useState("Movie");
  const [page, setPage] = useState();
  const [movies, setMovies] = useState();
  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={() => setType("Movie")}>Movie</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => setType("TV Show")}>TV Show</a>
      </Menu.Item>
    </Menu>
  );

  const { Search } = Input;
  let searchMovie = () => {
    if (type === "Movie") {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=682a2911788370c5648bfd6c26712e0f&language=en-US&page=1`,
          { params: { query: word } }
        )
        .then((res) => {
          //console.log(res.data);
          setMovies(res.data);
        });
    } else if (type === "TV Show") {
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=682a2911788370c5648bfd6c26712e0f&language=en-US&page=1`,
          { params: { query: word } }
        )
        .then((res) => {
          //console.log(res.data);
          setMovies(res.data);
        });
    }
  };

  useEffect(() => {
    if (type === "Movie") {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=682a2911788370c5648bfd6c26712e0f&language=en-US&page=${page}`,
          { params: { query: word } }
        )
        .then((res) => {
          //console.log(res.data);
          setMovies(res.data);
        });
    } else if (type === "TV Show") {
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=682a2911788370c5648bfd6c26712e0f&language=en-US&page=${page}`,
          { params: { query: word } }
        )
        .then((res) => {
          //console.log(res.data);
          setMovies(res.data);
        });
    }
  }, [page]);

  return (
    <div className="bg-gray-300 w-full">
      <div className="mx-40 flex flex-col">
        <div className="flex flex-row m-2">
          <div className="mx-1">
            <Dropdown overlay={menu}>
              <Button>
                {type} <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div className="">
            <Space direction="vertical">
              <Search
                value={word}
                onChange={(e) => setWord(e.target.value)}
                placeholder="Search"
                onSearch={searchMovie}
                style={{ width: 200 }}
              />
            </Space>
          </div>
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
            ? movies.results.map((movie) => <CardMeta movie={movie} />)
            : null}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
