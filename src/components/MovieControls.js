import React from 'react'
import { useMovieContext } from './context/GlobalContext';
import * as actions from "./context/ActionTypes"
const MovieControls = ({movie,type}) => {
    const movieContext = useMovieContext();
  return (
    <div className='inner-card-controls'>
        {
            type === "watchedlist" && (
                <>
                <button onClick={()=> movieContext.MoviesDispatch({
                    type : actions.ADD_MOVIE_TO_WATCHED,
                    payload: movie,
                })} className='ctrl-btn'>
                    <i className='fa-solid fa-eye'/>
                </button>

                <button onClick={()=> movieContext.MoviesDispatch({
                    type : actions.REMOVE_MOVIE_FROM_WATCHLIST,
                    payload : movie.moiveId,
                })} className='ctrl-btn'>
                    <i className='fa-fw fa fa-times'/>
                </button>
                
                </>


            )
        }
        {type === "watched" && (
                <>
                <button className='ctrl-btn'>
                    <i className='fa-solid fa-eye-slash'/>
                </button>

                <button className='ctrl-btn'>
                    <i className='fa-fw fa fa-times'/>
                </button>
                
                </>


            )
        }
        
    </div>
  );
};

export default MovieControls;