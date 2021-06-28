import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Character from './components/Character'
import './App.css';
import { createGlobalStyle } from 'styled-components';
import AurebeshTTF from './font/Aurebesh_english-Regular.ttf'

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [focusedCharacter, setFocusedCharacter] = useState(null);
  const [names, setNames] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(({data}) => {
      const n = []
      console.log(data)
      setCharacters(data)
      data.forEach(c =>{
        n.push(c.name)
      });
      setNames(n)
    })
    .catch(err => console.log('Error getting character list: ', err))
  }, [])
  
  const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Aurebesh_english';
      src: url('${AurebeshTTF}');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }`

  return (
    <div className="App">
      <GlobalStyle/>
      <h1 className="Header">Characters</h1>
      <Character characters={characters} focusedCharacter={focusedCharacter} setFocusedCharacter={setFocusedCharacter} names={names}/>
    </div>
  );
}

export default App;
