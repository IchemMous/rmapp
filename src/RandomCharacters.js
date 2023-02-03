import React, { useState, useEffect } from 'react';
import Character from './Character';

function RandomCharacters() {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                const allCharacters = data.results;
                const randomCharacters = [];
                for (let i = 0; i < 5; i++) {
                    let randomIndex = Math.floor(Math.random() * allCharacters.length);
                    while (randomCharacters.includes(allCharacters[randomIndex])) {
                        randomIndex = Math.floor(Math.random() * allCharacters.length);
                    }
                    randomCharacters.push(allCharacters[randomIndex]);
                }
                setCharacters(randomCharacters);
            });
    }, []);
    console.log(characters);
    return (
        <div>
            <h2>5 personnages aléatoires</h2>
            {characters.map((character) => (
                <Character
                    key={character.id}
                    character={character}
                />
            ))}
        </div>
    );
}

export default RandomCharacters;