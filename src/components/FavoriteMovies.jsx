import React from 'react'
import { useMovies } from '../contexts/MoviesContext';
import Card from './Card';

function FavoriteMovies() {
  const { favoriteMovies, handleAddFavorite } = useMovies();
  return (
    <>
    <div className='text-white font-bold text-center 
    mt-5 text-3xl'>FavoriteMovies
    </div>

    {
      !favoriteMovies.length ? (
        <div className='text-white px-2.5'>add some movie to your favorites</div>
      ) : (
        <div className="m-0 grid-cols-6 grid gap-4  mt-24 px-[5%] ">
          {favoriteMovies.map((data) => (
            <Card data={data} key={data.id} onAddfavor={handleAddFavorite} isFavorite={true} />
          ))}
        </div>
      )
    }
    
    </>
  )
}

export default FavoriteMovies