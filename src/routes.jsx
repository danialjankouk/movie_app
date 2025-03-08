import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FavoriteMovies from "./components/FavoriteMovies";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>

            },
            {
                path:'/favorite',
                element:<FavoriteMovies/>
              },
              {
                path:'movie/:id',
                element:<MovieDetails/>
              }
              
        ]
    },
    
])