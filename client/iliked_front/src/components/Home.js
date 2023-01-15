import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import "./styles/home_styles.css"

const endPoint10films = 'http://localhost:3000/films/random/5';


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
      <h2>CINE</h2> 
      <div className="marcoRandon10">

        {films.map((item,index) => (
          <div key={item._id}>
            <div className="card">
            <NavLink to="/film"><img className='img' src={item.url_img} alt={item.title}></img></NavLink>
              <p className="title">{item.title}</p>
              <p className='year'>({item.year})</p>
            </div>
        </div>      
      ))}

      </div>
      </>
    );
};


export default Home;