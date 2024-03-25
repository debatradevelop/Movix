import axios from "axios";

const base_url = "https://api.themoviedb.org/3/";
const tmdb_api_token = import.meta.env.VITE_APP_TMDB_API;

const headers = {
  authorization: "bearer " + tmdb_api_token,
};

export default async function fetchDataFromApi(url, params) {
  try {
    const { data } = await axios.get(base_url + url, {
      headers: headers,
      params: params,
    });

    //console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
