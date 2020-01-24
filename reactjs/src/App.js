// Importamos uma função do React (useState) para criação de estado
import React, { useState, useEffect } from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'


function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude } = position.coords;
        // console.log(position);
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) =>{
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, [])
  
    async function handleAddDev(e) {
      e.preventDefault();

      
    }

    return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <form onSubmit={handleAddDev}>
            <div className="input_block">
              {/* htmlFor para clicar em na label e direcionar ao input */}
              <label htmlFor="github_username">Usuário do Github</label>
              <input name="github_username" 
              id="github_username" 
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
              />
            </div>

            <div className="input_block">
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
              />
            </div>

          <div className="input_group">
            <div className="input_block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" 
              name="latitude" id="latitude"
              required value={latitude}
              onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input_block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" 
              name="longitude" 
              id="longitude" 
              required value={longitude}
              onChange={e => setLongitude(e.target.value)}
              />
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
