import React from 'react';
import Details from './Details';
import CharacterList from './CharacterList';
import styled from "styled-components";


const Character = props => {
    const {characters, setFocusedCharacter, names, focusedCharacter} = props;
    
    

    const Container = styled.div`
        display: flex;
        justify-content: space-around;
        
    `

    return(
        <Container>
            <CharacterList characters={characters} setFocusedCharacter={setFocusedCharacter} names={names}/>
            <Details focusedCharacter={focusedCharacter}/>
        </Container>
    );
}

export default Character