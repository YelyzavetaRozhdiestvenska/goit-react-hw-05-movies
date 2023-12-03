import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Loader } from '../../components/loader/Loader';
import { fetchSearchMovie } from '../../api';
import { Searchbar } from '../../components/searchbar/Searchbar';
import { MovieList } from 'components/movieList/MovieList';
import { toast } from 'react-toastify';

const Movie = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('searchQuery') ?? '');
  const location = useLocation();

  const inputValue = searchParams.get('searchQuery') ?? '';

  useEffect(() => {
    if (!inputValue) {
      setSearchMovie([]);
      return;
    }

    async function getSearchMovies() {
      try {
        setLoading(true);
        const searchMovie = await fetchSearchMovie(inputValue);

        if (searchMovie) setSearchMovie(searchMovie);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getSearchMovies();
  }, [inputValue]);

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (query === '') {
      toast.error('Input search movie!');
      return;
    }

    setSearchParams({ searchQuery: query });
  };

  return (
    <div>
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} query={query} />

      {loading && <Loader />}
      {searchMovie && <MovieList items={searchMovie} state={{ from: location }} />}
    </div>
  );
};

export default Movie;
