import { useState, useEffect } from 'react';
import { Loader } from '../../components/loader/Loader';
import { fetchSearchMovie } from '../../api';
import { Searchbar } from '../../components/searchbar/Searchbar';
import { TrendingList } from 'components/trendingList/TrendingList';

const Movie = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

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
      {searchMovie && <TrendingList items={searchMovie} />}
    </div>
  );
};

export default Movie;
