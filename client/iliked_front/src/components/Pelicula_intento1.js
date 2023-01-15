import React, {useState, setState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Tooltip } from '@mui/material';
import axios from "axios";

import "./styles/pelicula_styles.css"



const endPointPelicula = "http://localhost:3000/films/search/";


const Pelicula = () => {

    const [film, setFilm] = useState([])
    const [query, setQuery] = useState("")
    const [input, setInput] = useState("")

    useEffect(() => {
        async function getFilm (){

            const { data } = await axios(endPointPelicula + `${query}`);
              
              setFilm(data);
          }
          getFilm();
        },[query]);

    const getFilter = (e) => {
        e.preventDefault(e)
        const select = document.getElementById('value')
        
        if(select.value === "title"){
            let query = input
            setQuery(query)
            setInput("")
        } 
    }   
        
    return (
        <>
            <div>
                <form className='search'>
                    <input type= "text" value={input} placeholder="Título" onChange={(event) => setInput(event.target.value)}/>
                        <select className="select" id="value" name="value" onSubmit={(event) => console.log(event.target.value)}>
                            <option value="title">Título</option>
                        </select>
                    <button id="search" onClick={(e) => getFilter(e)}>Search!</button>
                </form>
            </div>
            <div className="cuadroFilm">
                    {film.map((item,index) => (
                    <div key={item._id}>
                        <div className="card">
                        <img className='img' src={item.url_img} alt={item.title}></img>
                        <p className="title">{item.title}</p>
                        <p className='year'>({item.year})</p>
                        </div>
                    </div>      
                    ))}
            </div>
        </>
        
    )

}

export default Pelicula;