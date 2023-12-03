import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from '../../components/loader/Loader';
import { fetchSearchMovie } from '../../api';
import { Searchbar } from '../../components/searchbar/Searchbar';
import { MovieList } from 'components/movieList/MovieList';

const Movie = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    async function getSearchMovies() {
      try {
        setLoading(true);
        const searchMovie = await fetchSearchMovie(query);

        if (searchMovie) setSearchMovie(searchMovie);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getSearchMovies();
  }, [query]);

  return (
    <div>
      <Searchbar searchMovie={setQuery} />

      {loading && <Loader />}
      {searchMovie && <MovieList items={searchMovie} state={{ from: location }} />}
    </div>
  );
};

export default Movie;
