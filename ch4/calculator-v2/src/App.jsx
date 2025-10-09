import { useState } from 'react';

import Calculation from './components/Calculation.jsx';
import Result from './components/Result.jsx';

function App() {
  // Estado para armazenar os números digitados
  const [enteredNumbers, setEnteredNumbers] = useState({ first: 0, second: 0 });
  // Estado para armazenar a operação escolhida, padrão é adição
  const [chosenOperation, setChosenOperation] = useState('add');

  // Atualiza o valor do primeiro número
  function handleChangeFirstNumber(event) {
    // Converte o valor para número e atualiza o estado
    setEnteredNumbers((prevNumbers) => ({
      first: +event.target.value,
      second: prevNumbers.second,
    }));
  }

  // Atualiza o valor do segundo número
  function handleChangeSecondNumber(event) {
    // Converte o valor para número e atualiza o estado
    setEnteredNumbers((prevNumbers) => ({
      first: prevNumbers.first,
      second: +event.target.value,
    }));
  }

  // Atualiza a operação matemática escolhida
  function handleUpdateOperation(event) {
    setChosenOperation(event.target.value);
  }

  // Calcula o resultado com base na operação escolhida
  let result;
  if (chosenOperation === 'add') {
    result = enteredNumbers.first + enteredNumbers.second; // soma
  } else if (chosenOperation === 'subtract') {
    result = enteredNumbers.first - enteredNumbers.second; // subtração
  } else if (chosenOperation === 'multiply') {
    result = enteredNumbers.first * enteredNumbers.second; // multiplicação
  } else {
    result = enteredNumbers.first / enteredNumbers.second; // divisão
  }

  // Renderiza os componentes Calculation e Result, passando as funções de manipulação e o resultado
  return (
    <>
      <Calculation
        onFirstNumberChanged={handleChangeFirstNumber}
        onSecondNumberChanged={handleChangeSecondNumber}
        onOperationChanged={handleUpdateOperation}
      />
      <Result calculationResult={result} />
    </>
  );
}

export default App;
