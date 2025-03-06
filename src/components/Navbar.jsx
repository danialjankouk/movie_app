import './Navbar.css'
import { NavLink } from 'react-router'
function Navbar() {
  return (
    <nav className="flex justify-around gap-10 itmes-center  h-20 background-my shadow-2xl">
         
        <div className="text-xl text-blue-300 flex justify-center  items-center"> movie app</div>
        <div className="flex gap-10 justify-center items-center text-blue-300">
            <NavLink to='/' className="text-xl">Home</NavLink>
            <NavLink to='/favorite' className="text-xl" >Favorite movie</NavLink>
        </div>
    </nav>
  )
}

export default Navbar