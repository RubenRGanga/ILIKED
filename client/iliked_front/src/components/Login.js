import LoginForm from "./LoginForm";
import SygnUp from "./SignUp";


import "./styles/FormLogin_styles.css"

const Login = () => {
    return (
        <>
        <div className="formLogin">
            <h2>Acceso de Usuarios</h2>
            <LoginForm />

            <h2>Si aún no estas registrado:</h2>
            <SygnUp/>
        </div>
        </>
    );
};

export default Login