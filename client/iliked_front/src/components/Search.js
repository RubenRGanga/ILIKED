import React, {useState, setState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Tooltip } from '@mui/material';
import axios from "axios";

import "./styles/seach_styles.css"

const endPointPelicula = "http://localhost:3000/films/search/";


const Search = () => {

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
                    <input className="input" type= "text" value={input} placeholder="Título" onChange={(event) => setInput(event.target.value)}/>
                    <i id='lupa' onClick={(e) => getFilter(e)} className="fa-solid fa-magnifying-glass"></i>
                        <select className="select" id="value" name="value" onSubmit={(event) => console.log(event.target.value)}>
                            <option value="title">Título</option>
                        </select>
                        
                </form>
            </div>
        </>
        
    )

}

export default Search;