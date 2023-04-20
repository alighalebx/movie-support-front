import React from 'react'
import { useMovieContext } from './context/GlobalContext';
import MovieCard from './MovieCard';
import "./Watched.css"
const Watched = () => {
  const movieContext = useMovieContext();
  return (
    <div className='watched'>
      <div className='container'>
      <div className='main-heading'>
          <h1>My Watched</h1>
          <span className='movies-count'>{movieContext.watched.length}{movieContext.watched.length === 1 ? "Movie" : "Movies"}</span>
        </div>
        {movieContext.watched.length > 0 ? (
          <div className='movie-grid'>
            {movieContext.watched.map((movie)=> (
              <MovieCard key={movie.moiveId} movie={movie} type = "watched"/>
            ))}
            </div>
            ):(
              <h2 className='no-movies'>No Movies in your list , add some</h2>
            )
            }
      </div>
    </div>
  )
}

export default Watched;
