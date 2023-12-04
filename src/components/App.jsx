import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './layout/Layout';

const HomePage = lazy(() => import('../pages/homePage/HomePage'));
const SearchMoviesPage = lazy(() => import('../pages/searchMoviesPage/SearchMoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/movieDetailsPage/MovieDetailsPage'));
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));

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
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
