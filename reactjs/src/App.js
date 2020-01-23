// Importamos uma função do React (useState) para criação de estado
import React, { useState } from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'
import Header from './Header'

function App() {
    return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <form>
            <div className="input_block">
              {/* htmlFor para clicar em na label e direcionar ao input */}
              <label htmlFor="github_username">Usuário do Github</label>
              <input name="github_username" id="github_username" required/>
            </div>

            <div className="input_block">
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" id="techs" required/>
            </div>

          <div className="input_group">
            <div className="input_block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div className="input_block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
           </div>

           <button type="submit">Salvar</button>
          </form>
        </aside>
        <main>
          <ul>
            <li className="dev_item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/55153496?s=460&v=4" alt="Miguel Batista"/>
                <div className="user_info">
                  <strong>Miguel Batista</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>
              </header>
              <p>May your faith in life be greater than your fears!</p>
              <a href="https://github.com/Migbari">Acessar Perfil no Github</a>
             </li>
            <li className="dev_item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/55153496?s=460&v=4" alt="Miguel Batista"/>
                <div className="user_info">
                  <strong>Miguel Batista</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>
              </header>
              <p>May your faith in life be greater than your fears!</p>
              <a href="https://github.com/Migbari">Acessar Perfil no Github</a>
             </li>
            <li className="dev_item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/55153496?s=460&v=4" alt="Miguel Batista"/>
                <div className="user_info">
                  <strong>Miguel Batista</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>
              </header>
              <p>May your faith in life be greater than your fears!</p>
              <a href="https://github.com/Migbari">Acessar Perfil no Github</a>
             </li>
            <li className="dev_item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/55153496?s=460&v=4" alt="Miguel Batista"/>
                <div className="user_info">
                  <strong>Miguel Batista</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>
              </header>
              <p>May your faith in life be greater than your fears!</p>
              <a href="https://github.com/Migbari">Acessar Perfil no Github</a>
             </li>
          </ul>
        </main>
      </div>
  );
}

export default App;
