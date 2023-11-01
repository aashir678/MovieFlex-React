import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieInfo() {
  const { imdbID } = useParams();
  const [movieData, setMovieData] = useState({});

  async function fetchData() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=6449adca&i=${imdbID}`
    );
    setMovieData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="movieInfo__page">
      <h1>
        Movie <span className="orange">Flex</span>
      </h1>
      <div className="fetched__data">
        <h1>{movieData.Title}</h1>
        <img src={movieData.Poster} alt="" />
        <h3 className="plot__title">Plot:</h3>
        <p className="movie__para">{movieData.Plot}</p>
        <h3>Language:</h3>
        <p className="movie__para">{movieData.Language}</p>
      </div>
    </div>
  );
}

export default MovieInfo;
