import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { fetchMovieDetailsId } from '../../api';
import { Loader } from '../../components/loader/Loader';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Wrapper, Title1, Title2, StyleItem, List, StyledLink } from './MovieDetailsPage.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function getDetails() {
      setLoading(true);
      try {
        const movieInfo = await fetchMovieDetailsId(movieId);

        if (movieInfo) setMovieInfo(movieInfo);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getDetails();
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
      <Link to={backLinkHref.current}>
        <button>
          <AiOutlineArrowLeft />
        </button>
      </Link>

      {movieInfo && (
        <Wrapper>
          <img
            width="300px"
            src={
              poster_path
                ? `${imageBaseUrl}${poster_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
            }
            alt={title}
          />
          <div>
            <Title1>{title}</Title1>
            <p>User score: {popularity} </p>
            <Title2>Overview</Title2>
            <p>{overview}</p>
            <Title2>Genres</Title2>
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
