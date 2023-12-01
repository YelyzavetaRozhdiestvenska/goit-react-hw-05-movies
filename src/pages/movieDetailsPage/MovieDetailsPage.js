import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetailsId } from '../../api';
import { Loader } from '../../components/loader/Loader';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Wrapper, H1, H2, StyleItem, List, StyledLink } from './MovieDetailsPage.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function getDetails(id) {
      try {
        setLoading(true);
        const movieInfo = await fetchMovieDetailsId(id);

        if (movieInfo) setMovieInfo(movieInfo);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getDetails(movieId);
  }, [movieId]);

  if (!movieInfo) {
    return;
  }

  const { title, popularity, overview, genres, poster_path } = movieInfo;

  const imageWidth = 300;
  const imageBaseUrl = `https://image.tmdb.org/t/p/w${imageWidth}`;

  return (
    <div>
      <hr />
      {loading && <Loader />}
      <Link to={backLinkHref}>
        <button>
          <AiOutlineArrowLeft />
        </button>
      </Link>

      {movieInfo && (
        <Wrapper>
          <img src={`${imageBaseUrl}${poster_path}`} alt={title} />
          <div>
            <H1>{title}</H1>
            <p>User score: {popularity} </p>
            <H2>Overview</H2>
            <p>{overview}</p>
            <H2>Genres</H2>
            <List>
              {genres.map(genre => (
                <StyleItem key={genre.id}>{genre.name}</StyleItem>
              ))}
            </List>
          </div>
        </Wrapper>
      )}

      <hr />
      <div>
        <h3>Additional information</h3>
        <List>
          <StyleItem>
            <StyledLink to="cast">Cast</StyledLink>
          </StyleItem>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </List>
        <hr />
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
