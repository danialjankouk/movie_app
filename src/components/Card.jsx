import { IoHeartCircleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router";

function Card({ onAddfavor, data, isFavorite }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movie/${data.id}`);
  };

  return (
    <div
      className="flex flex-col bg-[#1b1f2b] rounded-lg card cursor-pointer 
    hover:shadow-lg hover:shadow-black transition-all duration-300 group"
      style={{ width: "250px", minHeight: "380px" }}
    >
      <div className="relative overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
          className="rounded w-full h-[350px] object-cover"
          onClick={handleCardClick}
        />

        <div className="absolute top-2 right-2 text-3xl z-10 cursor-pointer">
          {isFavorite ? (
            <FaHeart
              className="text-red-600 transition-transform duration-300 scale-100 hover:scale-110"
              onClick={() => onAddfavor(data)}
            />
          ) : (
            <IoHeartCircleSharp
              className="text-white transition-transform duration-300 scale-100 hover:scale-110"
              onClick={() => onAddfavor(data)}
            />
          )}
        </div>
      </div>
      <p className="m-2 text-white font-bold text-center">{data.title}</p>
      <p className="m-2 text-gray-500 text-center">
        {data.release_date.split("-")[0]}
      </p>
    </div>
  );
}

export default Card;
