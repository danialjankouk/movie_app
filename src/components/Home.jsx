import React, { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import Card from "./Card";
import { useMovies } from "../contexts/MoviesContext";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { handleAddFavorite, favoriteMovies } = useMovies();

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const response = await getPopularMovies();
        setMovies(response);
      } catch (error) {
        console.log(error);
        setErr("Failed to load movies");
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
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
      <form onSubmit={handleSearch} className="flex justify-center items-center gap-x-2 p-2">
        <input
          type="text"
          placeholder="Search for movies..."
          className="bg-white p-0.5 rounded-sm border-blue-900 border-2 text-blue-900"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="bg-green-500 rounded-md p-0.5 font-bold text-white">
          Search
        </button>
      </form>

      {err && <div className="text-red-500">{err}</div>}

      {loading ? (
        <div className="text-white text-2xl mx-auto">Loading ...</div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 w-full box-border">
          {movies.map((data) => (
            <Card
              key={data.id}
              data={data}
              onAddfavor={handleAddFavorite}
              isFavorite={favoriteMovies.some((fav) => fav.id === data.id)} // بررسی علاقه‌مندی
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
