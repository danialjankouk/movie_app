import "./Navbar.css";
import { NavLink } from "react-router";
function Navbar() {
  return (
    <nav className="flex justify-between px-[5%] gap-10 items-center  h-20 my-background shadow-2xl">
      <div className="text-xl text-blue-300 flex justify-center  items-center cursor-pointer">
        {" "}
        movie app
      </div>
      <div className="flex gap-10 justify-center items-center text-blue-300">
        <NavLink to="/home" className="text-xl">
          Home
        </NavLink>
        <NavLink to="/favorite" className="text-xl">
          Favorite movie
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
