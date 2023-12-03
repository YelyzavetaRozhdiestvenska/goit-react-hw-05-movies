import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '18c8fab0f9903ab66ecca56d0e9a5347';

export const fetchTrending = async () => {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchMovie = async query => {
  try {
    const response = await axios.get(
      `/search/movie?query=${query}&api_key=${API_KEY}&include_adult=false&language=en-US&page=1`
    );

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetailsId = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCast = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);

    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
