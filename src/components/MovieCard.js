import React from 'react'
import './MovieCard.css'
import MovieControls from './MovieControls';
export const MovieCard = ({movie , type}) => {
  return (
    <div className='movie-card'>
        <div className='overlay'>

        </div>
        {movie.poster ? (<img src={movie.poster} alt={movie.name}/>): (<div className='filter-poster'></div>)}
    <MovieControls movie={movie} type={type}></MovieControls>
    </div>
  );
};

export default MovieCard;
