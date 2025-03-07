
import { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const handleAddFavorite = (movie) => {
    
    const isAlreadyFavorite = favoriteMovies.find(favMovie => favMovie.id === movie.id);
    
    if (isAlreadyFavorite) {
      setFavoriteMovies(favoriteMovies.filter(favMovie => favMovie.id !== movie.id));
    } else {
      setFavoriteMovies([...favoriteMovies, movie]);
    }
  };

  const value = {
    favoriteMovies,
    handleAddFavorite
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
}


export const useMovies = () => useContext(MovieContext);