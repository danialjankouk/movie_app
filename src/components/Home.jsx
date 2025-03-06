import React from "react";
import {getPopularMovies} from "../services/api";
import { useState, useEffect } from "react";
import Container from "./Container";
import Card from "./Card";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const loadPopularMovie = async () => {
      try {
        const response = await getPopularMovies();
        setMovie(response);
      } catch (error) {
        console.log(error);
        setErr("fail to load");
      }
    };
    loadPopularMovie();
  }, []);
  console.log(movie);

  return (
    <div className="">
      {loading === true ? (
        <div className="text-white text-2xl mx-auto">Loading ...</div>
      ) : (
        <div>
          {movie.map((data) => (
            <Card data={data} key={data.id} />
          ))}
        </div>
      )}

      {/* <Container /> */}
    </div>
  );
};

export default Home;
