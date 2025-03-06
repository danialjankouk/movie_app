import React from "react";
import { getPopularMovies } from "../services/api";
import { useState, useEffect } from "react";
const Home = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const loadPopularMovie = async () => {
      try {
        const response = await getPopularMovies();
        setMovie(response);
      } catch (error) {
        console.log(error);
        setErr("faild to load");
      }
    };
    loadPopularMovie();
  }, []);
  console.log(movie);

  return (
    <div>
      <h1>Popular Movies</h1>
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <div>{movie.map((data) => data)}</div>
      )}
    </div>
  );
};

export default Home;
