import React from 'react'
import "./ResultCard.css";
import { useMovieContext } from './context/GlobalContext';
import * as actions from "./context/ActionTypes";
const ResultCard = ({movie}) => {
  const movieContext = useMovieContext();
  const storedMovie = movieContext.watchlist.find((o)=> o.moiveId === movie.moiveId);
  const storedMovieWatched = movieContext.watched.find((o)=> o.moiveId === movie.moiveId);
  const WatchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;
  const watchedDisabled = storedMovieWatched ? true : false;
  return (
    <div className='result-card'>
        <div className='poster-wrapper'>
            {movie.poster ? (
                 <img src={movie.poster} alt={movie.name} />
            ) : (
              <div className='filter-poster'></div>  
            )}
        </div>
        <div className='info'>
            <div className='heading'>
                <h3 className='title'>{movie.name}</h3>
                {movie.realeasedate ? <h4 className='release-date'>{movie.realeasedate}</h4>: "-"}
            </div>
            <div className='controls'>
                <button onClick={()=> movieContext.MoviesDispatch(
                  {type : actions.ADD_MOVIE_TO_WATCHLIST, payload : movie}
                )} className='btn'
                  disabled={WatchlistDisabled}
                >
                  
                    Add to My Otchirisuto
                </button>
                <button onClick={()=> movieContext.MoviesDispatch(
                  {type :actions.ADD_MOVIE_TO_WATCHED, payload :movie,}
                )} className='btn'
                  disabled={watchedDisabled}
                >
                    Add to Mita
                </button>
            </div>
        </div>
        
    </div>
  )
};
const audio = new Audio("file:///C:/Users/SIGMA/Downloads/mym-l-y-m-y-m-shwf-bq-hyqwlk-yh-128-ytshorts.savetube.me.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

export default ResultCard;
