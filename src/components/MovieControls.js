import React from 'react'

export const MovieControls = ({movie,type}) => {
  return (
    <div className='inner-card-controls'>
        {
            type === "watchlist" && (
                <>
                <button className='ctrl-btn'>
                    <i className='fa-solid fa-eye'/>
                </button>

                <button className='ctrl-btn'>
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