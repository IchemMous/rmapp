import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterPage from './CharacterPage';


export default function CharacterRoute({ characterId }) {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => {
                setCharacter(data);
            });
    }, [id]);

    return (
        <CharacterPage character={character} />
    )
        
}