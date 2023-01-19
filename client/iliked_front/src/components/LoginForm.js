import Form from "../components/Form";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import AuthConsumer from "../hooks/useAuth";
import user from "../services/userService";

import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [, dispatch] = AuthConsumer();
  const navigate = useNavigate();

  const schema = {
    username: Joi.string().required(),
    _password: Joi.string().required(),
  };

  const handleSubmit = async (account) => {

    try {
      const data = await user.login(account);
      toast.info("Usario autentificado")
      dispatch({ type: "login" });
      navigate(-1);
    } catch (err) {
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  return (
    <Form
      inputs={[
        { name: "username", label: "Nombre de Usuario:", type: "text"},
        { name: "_password", label: "Contraseña", type: "password" },
      ]}
      onSubmit={handleSubmit}
      header="Acceso de Usuarios"
      submitLabel="Login"
      validSchema={schema}
    />
  );
};

export default LoginForm;
