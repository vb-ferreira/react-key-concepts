import React from 'react';
import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="emailAddress"
        className={!emailIsValid ? 'invalid' : undefined}
      >
        Your email
      </label>
      <input
        type="text"
        id="emailAddress"
        className={!emailIsValid ? 'invalid' : undefined}
        onChange={handleChangeEmail}
      />

      <label
        htmlFor="password"
        className={!passwordIsValid ? 'invalid' : undefined}
      >
        Your password
      </label>
      <input
        type="password"
        id="password"
        className={!passwordIsValid ? 'invalid' : undefined}
        onChange={handleChangePassword}
      />

      {/* Botão de envio que aciona o onSubmit do formulário ao ser clicado. */}
      <button>Submit</button>
    </form>
  );
}

export default Form;
