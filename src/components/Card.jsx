
import { IoHeartCircleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router";
function Card({ onAddfavor, data, isFavorite }) {
  const navigate = useNavigate(); 
  
  const handleCardClick = () => {
    navigate(`/movie/${data.id}`);
  };


  return (
    <div className='flex flex-col bg-[#1b1f2b] rounded-lg card cursor-pointer 
    hover:shadow-lg hover:shadow-black transition-all duration-300 group ' >
      <div className='relative overflow-hidden'>
        <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} className='rounded w-full' onClick={handleCardClick}/>
        {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300"></div> */}

        {isFavorite ? <FaHeart 
         className={`text-red-600 absolute top-2 right-2 text-3xl opacity-0 group-hover:opacity-100
        transition-opacity duration-300 z-10`}  
        onClick={()=>onAddfavor(data)} /> :
         <IoHeartCircleSharp className={`text-white absolute top-2 right-2 text-3xl
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300 z-10`}
         onClick={() => onAddfavor(data)} />}
        
      </div>
      <p className='m-2 text-white font-bold'>{data.title}</p>
      <p className='m-2 text-gray-500'>{data.release_date.split("-")[0]}</p>
    </div>
  )
}

export default Card