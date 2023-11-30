import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../api';
import { Loader } from '../../components/loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getCast(id) {
      try {
        setLoading(true);
        const movieCast = await fetchMovieCast(id);

        if (movieCast) setMovieCast(movieCast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getCast(movieId);
  }, [movieId]);

  // const { id, profile_path, original_name, name, character } = movieCast;
  const imageWidth = 100;
  const imageBaseUrl = `https://image.tmdb.org/t/p/w${imageWidth}`;
  return (
    <div>
      {loading && <Loader />}
      {movieCast && (
        <ul>
          {movieCast.map(
            ({ id, profile_path, original_name, name, character }) => (
              <li key={id}>
                <img src={`${imageBaseUrl}${profile_path}`} alt={name} />
                <h3>{original_name}</h3>
                <p>Character: {character}</p>
              </li>
            )
          )}
        </ul>
      )}
      Cast
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
