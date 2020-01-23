// Importamos uma função do React (useState) para criação de estado
import React, { useState } from 'react';
import Header from './Header'

function App() {
  // Função useState(0); para definir o estado inicial da variáveç counter
    
  // useState retorna por padrão um vetor, faremos a desestruturação (tornar o retorno em variáveis) 
  // onde 1ª variável guarda o inicial (0) e a 2ª atualiza o estado.
  // setCounter não atualiza o valor de counter, mas cria novo counter a partir do seu valor anterior (imutabilidade). 
  const [counter, setCounter] = useState(0);

  function IncrementCounter(){
    // Seta novo valor para counter, sendo counter + 1
    setCounter(counter + 1);
  }
    return (
    <>
    {/* Criamos a propriedade title para o Header na página App.js */}
    <Header title="Sou o Header"/> 
    <h1>Contador: {counter}</h1>  {/*Chama counter variavel*/}
    <button onClick={IncrementCounter}>Incrementar</button> {/*Ativa a função */}
    </>
  );
}

export default App;
