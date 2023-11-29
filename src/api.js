import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '3e2b762d9897a8b69271b0604b0188d9';

export const fetchTrending = async () => {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`, {
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
      },
    });

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchMovie = async query => {
  try {
    const response = await axios.get(
      `/search/movie?query=${query}&api_key=${API_KEY}`,
      {
        params: { include_adult: 'false', language: 'en-US', page: '1' },
        headers: {
          accept: 'application/json',
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetailsId = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`, {
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCast = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}`,
      {
        params: { language: 'en-US' },
        headers: {
          accept: 'application/json',
        },
      }
    );

    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}`,
      {
        params: { language: 'en-US', page: '1' },
        headers: {
          accept: 'application/json',
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
