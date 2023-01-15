import React, {useState, setState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Tooltip } from '@mui/material';
import axios from "axios";

import "./styles/pelicula_styles.css"


const Pelicula = (props) => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(`http://localhost:3000/films/search/${props.title}`);
            setMovie(data);
        }
        fetchData();
    }, [props.title]);

    return (
        <div>
            <h1>{movie.title}</h1>
        </div>
    );
}

export default Pelicula;
