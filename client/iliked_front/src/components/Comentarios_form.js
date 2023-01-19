import { useState } from "react";
import axios from "axios";
import { useNavigate ,useParams} from 'react-router-dom';
import AuthConsumer from "../hooks/useAuth";

import "./styles/comentarios_styles.css"




const Comentarios = (props) => {
  
  let apiEndpoint = `http://localhost:3000/films/edit/${props.titulo}`;
  const [user, dispatch] = AuthConsumer();
  console.log(user)
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

    //INTENTO DE FUNCIÓN QUE INCREMENTE EL VALOR DE "n".
    // async function getLastN() {
    //   try {
    //     const { data } = await axios.get(`http://localhost:3000/films/search/${props.titulo}`);
    //     return data.[comments.length - 1].n;
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
      
    // let lastN = await getLastN();
    // lastN += 1;

    const newComentary = {
      date: new Date().toISOString(),
      comentary_t,
      comentary,
      likes: 0,
      n: 2
    };

    try {
      const { data } = await axios.put(apiEndpoint, newComentary);
      console.log(data);
      navigate(0)
    } catch (err) {
      console.log(err);
    }

     //Actualiza a la vista de Pag comentada.
    // navigate(-1) //Actualiza a la pagina anterior.
    

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