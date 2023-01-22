import { useState } from "react";
import Input from "./Input";
import Joi from "joi-browser";

const Form = ({
  inputs = [],
  header = "",
  onSubmit = () => {},
  submitLabel = "Enviar",
  validSchema,
}) => {
  const [inputValues, setInputValues] = useState({});
  const [error, setError] = useState({});

  const handleChange = ({ target: input }) => {
    setInputValues((prevValue) => ({
      ...prevValue,
      [input.name]: input.value,
    }));
  };

  const validate = () => {
    const { error } = Joi.validate(inputValues, validSchema);
    if (!error) return null;

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validate();

    if (error) {
      const { message, path } = error.details[0];
      return setError({ [path]: message });
    }

    setError({});
    onSubmit(inputValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map(({ name, label, ...rest }) => (
        <Input
          key={name}
          name={name}
          label={label}
          value={inputValues[name] || ""}
          errors={error}
          onChange={handleChange}
          {...rest}
        ></Input>
      ))}
      <br/>
      <button disabled={validate()} type="submit">
        Enviar!
      </button>
    </form>
  );
};

export default Form;
