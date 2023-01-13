import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from '@mui/material';
import axios from "axios";
import "./styles/home_styles.css"

const endPoint10films = 'http://localhost:3000/films/random/10';


const Home = () => {
  const [films, setFilms] = useState([]);

    useEffect(() => {
      async function getFilms (){

        const { data } = await axios(endPoint10films);
          
          setFilms(data);
      }
      getFilms();
    },[]);
    
    return (
      <>
      <h2>PELICULAS</h2> 
      <div className="cuadroRandon10">
      
      {films.map((item,index) => (
        <div key={item._id}>
          <div className="card">
            <img className='img' src={item.url_img} alt={item.title}></img>
            {/* <p className="light"><span className="type">Orbit:</span> {item.orbit_class}</p>
            <p><span className="type">Discovery:</span> {item.discovery_date.substring(0, item.discovery_date.length - 13)}</p>
            <p className="light"><span className="type">H (mag):</span> {item.h_mag}</p>
            <p><span className="type">Moid (au):</span> {item.moid_au}</p>
            <p className="light"><span className="type">Q (au) 1:</span> {item.q_au_1}</p>
            <p><span className="type">Q (au) 2:</span> {item.q_au_2}</p>
            <p className="light"><span className="type">Period year:</span> {item.period_yr}</p>
            <p><span className="type">i (deg):</span> {item.i_deg}</p>
            <p className="light_bottom"><span className="type">Pha:</span> {item.pha}</p> */}
          </div>
        </div>
              
      ))}
      </div>
      </>
    );
};


export default Home;