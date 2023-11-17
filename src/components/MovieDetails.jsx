import React from "react";

const MovieDetails = ({ selectedMovie }) => {
  return (
    <div className="movie-details">
      {selectedMovie && (
        <>
          <h2>{selectedMovie.Title}</h2>
          <p>{selectedMovie.Plot}</p>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
