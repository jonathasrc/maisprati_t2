// /src/pages/Home.js
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/Search';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import omdbApi from '../services/omdbApi';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await omdbApi.get('/', {
          params: {
            s: query, 
            page: currentPage,
          },
        });

        
        if (response.data.Response === 'False') {
          setError(response.data.Error);
          setMovies([]);
        } else {
          setMovies(response.data.Search || []);
          
          setTotalPages(Math.ceil(response.data.totalResults / 10));
        }
      } catch (err) {
        setError('Ocorreu um erro na rede. Tente novamente.');
      }
      setLoading(false);
    };

    fetchMovies();
  }, [query, currentPage]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setCurrentPage(1); 
  };

  return (
    <div>
      <h1>Busca de Filmes (OMDb)</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && movies.length > 0 && <MovieList movies={movies} />}
      {totalPages > 1 && !loading && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Home;