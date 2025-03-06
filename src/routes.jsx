import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FavoriteMovies from "./components/FavoriteMovies";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
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