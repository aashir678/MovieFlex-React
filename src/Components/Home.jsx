import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieInfo from "./MovieInfo";
import { Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState("DEFAULT");
  const { imdbID } = useParams();
  function onSearch() {
    getMovies(search);
  }

  function filterMovies(filter) {
    setSortOrder(filter);
  }

  useEffect(() => {
    if (sortOrder === "LOW_TO_HIGH") {
      setMovies([...movies].sort((a, b) => a.Year - b.Year));
    } else if (sortOrder === "HIGH_TO_LOW") {
      setMovies([...movies].sort((a, b) => b.Year - a.Year));
    }
  }, [sortOrder, movies]);

  async function getMovies(searching) {
    setLoading(true);
    const { data } = await axios.get(
      `https://omdbapi.com/?apikey=6449adca&s=${searching || imdbID}`
    );
    setMovies(data.Search);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return (
    <div>
      <div className="nav__section">
        <h1>
          Movie <span className="orange">Flex</span>
        </h1>
        <div className="nav__section--second">
          <input
            type="text"
            placeholder="Search Movie"
            onChange={(event) => setSearch(event.target.value)}
            onKeyPress={(event) => event.key === "Enter" && onSearch()}
          />
          <button onClick={() => onSearch()}>Submit</button>
          <div className="titles__main">
            <h1>
              Welcome to Movie <span className="orange">Flex</span>
            </h1>
            <p>Unleash Cinematic Wonders with Every Search!</p>
          </div>
        </div>
      </div>

      {loading && (
        <div className="second__section">
          <FontAwesomeIcon
            className="spinner__style spinner__shown"
            icon="spinner"
            rotation={270}
          />
        </div>
      )}

      {!loading && movies.length > 0 && (
        <div className="second__section">
          <div className="custom__select">
            <select
              id="filter"
              defaultValue="DEFAULT"
              onChange={(event) => filterMovies(event.target.value)}
            >
              <option value="DEFAULT" disabled>
                Sort
              </option>
              <option value="LOW_TO_HIGH">Year, Low to High</option>
              <option value="HIGH_TO_LOW">Year, High to Low</option>
            </select>
          </div>
          <div className="movie__results">
            {movies.map((movie) => (
              <div key={movie.imdbID} className="movie__search--results">
                <h1 onClick={() => navigate(`${movie.imdbID}`)}>
                  {movie.Title}
                </h1>
                <img className="movie__images" src={movie.Poster} alt="" />
                <h2>{movie.Year}</h2>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
