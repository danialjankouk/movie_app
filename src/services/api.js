import axios from "axios";

const API_KEY = "e6e1de87adf80bd75bd166391116b38b";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    return response.data, console.log(response.data);
  } catch (error) {
    console.error(`api has error => ${error}`);
  }
};
