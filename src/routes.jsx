import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FavoriteMovies from "./components/FavoriteMovies";
import Home from "./components/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/home',
                element:<Home/>

            },
            {
                path:'/favorite',
                element:<FavoriteMovies/>
              }
              
        ]
    },
    // {
    //     path:'/favorite',
    //     element:<FavoriteMovie/>

    // }
])