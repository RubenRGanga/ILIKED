import { useState } from "react";
import axios from "axios";
import { Link, useNavigate} from 'react-router-dom';
import AuthConsumer from "../hooks/useAuth"; 
import { toast } from "react-toastify";

import "./styles/newFilm_styles.css"


const NewFilm = (props) => { 

    let apiEndpoint = `http://localhost:3000/films/create/`;
    const [user, dispatch] = AuthConsumer();
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState("");
    const [url_imdb, SetUrl_imdb] = useState("");
    const [comentary_t, setComentary_t] = useState("");
    const [comentary, setComentary] = useState("");
    const [likes, setLikes] = useState("");
    const navigate = useNavigate();

    const [auth] = AuthConsumer();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !director || !year || !comentary_t || !comentary) toast.warning("Faltan datos por añadir.");

    const newComentary = {
      date: new Date().toISOString(),
      comentary_t,
      comentary,
      likes: 0,
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
      toast.info("Comentario añadido.");
    } catch (err) {
      console.log(err);
    }
    navigate(`/`)
    

  };

  if(!auth.isAuth) return <h2>Necesitas autentificación para añadir peliculas. <Link to="/login">login</Link></h2>

  return (
    <>
    <h2 className="anuncio">LO SENTIMOS, AÚN NO TENEMOS ESA PELICULA EN LA PLATAFORMA,</h2>
    <h2 className="anuncio2">ANIMATE A PARTICIPAR EN I LIKED! AÑADIENDOLA A CONTINUACIÓN: </h2>
    <form onSubmit={handleSubmit}>
        <div className="form_newfilm">

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
            <button className="submit_n" type="submit"> I LIKED! </button>
    </form>
  </>
  );
};

export default NewFilm;