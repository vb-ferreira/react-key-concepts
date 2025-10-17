import { useState } from 'react';

function App() {
  // Cria um estado chamado `email` com sua função de atualização `setEmail`.
  // Inicializamos com `true`, significando "sem erro" por padrão.
  // `email` é usado aqui como uma flag booleana que representa se
  // o valor atual do email é considerado válido (true) ou inválido (false).
  const [email, setEmail] = useState(true);

  // Handler para o evento de envio do formulário. Recebe o objeto de evento do navegador.
  function handleSubmit(event) {
    // Impede que o navegador recarregue a página ao enviar o formulário.
    event.preventDefault();

    // Acessa o valor do input com id="emailAddress".
    // Em seguida, verifica se essa string inclui um caractere '@'.
    // Se a verificação passar, chama `setEmail(true)` para marcar o email como válido,
    // caso contrário, chama `setEmail(false)` para marcar como inválido.
    event.target.emailAddress.value.includes('@')
      ? setEmail(true)
      : setEmail(false);
  }

  return (
    <section>
      {/* O elemento <form> é conectado à função handleSubmit. */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="emailAddress">Email for</label>
        <input type="text" id="emailAddress" />

        {/* Botão de envio que aciona o onSubmit do formulário ao ser clicado. */}
        <button type="submit">Submit</button>
      </form>

      {/*
        Renderização condicional: se `email` for false (inválido), exiba uma mensagem de erro.
        Usamos o operador lógico AND (&&) para que o <p> só seja renderizado quando o lado esquerdo for falsy.
      */}
      {!email && <p>invalid email address entered!</p>}
    </section>
  );
}

export default App;
