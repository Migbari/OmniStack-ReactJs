import React from 'react';

// Para chamar o parâmetro de Header (props) devemos colocar entre {}, indicando a utilização de JavaScript
function Header (props) {
// Acessamos a props.title passada em App.js
return <h1>{props.title}</h1> 
}
export default Header;