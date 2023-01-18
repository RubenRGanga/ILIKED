import { useState } from "react";
import axios from "axios";
import { useNavigate ,useParams} from 'react-router-dom';

import "./styles/nuevoFilm_styles.css"

let apiEndpoint = `http://localhost:3000/films/create/`;

const NewFilm = () => {

    const [title, setTitle] = useState("");
    const [cast, setCast] = useState("");
    const [o_title, setO_title] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState("");
    const [url_imdb, SetUrl_imdb] = useState("");
    const [url_img, SetUrl_img] = useState("");
    const [url_video, SetUrl_video] = useState("");
    const [comments, SetComments] = useState(""); 
    const [user_id, setUser_id] = useState("");
    const [username, setUsername] = useState("");
    const [date, setDate] = useState("");
    const [comentary_t, setComentary_t] = useState("");
    const [comentary, setComentary] = useState("");
    const [likes, setLikes] = useState("");
    const [n, setN] = useState("");
    const navigate = useNavigate()

//   const routeParams = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !director || !year || !comentary_t || !comentary) return alert("Faltan datos por añadir.");

    const newComentary = {
      user_id:"63b46ca5d438118df7e60aa1",
      username:"Colector",
      date: new Date().toISOString(),
      comentary_t,
      comentary,
      likes: 0,
      n: 2
    };

    const newFilm = {
    
        title,
        o_title: "!",
        cast: [""],
        director,
        year,
        url_imdb,
        url_img: "https://raw.githubusercontent.com/RubenRGanga/ILIKED/main/client/iliked_front/src/assets/sinImagen.png",
        url_video: "#",
        comments: newComentary
    };

    try {
      const { data } = await axios.post(apiEndpoint, newFilm);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    navigate(`/`)
    

  };

  return (
    <>
    <p className="anuncio">LO SENTIMOS, AÚN NO TENEMOS ESA PELICULA EN LA PLATAFORMA,</p>
    <p className="anuncio">ANIMATE A PARTICIPAR EN I LIKED! AÑADIENDOLA A CONTINUACIÓN: </p>
    <form onSubmit={handleSubmit}>
        <div className="form">

            <div className="input-group">
              <label htmlFor="exampleFormControlInput1"className="label">Titulo: </label>
              <input autoComplete="off" 
              name="title" 
              id="title" 
              className="input" 
              type="text" 
              value={title}
              placeholder="Campo requerido"
              onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div className="input-group">
              <label htmlFor="exampleFormControlInput2"className="label">Director: </label>
              <input autoComplete="off" 
              name="director" 
              id="director" 
              className="input" 
              type="text" 
              value={director}
              placeholder="Campo requerido"
              onChange={(e) => setDirector(e.target.value)}/>
            </div>

            <div className="input-group">
              <label htmlFor="exampleFormControlInput3"className="label">Año: </label>
              <input autoComplete="off" 
              name="year" 
              id="year" 
              className="input" 
              type="text" 
              value={year}
              onChange={(e) => setYear(e.target.value)}/>
            </div>

            <div className="input-group">
              <label htmlFor="exampleFormControlInput4"className="label">Url de IMDB: </label>
              <input autoComplete="off" 
              name="url_imdb" 
              id="url_imdb" 
              className="input" 
              type="text" 
              value={url_imdb}
              placeholder="https://www.imdb.com/title/tt0156805/ (ejemplo)"
              onChange={(e) => SetUrl_imdb(e.target.value)}/>
            </div>

            <div className="input-group">
              <label htmlFor="exampleFormControlInput5"className="label">Titulo del comentario: </label>
              <input autoComplete="off" 
              name="comentary_t" 
              id="comentary_t" 
              className="input" 
              type="text" 
              value={comentary_t}
              placeholder="Campo requerido"
              onChange={(e) => setComentary_t(e.target.value)}/>
            </div>
            
            <div className="input-group">
              <label htmlFor="exampleFormControlInput6"className="label">Comentario: </label>
              <input autoComplete="off" 
              name="comentary" 
              id="comentary" 
              className="input" 
              type="text" 
              value={comentary}
              placeholder="Campo requerido"
              onChange={(e) => setComentary(e.target.value)}/>
            </div>
        </div>
            <button className="submit" type="submit"> I LIKED! </button>
    </form>
  </>
  );
};

export default NewFilm;