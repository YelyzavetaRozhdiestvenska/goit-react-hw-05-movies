import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import SearchMoviesPage from '../pages/searchMoviesPage/SearchMoviesPage';
import MovieDetailsPage from '../pages/movieDetailsPage/MovieDetailsPage';
import NotFound from '../pages/NotFound';
import Cast from './cast/Cast';
import Reviews from './reviews/Reviews';
import { Layout } from './layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="movies" element={<SearchMoviesPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
