import { useState } from "react";
import "./styles/pelicula_styles.css"

const FormLogin = () => {
    const [account, setAccount] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Enviado')
    };

    return(
        <div class="input-group">
            <input required="true" type="text" name="text" autocomplete="off" class="input"></input>
            <label class="user-label">Nombre de usuario</label>
        </div>
    );


}

export default FormLogin