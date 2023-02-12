import axios from 'axios';
import { React, useState, useEffect } from 'react';
import "./Add.css"
import ResultCard from './ResultCard';
const Add = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies , setMovies] = useState([]);
  useEffect(()=>{
    axios.get(`https://localhost:7059/api/Movie/search by name?name=${searchValue}`)
    .then((response) => {
      if(response.data){
          setMovies(response.data);
      }
    }).catch((error) => console.log(error));
  }, [searchValue]);
  return (
    <div className='add-page'>
        
        <div className='container'>
            <div className='add-content'>
                <div className='input-container'>
                    <input type="text"
                    placeholder ="HA a movie ? we got every thing you want :)"
                    value={searchValue.encodeURIComponent}
                    onChange={(e)=> setSearchValue(e.target.value)}
                    />
                </div>
                {
                  movies.length > 0 && <ul className="results">
                    {movies.map((movie)=> (
                    <li key={movie.moiveId}>
                      {<ResultCard movie={movie}/>}
                    </li>))}
                  </ul>
                }
            </div>
        </div>
    </div>
  )
}
export default Add;