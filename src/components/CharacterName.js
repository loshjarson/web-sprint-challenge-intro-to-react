const CharacterName = props => {
    const {name, setFocusedCharacter, characters} = props;
    
    const handleClick = e => {
        characters.forEach(c => {
            if (c.name === e.target.innerText) {
                setFocusedCharacter(c) 
            }
        })
    }
    return(
        <div>
            <p onClick={e=>handleClick(e)}>{name}</p>
        </div>
    )
}

export default CharacterName