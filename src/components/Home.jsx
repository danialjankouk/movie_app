import React from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import { useState, useEffect } from "react";
import Container from "./Container";
import Card from "./Card";
import { useMovies } from "../contexts/MoviesContext";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { handleAddFavorite } = useMovies();

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

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovie(searchResults);
      setErr(null);
    } catch (err) {
      console.log(err);
      setErr("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-8 gap-4 py-2">
      <form
        onSubmit={handleSearch}
        className="flex flex-row justify-center items-center gap-x-2 p-2"
      >
        <input
          type="text"
          placeholder="Search for movies..."
          className="bg-white p-0.5 rounded-sm border-blue-900 border-2 text-blue-900"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 rounded-md p-0.5 font-bold text-white"
        >
          Search
        </button>
      </form>

      {err && <div className="error-message">{err}</div>}

      {loading === true ? (
        <div className="text-white text-2xl mx-auto">Loading ...</div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 w-full box-border">
          {movie.map((data) => (
            <Card
              data={data}
              key={data.id}
              onAddfavor={handleAddFavorite}
              isFavorite={false}
            />
          ))}
        </div>
      )}

      {/* <Container /> */}
    </div>
  );
};

export default Home;
