import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Character from './components/Character'
import './App.css';

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
  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characters={characters} focusedCharacter={focusedCharacter} setFocusedCharacter={setFocusedCharacter} names={names}/>
    </div>
  );
}

export default App;
