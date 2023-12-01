import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../api';
import { Loader } from '../../components/loader/Loader';
import { Item, Img, H3 } from './Cast.styled';

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
          <Item key={id}>
            <Img src={`${imageBaseUrl}${profile_path}`} alt={name} />
            <H3>{original_name}</H3>
            <p>Character: {character}</p>
          </Item>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
