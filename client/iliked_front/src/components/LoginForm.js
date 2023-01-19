import { useState, useTransition } from "react";
var Joi = require('joi-browser');


const LoginForm = () => {
    const [account, setAccount] = useState({username: "", _password: ""});
    const [error, setError] = useState({});

    const schema = {
        username: Joi.string().required(),
        _password: Joi.string().required()
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = Joi.validate(account, schema, {abortEarly: false});
        
        console.log(result)
        console.log('Enviado')
    };

    const handleChange = ({target: input}) => {
        setAccount((prevValue) => ({...prevValue, [input.name]: input.value}));
    };

    return(
        <form onSubmit={handleSubmit}>
            <div className="formLogin">

                <div className="input-group">
                <label htmlFor="exampleFormControlInput1"className="label">Nombre de Usuario: </label>
                <input autoComplete="off" 
                name="username" 
                id="username" 
                className="input" 
                type="text" 
                value={account.username}
                onChange={handleChange}/>
                </div>

                <div className="input-group">
                <label htmlFor="exampleFormControlInput2"className="label">Contraseña: </label>
                <input autoComplete="off" 
                name="_password" 
                id="_password" 
                className="input" 
                type="password" 
                value={account._password}
                onChange={handleChange}/>
                </div>

                <button type="submit">Identificarse</button>
            </div>
        </form>
    );


}

export default LoginForm