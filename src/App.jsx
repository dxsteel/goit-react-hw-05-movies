import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { AppMenu } from "components/AppMenu/AppMenu";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import MoviesDetails from "pages/MovieDetails/MovieDetails";


// import Loader from "./Loader";

import Cast from "components/Cast";
import Reviews from "components/Reviews";




export const App = () => {
  return (
    <div>
   <AppMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
         <Route path="/movies/:movieId" element={<MoviesDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
        </div>
  );
};

export default App;