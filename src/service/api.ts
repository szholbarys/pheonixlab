import axios from "axios";

const API_KEY = "7e59b8de";
const BASE_URL = "http://www.omdbapi.com/";

export const searchMoviesApi = async (query: string) => {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
  return response.data.Search || [];
};

export const fetchMovieDetailsApi = async (id: string) => {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
  return response.data;
};

export const fetchTopMoviesApi = async () => {
  const topMovieIds = [
    "tt0111161",
    "tt0068646",
    "tt0071562",
    "tt0468569",
    "tt0050083",
    "tt0108052",
    "tt0167260",
    "tt0110912",
    "tt0060196",
    "tt0120737",
  ];
  const topMoviesData = await Promise.all(
    topMovieIds.map((id) => axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`))
  );
  return topMoviesData.map((response) => response.data);
};
