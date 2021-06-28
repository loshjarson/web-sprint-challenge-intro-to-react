import React  from 'react'


const Details = props => {
    const {focusedCharacter} = props;

    if(focusedCharacter !== null){
        return(
            <div>
                <p>{focusedCharacter.name}</p>
                <p>{focusedCharacter.created}</p>
                <p>{focusedCharacter.edited}</p>
                <p>{focusedCharacter.birth_year}</p>
                <p>{focusedCharacter.gender}</p>
                <p>{focusedCharacter.eye_color}</p>
                <p>{focusedCharacter.hair_color}</p>
                <p>{focusedCharacter.skin_color}</p>
                <p>{focusedCharacter.height}</p>
                <p>{focusedCharacter.mass}</p>
                <ul>{focusedCharacter.films.map(f => {
                    return( <li>{f}</li>)
                })}</ul>
            </div>
        )
    } else {
        return(
            <div></div>
        )
    }
}
    

export default Details