import React from 'react'
import CharacterName from './CharacterName'

const CharacterList = props => {
    const {characters, setFocusedCharacter, names} = props;

    

    return(
        <div>
            {names.map(n => {
                return <CharacterName key={names.indexOf(n)} name={n} setFocusedCharacter={setFocusedCharacter} characters={characters}/>
            })}
        </div>
    )

}

export default CharacterList