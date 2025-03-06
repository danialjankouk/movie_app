
import { Outlet } from "react-router";
import "./App.css";
import Navbar from './components/Navbar'
function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <h1 className="text-white">Hiiii</h1>
    </>
  );
}

export default App;
