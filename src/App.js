import React, { useState } from "react";
import "./styles/App.css";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=69567cff`
      );
      const data = await response.json();

      if (data.Search) {
        setSearchResults(data.Search);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleMovieClick = async (title) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${title}&apikey=69567cff`
      );
      const data = await response.json();

      setSelectedMovie(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  return (
    <div className="container">
      <h1>Movie Search App</h1>

      <SearchBar handleSearch={handleSearch} />
      <MovieList
        searchResults={searchResults}
        handleMovieClick={handleMovieClick}
      />

      <MovieDetails selectedMovie={selectedMovie} />
    </div>
  );
}

export default App;
