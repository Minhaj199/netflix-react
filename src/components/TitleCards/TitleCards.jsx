import React,{useEffect, useState} from 'react'
import './TitleCards.css'




export const TitleCards = ({title,category}) => {
  const [apitData,setApiData]=useState([])
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDJjYTQwMzI2YjViNzhhNmQ0MGYwNzJkZWEwYzliNyIsIm5iZiI6MTcyMjQzMjc3Mi4wNzM1NTUsInN1YiI6IjY2YWEzYmNlNzBiZGU0NzkyMGExMGRjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hhln4GrIfQ6z1abks-stR5bzjyvvwvY_IawqnfRLV34",
    },
  };

  
 useEffect(()=>{
  fetch(
    `https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => setApiData(response.results))
    .catch((err) => console.error(err));
 },[])
 
 
  return (  
    <div className='title-cards'>
      <h2>{title?title:'Popular on Netflix'}</h2>
      <div className='card-list'>
        {apitData.map((card,index)=>{
          return (
            <div className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}
