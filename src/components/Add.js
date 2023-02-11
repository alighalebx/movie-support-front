import axios from 'axios';
import { React, useState, useEffect } from 'react';
import "./Add.css"

const Add = () => {
  const [searchValue, setSearchValue] = useState("");
  useEffect(()=>{
    axios.get(`https://localhost:7059/api/Movie/search by name?name=${searchValue}`)
    .then((response) => {
      if(response.data){
          console.log(response.data);
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
                <ul className='results'>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}
export default Add;