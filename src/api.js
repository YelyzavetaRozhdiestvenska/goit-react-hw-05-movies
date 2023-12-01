import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '18c8fab0f9903ab66ecca56d0e9a5347';

export const fetchTrending = async () => {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`, {
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGM4ZmFiMGY5OTAzYWI2NmVjY2E1NmQwZTlhNTM0NyIsInN1YiI6IjY1Njc4ZWRmYzJiOWRmMDEzYWU0OGIwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zc8DAVn7o43o4vjNOjXUZBvAExs1g5nccsAu486N3RY',
      },
    });

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchMovie = async query => {
  try {
    const response = await axios.get(`/search/movie?query=${query}&api_key=${API_KEY}`, {
      params: { include_adult: 'false', language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGM4ZmFiMGY5OTAzYWI2NmVjY2E1NmQwZTlhNTM0NyIsInN1YiI6IjY1Njc4ZWRmYzJiOWRmMDEzYWU0OGIwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zc8DAVn7o43o4vjNOjXUZBvAExs1g5nccsAu486N3RY',
      },
    });

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetailsId = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}`, {
      params: { language: 'en-US', key: API_KEY },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGM4ZmFiMGY5OTAzYWI2NmVjY2E1NmQwZTlhNTM0NyIsInN1YiI6IjY1Njc4ZWRmYzJiOWRmMDEzYWU0OGIwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zc8DAVn7o43o4vjNOjXUZBvAExs1g5nccsAu486N3RY',
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCast = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`, {
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGM4ZmFiMGY5OTAzYWI2NmVjY2E1NmQwZTlhNTM0NyIsInN1YiI6IjY1Njc4ZWRmYzJiOWRmMDEzYWU0OGIwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zc8DAVn7o43o4vjNOjXUZBvAExs1g5nccsAu486N3RY',
      },
    });

    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}`, {
      params: { language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGM4ZmFiMGY5OTAzYWI2NmVjY2E1NmQwZTlhNTM0NyIsInN1YiI6IjY1Njc4ZWRmYzJiOWRmMDEzYWU0OGIwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zc8DAVn7o43o4vjNOjXUZBvAExs1g5nccsAu486N3RY',
      },
    });

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
