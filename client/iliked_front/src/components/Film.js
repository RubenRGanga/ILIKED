import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";


import "./styles/pelicula_styles.css"

// const endpointPelicula = 'http://localhost:3000/films/search/';

const Film = () => {
    const [film, setFilm] = useState([]);
    const routeParams = useParams()

    useEffect(() => {
        const getFilm = async () => {

            const resp = await fetch(`http://localhost:3000/films/search/${routeParams.title}`);
            const data = await resp.json();
            setFilm(data[0])
        }
        getFilm()
        
    }, [])

    return (
        <>
        <div className="marcoPelicula">
           <div key={film._id}>
              <div className="card">
                <h2>{film.title}</h2>
                <img className='img' src={film.url_img} alt={film.title}></img>
                <p className='year'>{film.year}</p>
              </div>
          </div> 
        </div>
        </>
    );

};

export default Film;
