// /src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  // OMDb pode retornar 'N/A' para o pôster
  const posterPath =
    movie.Poster !== 'N/A'
      ? movie.Poster
      : 'https://via.placeholder.com/500x750.png?text=No+Image';

  return (
    <div className="movie-card">
      <img src={posterPath} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <p>{movie.imdbID}</p>
      <Link to={`/movie/${movie.imdbID}`}>Ver Detalhes</Link>
    </div>
  );
};

export default MovieCard;