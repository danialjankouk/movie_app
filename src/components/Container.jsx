import { useState } from "react";
import Card from "./Card";

function Container() {
  const [favor, setFavor] = useState([]);
  const handleFavorite = (movie) => {
    setFavor([...favor, movie]);
  };
  // const handleRemoveFavorites =(id)=>{
  //   setFavor((prevFav)=>prevFav.filter((item)=>item.id!==id))
  //  }
  return (
    <div className=" m-0 grid-cols-6 grid gap-4  mt-24 px-[5%] ">
      <div>
        <Card onAddFavor={handleFavorite} />
      </div>
      <div>
        <Card />
      </div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
    </div>
  );
}

export default Container;
