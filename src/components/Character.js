import React from 'react'
import Details from './Details'
import CharacterList from './CharacterList'

const Character = props => {
    const {characters, setFocusedCharacter, names, focusedCharacter} = props;
    
    return(
        <div className="container">
            <CharacterList characters={characters} setFocusedCharacter={setFocusedCharacter} names={names}/>
            <Details focusedCharacter={focusedCharacter}/>
        </div>
    );
}

export default Character