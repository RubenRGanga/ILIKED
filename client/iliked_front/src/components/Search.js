import React, {useState, setState, useEffect} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";


import "./styles/seach_styles.css"

const Search = () => {
    const [film, setFilm] = useState('');
    const [filmData, setFilmData] = useState(null);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setFilm(e.target.value);
    }

    const searchFilm = () => {
      
        fetch(`http://localhost:3000/films/search/${film}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setFilmData(data);
                return data
            })
            .then((data)=>{
                 navigate(`/film/${film}`) 
            })
            .catch(err => navigate(`/newfilm`) )
    }

    return (
        <>
            <div>
                <form className='search'>
                    <input className="input" type= "text" onChange={handleSearch} />
                    <i id='lupa' onClick={searchFilm} className="fa-solid fa-magnifying-glass"></i>       
                </form>
            </div>
        </>
        
    );
}

export default Search;