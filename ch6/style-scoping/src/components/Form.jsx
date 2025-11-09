import React from 'react';
import { useState } from 'react';
import classes from './Form.module.css';

function Form() {
  // Inicializamos os estados com `true`, significando "sem erro" por padrão.
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  // Valores informados no input
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  // Atualizam os valores passados na mudança do input (onChange)
  function handleChangeEmail(event) {
    setEnteredEmail(event.target.value);
  }
  function handleChangePassword(event) {
    setEnteredPassword(event.target.value);
  }

  function handleSubmit(event) {
    // Impede que o navegador recarregue a página ao enviar o formulário.
    event.preventDefault();

    // Validação dos campos
    const emailIsValid = enteredEmail.includes('@');
    const passwordIsValid = enteredPassword.trim().length >= 6;

    // Atualiza estado de validação
    setEmailIsValid(emailIsValid);
    setPasswordIsValid(passwordIsValid);

    if (!emailIsValid || !passwordIsValid) {
      return;
    }

    console.log('Inputs are valid, form submitted!');
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label
        htmlFor="emailAddress"
        className={
          !emailIsValid ? `${classes.label} ${classes.invalid}` : classes.label
        }
      >
        Your email
      </label>
      <input
        type="text"
        id="emailAddress"
        className={
          !emailIsValid ? `${classes.input} ${classes.invalid}` : classes.input
        }
        onChange={handleChangeEmail}
      />

      <label
        htmlFor="password"
        className={
          !passwordIsValid
            ? `${classes.label} ${classes.invalid}`
            : classes.label
        }
      >
        Your password
      </label>
      <input
        type="password"
        id="password"
        className={
          !passwordIsValid
            ? `${classes.input} ${classes.invalid}`
            : classes.input
        }
        onChange={handleChangePassword}
      />

      {/* Botão de envio que aciona o onSubmit do formulário ao ser clicado. */}
      <button className="button">Submit</button>
    </form>
  );
}

export default Form;
