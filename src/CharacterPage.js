import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterEpisodes from "./CharacterEpisodes";
import FavButton from "./FavButton";

function CharacterPage() {
    const {id} = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => {
                setCharacter(data);
            });
    }, [id]);

    return (
        <div className='container'>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name}/>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin.name}</p>
            <CharacterEpisodes characterId={character.id} />
        </div>
            
    )
}
export default CharacterPage;




    