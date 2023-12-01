import { Loader } from '../../components/loader/Loader';
import { useState, useEffect } from 'react';
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

// {
//   "page": 1,
//   "results": [
//     {
//       "adult": false,
//       "backdrop_path": "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
//       "genre_ids": [
//         18,
//         53,
//         35
//       ],
//       "id": 550,
//       "original_language": "en",
//       "original_title": "Fight Club",
//       "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
//       "popularity": 73.433,
//       "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
//       "release_date": "1999-10-15",
//       "title": "Fight Club",
//       "video": false,
//       "vote_average": 8.433,
//       "vote_count": 26279
//     },
