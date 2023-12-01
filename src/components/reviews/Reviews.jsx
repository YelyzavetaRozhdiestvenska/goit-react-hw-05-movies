import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../api';
import { Loader } from '../../components/loader/Loader';
import { Item, H3 } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getReviews() {
      try {
        setLoading(true);
        const movieReviews = await fetchMovieReviews(movieId);

        if (movieReviews) setMovieReviews(movieReviews);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}

      <div>
        <ul>
          {movieReviews.length ? (
            movieReviews.map(review => {
              const { id, author, content } = review;

              return (
                <Item key={id}>
                  <H3>Autor: {author}</H3>
                  <p>{content}</p>
                </Item>
              );
            })
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default Reviews;
