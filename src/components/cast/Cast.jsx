import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../api';
import { Loader } from '../../components/loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setLoading(true);
        const movieCast = await fetchMovieCast(movieId);

        if (movieCast) setMovieCast(movieCast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getCast();
  }, [movieId]);

  const imageWidth = 92;
  const imageBaseUrl = `https://image.tmdb.org/t/p/w${imageWidth}`;
  return (
    <div>
      {loading && <Loader />}
      <ul>
        {movieCast.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id}>
            <img src={`${imageBaseUrl}${profile_path}`} alt={name} />
            <h3>{original_name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;

// {
//   "id": 550,
//   "cast": [
//     {
//       "adult": false,
//       "gender": 2,
//       "id": 819,
//       "known_for_department": "Acting",
//       "name": "Edward Norton",
//       "original_name": "Edward Norton",
//       "popularity": 26.99,
//       "profile_path": "/8nytsqL59SFJTVYVrN72k6qkGgJ.jpg",
//       "cast_id": 4,
//       "character": "The Narrator",
//       "credit_id": "52fe4250c3a36847f80149f3",
//       "order": 0
//     },
//     ]
