import React from 'react'
import { useMovieContext } from './context/GlobalContext';
import MovieCard from './MovieCard';
import "./Watchlist.css"
 const Watchlist = () => {
  const movieContext = useMovieContext();
  return (
    <div className='watch-list'>
      <div className='container'>
        <div className='main-heading'>
          <h1>My Watchlist</h1>
          <span className='movies-count'>4Movies</span>
        </div>
        {movieContext.watchlist.length > 0 ? (
          <div className='movie-grid'>
            {movieContext.watchlist.map((movie)=> (
              <MovieCard key={movie.movieId} movie={movie} type = "watchedlist"/>
            ))}
            </div>
            ):(
              <h2 className='no-movies'>No Movvies in your list , add some</h2>
            )
            }
      </div>
      
    </div>
  );
}

export default Watchlist;