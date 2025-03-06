import movie1 from "../assets/the gorge.png";
import { IoHeartCircleSharp } from "react-icons/io5";

function Card({ onAddfavor }) {
  return (
    <div
      className="flex flex-col bg-[#1b1f2b] rounded-lg card cursor-pointer 
    hover:shadow-lg hover:shadow-black transition-all duration-300 group "
    >
      <div className="relative overflow-hidden">
        <img src={movie1} alt="poster" className="rounded w-full" />
        {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300"></div> */}
        <IoHeartCircleSharp
          className="text-white absolute top-2 right-2 text-2xl
       opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          onClick={() => onAddfavor()}
        />
      </div>
      <p className="m-2 text-white font-bold">The GORGE</p>
      <p className="m-2 text-gray-500">2003</p>
    </div>
  );
}

export default Card;
