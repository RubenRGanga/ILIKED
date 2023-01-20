import { useState } from "react";
import axios from "axios";
import { useNavigate ,useParams} from 'react-router-dom';
import AuthConsumer from "../hooks/useAuth";
import { toast } from "react-toastify";

import "./styles/comentarios_styles.css"


const Comentarios = (props) => {
  
  let apiEndpoint = `http://localhost:3000/films/edit/${props.titulo}`;
  const [user, dispatch] = AuthConsumer();
  const [date, setDate] = useState("");
  const [comentary_t, setComentary_t] = useState("");
  const [comentary, setComentary] = useState("");
  const [likes, setLikes] = useState("");
  const [n, setN] = useState("");
  const navigate = useNavigate()

  const routeParams = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    if (!comentary_t || !comentary) return toast.warning("Faltan datos por añadir.");

    const newComentary = {
      date: new Date().toISOString(),
      comentary_t,
      comentary,
      likes: 0,
    };

    try {
      const { data } = await axios.put(apiEndpoint, newComentary);
      console.log(data);
      navigate(0)
      toast.info("Comentario añadido.");
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <>
    <form className="formComents" onSubmit={handleSubmit}>
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
            className="input_area" 
            type="textarea" 
            value={comentary}
            onChange={(e) => setComentary(e.target.value)}/>
            </div>
            <br></br>
            <button id="submit1" className="submit1" type="submit"> I LIKED! </button>
    </form>
  </>
  );
};

export default Comentarios;