// Importamos uma função do React (useState) para criação de estado
// useEffect dispara função quando alguma informação é alterada ou unicamente na renderização do componente
import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevForm from '../src/components/DevForm/index' 
import DevItem from './components/DevItem/index'


function App() {
  // Armazena os Devs em um estado para mostrar em tela 
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    // Função que carrega os Devs da aplicação
    async function loadDevs() {
      const response = await api.get('/devs')

      setDevs(response.data)
    }
    // Executa a função loadDevs após execução do useEffect
    loadDevs();
  }, []);
  // Função que dispara ao clicar no submit do formulário
  // Previniu o comportamento do formulario que é enviar usuário para outra tela
  async function handleAddDev(data) {

    // Chamada API
    const response = await api.post('/devs', data)
    // Limpa campos após chamada API

    setDevs([...devs, response.data]);
  }
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {/* () = como return */}
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
