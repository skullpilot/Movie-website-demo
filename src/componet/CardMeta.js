import { Card } from "antd";

function CardMeta(movie) {
  //console.log(movie);
  return (
    <Card
      hoverable
      style={{ width: 250, margin: 20 }}
      cover={
        <img
          alt="example"
          src={`https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`}
        />
      }
    >
      <div>
        <div>{movie.movie.original_title}</div>
        <div>Release Date: {movie.movie.release_date}</div>
        <div>Rating: {movie.movie.vote_average}</div>
      </div>
    </Card>
  );
}

export default CardMeta;
