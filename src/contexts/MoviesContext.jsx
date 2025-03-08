import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const handleAddFavorite = (movie) => {
    setFavoriteMovies((prevFavorites) =>
      prevFavorites.some((favMovie) => favMovie.id === movie.id)
        ? prevFavorites.filter((favMovie) => favMovie.id !== movie.id)
        : [...prevFavorites, movie]
    );
  };

  const value = { favoriteMovies, handleAddFavorite };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}

export const useMovies = () => useContext(MovieContext);
