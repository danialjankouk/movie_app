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
    <div className="w-full px-8 gap-4 py-2">
      {loading === true ? (
        <div className="text-white text-2xl mx-auto">Loading ...</div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 w-full box-border">
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
