import React, { useState, useEffect } from 'react';

function DevForm({ onSubmit }) {

    //Criamos estado para armazenar os valores passando o valor inicial como String vazia
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    // useEffect recebe 2 parametros, 1º Função a executar / 2º Quando executar
    useEffect(() => {
        // Função de geolocalização do navegador a ser executada dentro do useEffect  
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // Pega a latitude e longitude do objeto coords.
                const { latitude, longitude } = position.coords;
                // console.log(position);

                // Preenchemos o valor do estado
                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        );
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
        });

        setGithubUsername('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
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
    );
}

export default DevForm;