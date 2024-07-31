import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
export const Player = () => {
  const {id}=useParams();
  const navigate=useNavigate()

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

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
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        options
      )
        .then((response) => response.json())
        .then((response) => setApiData(response.results[0]))
        .catch((err) => console.error(err));

    },[])

  return (
    <div className="player">
      <img src={back_arrow} alt=""  onClick={()=>navigate(-2)}/>
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        height="90%"
        width="90%"
        title="trailer"
        frameborder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}
