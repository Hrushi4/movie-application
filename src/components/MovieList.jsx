import React from "react";

const MovieList = ({ searchResults, handleMovieClick }) => {
  return (
    <div className="movie-list">
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.imdbID} onClick={() => handleMovieClick(movie.imdbID)}>
            {movie.Title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
