import { useState, useEffect } from "react";
import axios from "axios";

import "./styles/pelicula_styles.css"

const endpointPelicula = 'http://localhost:3000/films/search/';

const Film = () => {
    const [film, setFilm] = useState([]);

    useEffect(() => {
        async function getFilm() {
          const { data } = await axios(endpointPelicula + film.title);
          
          setFilm(data);
      }
      getFilm();
    },[]);

    return (
        <>
        <div className="marcoPelicula">
            {film.map((item,index) => (
            <div key={item._id}>
              <div className="card">
                <h2>{item.title}</h2>
                <img className='img' src={item.url_img} alt={item.title}></img>
                <p className='year'>({item.year})</p>
              </div>
          </div>      
        ))}
  
        </div>
        </>
    );

};

export default Film;
