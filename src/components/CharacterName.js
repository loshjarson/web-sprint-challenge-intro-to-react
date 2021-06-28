import React from 'react';
import styled from "styled-components";

const CharacterName = props => {
    const {name, setFocusedCharacter, characters} = props;
    
    const handleClick = e => {
        characters.forEach(c => {
            if (c.name === e.target.innerText) {
                setFocusedCharacter(c) 
            }
        })
    }
    const Name = styled.p`
        font-family: 'Aurebesh_english';
    `
    return(
        <div>
            <Name onClick={e=>handleClick(e)}>{name}</Name>
        </div>
    )
}

export default CharacterName