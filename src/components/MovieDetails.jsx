import { useNavigate, useParams } from "react-router";
import IMDB from "../assets/imdb-svgrepo-com.svg";
import { IoPlayBackCircle } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
function MovieDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const API_KEY = "e6e1de87adf80bd75bd166391116b38b";
  const BASE_URL = "https://api.themoviedb.org/3";
  const getDetailsData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
      );
      console.log(typeof id);
      console.log(response.data);
      setDetails(response.data);
      console.log(details);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getDetailsData();
  }, [id]);
  console.log(details);
  return (
    <>
      <div className="container mx-auto px-4 py-8 mt-16 bg-[#1b1f2b] rounded-lg flex ">
        {/* poster */}
        <div className="md:w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt={details.title}
            className="w-full h-auto"
          />
        </div>
        {/* details */}
        <div className="md:w-2/3 p-6">
          <div className="text-white font-bold text-6xl">{details.title} </div>
          <div className="text-gray-400 mt-7 text-2xl">{details.overview}</div>
          <p className="mt-7 text-gray-500">
            Language : {details.original_language}
          </p>
          {/* votes */}
          <div className="flex items-center mt-96 ">
            <img src={IMDB} alt="imdb" className="w-10 " />
            <p className="text-gray-400">:{details.vote_average}</p>
          </div>
          <IoPlayBackCircle
            className="text-4xl text-gray-200"
            onClick={() => navigate(-1)}
          />
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
