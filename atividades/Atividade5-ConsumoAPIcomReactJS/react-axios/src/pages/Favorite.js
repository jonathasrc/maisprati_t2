// /src/pages/Favorites.js
import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div>
      <h1>Meus Favoritos</h1>
      {favorites.length > 0 ? (
        <MovieList movies={favorites} />
      ) : (
        <p>Você ainda não adicionou nenhum filme aos favoritos.</p>
      )}
    </div>
  );
};

export default Favorites;