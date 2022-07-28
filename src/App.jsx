import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Loader from 'components/Loader';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MoviesDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

const Link = styled(NavLink)`
  display: inline-flex;
  text-align: center;
  background: #2e1437;
  width: 100%;
  font-weight: 500;
  color: #73c8a9;
  font-size: 30px;
  &.active {
    color: #ff6b6b;
  }
`;

export const App = () => {
  return (
    <div>
      <nav className="navigation">
        <Link className="navigation-position_home" to="/">
          Home
        </Link>
        <Link className="navigation-position_movies" to="/movies">
          Movies
        </Link>
      </nav>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
