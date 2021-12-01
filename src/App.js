import "./App.css";
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import MoviePage from "./pages/MoviePage";

export default function App() {
  return (
    <Router>
      <div className="items-start">
        <div className="flex flex-auto bg-indigo-900 h-16 items-center w-auto">
          <div className="w-60"></div>
          <div className="w-20 text-white text-sm font-semibold">
            <Link to="/">Home</Link>
          </div>
          <div className="w-20 text-white text-sm font-semibold">
            <Link to="/movies">Movies</Link>
          </div>
          <div className="w-20 text-white text-sm font-semibold">
            <Link to="/search">Search</Link>
          </div>
        </div>

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/movies">
            <MoviePage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
