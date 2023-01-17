import { useState } from "react";
import axios from "axios";
import { useNavigate ,useParams} from 'react-router-dom';

import "./styles/comentarios_styles.css"



const Comentarios = (props) => {

 

    let apiEndpoint = `http://localhost:3000/films/edit/${props.titulo}`;
    

  const [user_id, setUser_id] = useState("");
  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [comentary_t, setComentary_t] = useState("");
  const [comentary, setComentary] = useState("");
  const [likes, setLikes] = useState("");
  const [n, setN] = useState("");
  const navigate = useNavigate()

  const routeParams = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comentary_t || !comentary) return alert("Faltan datos por añadir.");
      

    const newComentary = {
      user_id:"63b46ca5d438118df7e60aa1",
      username:"Colector",
      date: '',
      comentary_t,
      comentary,
      likes: 0,
      n:1
    };

    try {
      const { data } = await axios.put(apiEndpoint, newComentary);
      console.log(data);
    } catch (err) {
      console.log(err);
    }

    alert("Comentario añadido.");
    // navigate(`/film/${props.titulo}`);

  };

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="form">
            <div className="input-group">
            <label htmlFor="exampleFormControlInput1"className="label">Titulo del comentario: </label>
            <input autoComplete="off" 
            name="comentary_t" 
            id="comentary_t" 
            className="input" 
            type="text" 
            value={comentary_t}
            onChange={(e) => setComentary_t(e.target.value)}/>
            </div>
            
            <div className="input-group">
            <label htmlFor="exampleFormControlInput2"className="label">Comentario: </label>
            <input autoComplete="off" 
            name="comentary" 
            id="comentary" 
            className="input" 
            type="text" 
            value={comentary}
            onChange={(e) => setComentary(e.target.value)}/>
            </div>
        </div>
            <button className="submit" type="submit"> AÑADIR COMENTARIO </button>
    </form>
  </>
  );
};

export default Comentarios;