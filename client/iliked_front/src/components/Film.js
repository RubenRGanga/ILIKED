import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { useState, useEffect } from "react";
import {useParams, routeParams} from 'react-router-dom'
import { Tooltip } from '@mui/material';
import Popup from 'reactjs-popup';
import axios from "axios";
import AuthConsumer from "../hooks/useAuth";
import Likes from './Likes';

import 'reactjs-popup/dist/index.css';


import "./styles/film_styles.css"
import imdb from "../assets/imdb_logo.png"
import yt from "../assets/yt.png"

import Comentarios from './Comentarios_form';

const Film = () => {
    const [film, setFilm] = useState(null);
    const routeParams = useParams()
    const [user, dispatch] = AuthConsumer();

    useEffect(() => {
        const getFilm = async () => {
            const { data } = await axios.get(`http://localhost:3000/films/search/${routeParams.title}`);
            console.log(data)
            setFilm(data)
        }
        getFilm()
        
    }, [])


    return (
        <>
        {film == null? (" "): (
            <>
                <div className="marcoFilm" key={film._id}>
                        <img className='imgfilm' src={film.url_img} alt={film.title}></img>
                        <div className="marcoInfo">
                            <h2 className="tituloFilm">{film.title.toUpperCase()}</h2>
                            <p className='line1'>({film.o_title}) Dirección: {film.director}, {film.year}</p>
                            <p className='line2'>Con: {film.cast.join(",  ")}</p>
                            <div className='iconos'>
                                <Tooltip title="Ficha en IMDB" arrow>
                                    <a href={film.url_imdb} target="_blank" rel="noopener noreferrer">
                                        <img className="imdb" src={imdb} alt="IMDB Logo"></img>
                                    </a>
                                </Tooltip>
                                <Popup trigger={<img className="yt" src={yt} alt="YouTube Logo"></img>} position="left center">
                                    <div className='popupVideo'>
                                        <ReactPlayer
                                        url={film.url_video}
                                        className='react-player'
                                        playing
                                        width="640px"
                                        height='360px'
                                        controls
                                        />
                                    </div>
                                </Popup>
                                <Popup trigger={<i id='añadirComentario' className="fa-solid fa-comment-medical"></i>} position="left center">
                                    <div className='añadirComentario'>
                                        <Comentarios titulo={film.title}></Comentarios>
                                    </div>
                                </Popup>
                            </div>
                            <div className="marcoComentarios">
                                {film.comments.map((item, index) => (
                                    <div className='marco1Comentario' key={item._id}>
                                        <p className='tituloComentario'>{item.comentary_t}</p>
                                        <p className='autor'>Autor:  {item.username}</p>
                                        <p className='comentarioFilm'>{item.comentary}</p>
                                        <Likes commentId={item._id} /> {item.likes.length}
                                    </div>
                                    
                                ))}
                            </div>
                        </div>
                </div>
                
            </>
        )}</>
    );

};

export default Film;
