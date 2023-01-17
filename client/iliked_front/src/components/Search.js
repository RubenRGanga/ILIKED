import React, {useState, setState, useEffect} from "react";
import Film from "./Film";


import "./styles/seach_styles.css"

const Search = () => {
    const [filmTitle, setFilmTitle] = useState('');
    const [filmData, setFilmData] = useState(null);

    const handleSearch = (e) => {
        setFilmTitle(e.target.value);
    }

    const searchFilm = () => {
        fetch(`http://localhost:3000/films/search/${filmTitle}`)
            .then(res => res.json())
            .then(data => {
                setFilmData(data);
            })
    }

    return (
        <>
            <div>
                <form className='search'>
                    <input className="input" type= "text" onChange={handleSearch} />
                    <i id='lupa' onClick={searchFilm} className="fa-solid fa-magnifying-glass"></i>          
                </form>
                {filmData && <Film data={filmData} />}
            </div>
        </>
        
    );
}

export default Search;