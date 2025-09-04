// /src/pages/MovieDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import omdbApi from '../services/omdbApi';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFavorites = () => {
      const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(savedFavorites);
    };

    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);
      setMovie(null);
      try {
        const response = await omdbApi.get('/', { params: { i: id } });
        if (response.data.Response === 'False') {
          setError(response.data.Error);
        } else {
          setMovie(response.data);
        }
      } catch (err) {
        setError('Erro detalhes do filme.');
      }
      setLoading(false);
    };

    loadFavorites();
    fetchMovieDetails();
  }, [id]);

  const handleFavorite = () => {
    let updatedFavorites;
    if (favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      updatedFavorites = favorites.filter((fav) => fav.imdbID !== movie.imdbID);
    } else {
      const favoriteMovie = {
        Title: movie.Title,
        Year: movie.Year,
        imdbID: movie.imdbID,
        Poster: movie.Poster,
      };
      updatedFavorites = [...favorites, favoriteMovie];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!movie) return <p>Filme não encontrado.</p>;

  const isFavorited = favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <div className="movie-details">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/500x750.png?text=No+Image'}
        alt={movie.Title}
      />
      <h1>{movie.Title} ({movie.Year})</h1>
      <p>{movie.Plot}</p>
      <p>
        <strong>Avaliação IMDb:</strong> {movie.imdbRating}
      </p>
      <p>
        <strong>Diretor:</strong> {movie.Director}
      </p>
      <p>
        <strong>Elenco:</strong> {movie.Actors}
      </p>
      <p>
        <strong>Gênero:</strong> {movie.Genre}
      </p>
      <button onClick={handleFavorite}>
        {isFavorited ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      </button>
    </div>
  );
};

export default MovieDetails;