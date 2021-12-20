import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import convert from 'xml-js'

export default function App() {
  const inputRef = useRef();
  const [data, setData] = useState([])

  const searchHandler = () => {
    let searchName = inputRef.current.value;
    axios.get(`https://www.alamy.com/xml-search-results.asp?qt=${inputRef.current.value}`)
      .then(res => res.data)
      .then(res => {
        let data = JSON.parse(convert.xml2json(res))
        console.log(data)
        setData(data.elements[0].elements)
      })
    // setItem(searchName);
  };


  return (
    <div className="App">

      <input ref={inputRef} type='search' placeholder='Search for stock images' name="itemName" />
      <button type="submit" onClick={searchHandler}>
        Search
      </button>
      <div className='imageSlider'>
        {data.map(item => {
          return (
            <>
              <img src={`https://c8.alamy.com/comp/${item.attributes?.AR}/${item.attributes?.CAPTION}-${item.attributes?.AR}.jpg`} height='250px' width='350px' alt={item.attributes?.CAPTION}></img>
            </>
          )
        })}
      </div>
    </div>
  );
}
