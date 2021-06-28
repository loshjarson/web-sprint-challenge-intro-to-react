import React  from 'react';
import styled from "styled-components";

const Details = props => {
    const {focusedCharacter} = props;

    const DetailContainer = styled.div`
        display: flex;
        flex-direction: column;
        border: 2px solid rgb(52, 255, 20);
        border-radius: 15px;
        width: 30%;
        background-color: rgba(0, 0, 0,.5);
        padding: 2rem;
        color: rgb(52, 255, 20);
        text-align: left;
    `

    const Detail = styled.p`
        text-align: left;
    `


    if(focusedCharacter !== null){
        return(
            <DetailContainer>
                <p>Name: {focusedCharacter.name}</p>
                <p>Created: {focusedCharacter.created}</p>
                <p>Edited: {focusedCharacter.edited}</p>
                <p>Birth Year: {focusedCharacter.birth_year}</p>
                <p>Gender: {focusedCharacter.gender}</p>
                <p>Eye Color: {focusedCharacter.eye_color}</p>
                <p>Hair Color: {focusedCharacter.hair_color}</p>
                <p>Skin Color: {focusedCharacter.skin_color}</p>
                <p>Height: {focusedCharacter.height}</p>
                <p>Mass: {focusedCharacter.mass}</p>
                <p>Movies:<ul> {focusedCharacter.films.map(f => {
                    return( <li>{f}</li>)
                })}</ul></p> 
            </DetailContainer>
        )
    } else {
        return(
            <DetailContainer></DetailContainer>
        )
    }
}
    

export default Details