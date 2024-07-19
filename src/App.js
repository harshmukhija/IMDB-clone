import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router,Routes, Route} 
        from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./Pages/home/Home";
import MovieList from "./components/movieList/MovieList";
import MovieDetail from "./Pages/movieDetail/MovieDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" index element={<MovieDetail />}></Route>
          <Route path="movies/:type" index element={<MovieList />}></Route>
          <Route path="/*"  element={<h1>Error page</h1>}></Route>


        </Routes>
      </Router>

    </div>
  );
}

export default App;
