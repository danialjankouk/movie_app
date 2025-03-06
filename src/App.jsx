import { Outlet, Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
