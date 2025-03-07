import { useEffect, useState } from "react";
import {getPopularMovies} from "../services/api";
import Card from "./Card";
import {  useMovies } from "../contexts/MoviesContext";

function Home() {

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const {  handleAddFavorite } = useMovies();
  useEffect(() => {
    const loadPopularMovie = async () => {
      try {
        const response = await getPopularMovies();
        setMovie(response);
      } catch (error) {
        console.log(error);
        setErr("fail to load");
        console.log(err);
        
      }
    };
    loadPopularMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      <div className=''>
      {loading === true ? (
        <div className="text-white text-2xl mx-auto">Loading ...</div>
      ) : (
        <div className=" m-0 grid-cols-6 grid gap-4  mt-24 px-[5%] ">
          {movie.map((data) => (
            <Card data={data}
             key={data.id} 
             onAddfavor={handleAddFavorite}
             isFavorite={false} />
          ))}
        </div>
      )}

      
    </div>
   
    </div>
  )
}

export default Home