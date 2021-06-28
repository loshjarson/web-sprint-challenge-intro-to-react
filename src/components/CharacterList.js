import React from 'react';
import CharacterName from './CharacterName';
import styled from "styled-components";

const CharacterList = props => {
    const {characters, setFocusedCharacter, names} = props;

    const CharacterList = styled.div`
        border: 2px solid rgb(52, 255, 20);
        border-radius: 15px;
        width: 30%;
        background-color: rgba(0, 0, 0,.5);
        padding: 2rem;
        color: rgb(52, 255, 20);
        display: flex;
        height: 50rem;
    `

    const Container = styled.div`
        margin: auto;
        font-size: 30px;
    `

    return(
        <CharacterList>
            <Container>
                {names.map(n => {
                    return <CharacterName key={n} name={n} setFocusedCharacter={setFocusedCharacter} characters={characters}/>
                })}
            </Container>
        </CharacterList>
    )

}

export default CharacterList