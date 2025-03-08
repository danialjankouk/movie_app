import React from "react";
import { useMovies } from "../contexts/MoviesContext";
import Card from "./Card";

function FavoriteMovies() {
  const { favoriteMovies, handleAddFavorite } = useMovies();

  return (
    <div className="text-white mt-5 px-5">
      <h2 className="font-bold text-center text-3xl">Favorite Movies</h2>

      {favoriteMovies.length === 0 ? (
        <p className="text-gray-400 text-center mt-5">
          Add some movies to your favorites ❤️
        </p>
      ) : (
        <div
          className="grid gap-6 mt-10"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            justifyContent: "center",
          }}
        >
          {favoriteMovies.map((data) => (
            <div key={data.id} className="flex justify-center">
              <Card
                data={data}
                onAddfavor={handleAddFavorite}
                isFavorite={true}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoriteMovies;
